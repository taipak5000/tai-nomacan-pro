// maps-data.js
// 🗺️ 「地図で選ぶ」ビュー用のデータ。
// 1枚に全エリアを詰め込む俯瞰図ではなく、サブエリアごとの「デフォルメした個別ミニマップ」を
// 描画する方式。スポット名をマップ上に直接表示し、見やすさを最優先にしている。
// 描画はすべてオリジナル（他サイト・攻略画像の転載やトレースはしていません）。

(function () {
    // 文字列 → 決定的な32bit seed
    const hashStr = (str) => {
        let h = 0;
        for (let i = 0; i < str.length; i++) h = (Math.imul(h, 31) + str.charCodeAt(i)) >>> 0;
        return h;
    };

    // seed付き乱数（mulberry32）
    const seededRand = (seed) => {
        let t = seed >>> 0;
        return () => {
            t += 0x6D2B79F5;
            let x = Math.imul(t ^ (t >>> 15), 1 | t);
            x ^= x + Math.imul(x ^ (x >>> 7), 61 | x);
            return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
        };
    };

    // 中心(cx,cy)・半径(rx,ry)・seed から、手描き風の有機的な閉曲線（地形ブロブ）を生成
    const blobPath = (cx, cy, rx, ry, seed, points = 9, irregularity = 0.16) => {
        const rand = seededRand(seed);
        const pts = [];
        for (let i = 0; i < points; i++) {
            const ang = (Math.PI * 2 * i) / points;
            const jit = 1 - irregularity + rand() * irregularity * 2;
            pts.push([cx + Math.cos(ang) * rx * jit, cy + Math.sin(ang) * ry * jit]);
        }
        let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
        for (let i = 0; i < points; i++) {
            const p0 = pts[(i - 1 + points) % points], p1 = pts[i],
                  p2 = pts[(i + 1) % points], p3 = pts[(i + 2) % points];
            const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
            const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
            d += ` C ${c1[0].toFixed(1)} ${c1[1].toFixed(1)}, ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
        }
        return d + ' Z';
    };

    window.SkyMapGeo = { hashStr, blobPath };
})();

// 🎨 メインエリアごとのテーマ配色。
// sky=カード背景 / blob=地形の塗り / blobLine=地形の輪郭 / label=文字色 / halo=文字縁取り
// deco=ミニマップの隅に添える飾りの種類
const SKY_MAP_THEMES = {
    'ホーム':           { sky: '#FFF3E0', blob: '#FFE9C7', blobLine: '#DFA45E', label: '#6b4f2a', halo: 'rgba(255,250,240,0.9)', deco: 'tree' },
    '孤島':             { sky: '#FFE9EF', blob: '#FBE9D3', blobLine: '#DCA57C', label: '#7a4f33', halo: 'rgba(255,248,242,0.9)', deco: 'wave' },
    '草原':             { sky: '#EAF7E4', blob: '#EAF6D2', blobLine: '#96BF66', label: '#48632c', halo: 'rgba(250,255,242,0.9)', deco: 'tree' },
    '雨林':             { sky: '#E2F1EC', blob: '#DEEFD8', blobLine: '#74A97E', label: '#3c5c42', halo: 'rgba(245,252,246,0.9)', deco: 'rain' },
    '峡谷':             { sky: '#EAF4FF', blob: '#E9F1FD', blobLine: '#8FB4E4', label: '#3d5a80', halo: 'rgba(248,252,255,0.92)', deco: 'star' },
    '捨て地':           { sky: '#F4E8D0', blob: '#F3E4C2', blobLine: '#C49E58', label: '#6d5426', halo: 'rgba(252,246,232,0.9)', deco: 'mtn' },
    '書庫':             { sky: '#ECE6F8', blob: '#EFE8FA', blobLine: '#9C86CC', label: '#4a3a70', halo: 'rgba(250,247,255,0.92)', deco: 'book' },
    'コラボルーム':     { sky: '#342E58', blob: '#5C5190', blobLine: '#9A8CD8', label: '#F2EEFF', halo: 'rgba(38,32,66,0.85)', deco: 'moon' },
    'ソーシャルライト': { sky: '#FFF7DD', blob: '#FFF2C8', blobLine: '#DCB25E', label: '#6f5722', halo: 'rgba(255,252,240,0.9)', deco: 'star' },
    'ランダムの火種':   { sky: '#F4EAFF', blob: '#F0E4FF', blobLine: '#AE8DD6', label: '#563d7c', halo: 'rgba(251,247,255,0.9)', deco: 'star' }
};

// 📍 スポット配置を手作業で決めたいサブエリアだけ、ここに個別レイアウトを定義する。
// （未定義のサブエリアは自動レイアウトで整列配置される）
// 座標は 幅340 × 高さh のミニマップ内の絶対座標。
const SKY_DETAIL_LAYOUTS = {
    'ホーム': {
        // 花鳥郷: 縦長の村。上＝ショップ街、中央＝着替えの祠の広場、下＝カフェ側
        '花鳥郷': {
            h: 500,
            spots: {
                '魔法ショップT字路': [105, 92],
                '希望の番人横':      [242, 92],
                '日々イベ案内人横':  [170, 168],
                'シェアメモ付近':    [78, 210],
                '美容室入り口':      [265, 210],
                '着替えの祠付近':    [170, 255],
                'シアターT字路':     [82, 300],
                'キャンドル職人':    [258, 300],
                'カフェ入り口':      [112, 385],
                'シナモロール':      [230, 385]
            }
        },
        // アリスカフェ: 店内を2列に見立てて配置（左＝暖炉側、右＝カウンター側）
        'アリスカフェ': {
            h: 505,
            spots: {
                '暖炉付近・赤キャンドル1本':  [85, 92],
                'ソファ横・１本':             [255, 92],
                'メッセージボート付近・３本': [85, 177],
                '鉢植え横・３本':             [255, 177],
                'カウンター内側・３本':       [85, 262],
                'カウンター外側・３本':       [255, 262],
                '浮いている火種１２か所合計': [85, 347],
                '闇花合計':                   [255, 347],
                'カニうさぎ1回':              [85, 432],
                'カウンターキノコ７か所合計': [255, 432],
                'ミニゲーム（タスク1回）':    [170, 390]
            }
        }
    }
};

window.SKY_MAP_THEMES = SKY_MAP_THEMES;
window.SKY_DETAIL_LAYOUTS = SKY_DETAIL_LAYOUTS;
