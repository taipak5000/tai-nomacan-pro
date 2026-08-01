// areas-data.js
// time の単位: 秒（中級者・スマートフォン基準）
// 習熟度係数が乗算されて各プレイヤーの初期値になり、
// その後はマイルートの実測タイマー結果で少しずつ自動補正されます

const SKY_DEFAULT_AREAS = [
    {
        name: "ホーム",
        isExpanded: true,
        subAreas: [
            {
                // 花鳥郷：密集しているが数が多い。徒歩移動多め
                name: "花鳥郷",
                isExpanded: false,
                time: 60,
                spots: [
                    { name: "カフェ入り口",           light: 3,   time: 0, isSelected: false },
                    { name: "シェアメモ付近",          light: 3,   time: 0, isSelected: false },
                    { name: "シアターT字路",           light: 3,   time: 0, isSelected: false },
                    { name: "日々イベ案内人横",        light: 4,   time: 0, isSelected: false },
                    { name: "キャンドル職人",          light: 3,   time: 0, isSelected: false },
                    { name: "美容室入り口",            light: 2,   time: 0, isSelected: false },
                    { name: "魔法ショップT字路",       light: 3,   time: 0, isSelected: false },
                    { name: "希望の番人横",            light: 3,   time: 0, isSelected: false },
                    { name: "着替えの祠付近",          light: 3,   time: 0, isSelected: false },
                    { name: "シナモロール",            light: 50,  time: 0, isSelected: false }
                ]
            },
            {
                // 旧ホーム：祠前がまとまっている
                name: "旧ホーム",
                isExpanded: false,
                time: 30,
                spots: [
                    { name: "池付近",       light: 6, time: 0, isSelected: false },
                    { name: "祠前・持ち物", light: 4, time: 0, isSelected: false },
                    { name: "祠前・ケープ", light: 3, time: 0, isSelected: false },
                    { name: "祠前・髪型",   light: 3, time: 0, isSelected: false },
                    { name: "祠前・マスク", light: 3, time: 0, isSelected: false },
                    { name: "祠前・服装",   light: 4, time: 0, isSelected: false }
                ]
            },
            {
                // アリスカフェ：コラボエリア、内部巡回あり
                name: "アリスカフェ",
                isExpanded: false,
                time: 296,
                spots: [
                    { name: "暖炉付近・赤キャンドル1本",   light: 5,   time: 0, isSelected: false },
                    { name: "ソファ横・１本",              light: 5,   time: 0, isSelected: false },
                    { name: "メッセージボート付近・３本",   light: 15,  time: 0, isSelected: false },
                    { name: "鉢植え横・３本",              light: 15,  time: 0, isSelected: false },
                    { name: "カウンター内側・３本",        light: 15,  time: 0, isSelected: false },
                    { name: "カウンター外側・３本",        light: 15,  time: 0, isSelected: false },
                    { name: "浮いている火種１２か所合計",  light: 120, time: 0, isSelected: false },
                    { name: "闇花合計",                   light: 42,  time: 0, isSelected: false },
                    { name: "カニうさぎ1回",              light: 10,  time: 0, isSelected: false },
                    { name: "カウンターキノコ７か所合計",  light: 35,  time: 0, isSelected: false },
                    { name: "ミニゲーム（タスク1回）",     light: 20,  time: 0, isSelected: false }
                ]
            },
            {
                // カーニバル：ボート系でやや移動
                name: "カーニバルエリア",
                isExpanded: false,
                time: 110,
                spots: [
                    { name: "大キャンドル3つ",        light: 150, time: 0, isSelected: false },
                    { name: "小型ボートキャンドル１本", light: 1,   time: 0, isSelected: false },
                    { name: "メリーゴーランド船",       light: 30,  time: 0, isSelected: false },
                    { name: "観覧車船",                light: 30,  time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "孤島",
        isExpanded: false,
        subAreas: [
            // 孤島は各エリアが離れており飛行必須
            // ※各スポットの火種量は「エリア全体」の従来合計を、地図上の火種の分布を参考に按分した目安値
            {
                name: "孤島台地", isExpanded: false, time: 120,
                spots: [
                    { name: "スタート洞窟", light: 18, time: 0, isSelected: false },
                    { name: "左手の遺跡",   light: 20, time: 0, isSelected: false },
                    { name: "中央の一枚岩", light: 22, time: 0, isSelected: false },
                    { name: "右手の洞窟",   light: 20, time: 0, isSelected: false },
                    { name: "波打ち際",     light: 18, time: 0, isSelected: false }
                ]
            },
            {
                name: "孤島の神殿", isExpanded: false, time: 90,
                spots: [
                    { name: "神殿内部",     light: 17, time: 0, isSelected: false },
                    { name: "神殿前テラス", light: 12, time: 0, isSelected: false },
                    { name: "崖沿いの燭台", light: 8,  time: 0, isSelected: false }
                ]
            },
            {
                name: "孤島の見晴らし台", isExpanded: false, time: 150,
                spots: [
                    { name: "塔内の部屋",   light: 29, time: 0, isSelected: false },
                    { name: "見晴らし広場", light: 32, time: 0, isSelected: false },
                    { name: "崖沿いの小道", light: 28, time: 0, isSelected: false }
                ]
            },
            {
                name: "預言者の石窟", isExpanded: false, time: 300,
                spots: [
                    { name: "石窟ホール", light: 88,  time: 0, isSelected: false },
                    { name: "風の道",     light: 65,  time: 0, isSelected: false },
                    { name: "水の試練",   light: 120, time: 0, isSelected: false },
                    { name: "地の試練",   light: 130, time: 0, isSelected: false },
                    { name: "風の試練",   light: 130, time: 0, isSelected: false },
                    { name: "火の試練",   light: 140, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "草原",
        isExpanded: false,
        subAreas: [
            // 草原：比較的広い、飛行で短縮しやすい
            {
                name: "ロビー・蝶々の住処", isExpanded: false, time: 90,
                spots: [
                    { name: "蝶々の草原",   light: 20, time: 0, isSelected: false },
                    { name: "洞窟前の祠",   light: 15, time: 0, isSelected: false },
                    { name: "ロビー奥",     light: 20, time: 0, isSelected: false }
                ]
            },
            {
                name: "草原の村", isExpanded: false, time: 150,
                spots: [
                    { name: "村の広場",     light: 30, time: 0, isSelected: false },
                    { name: "民家まわり",   light: 28, time: 0, isSelected: false },
                    { name: "村はずれの祠", light: 26, time: 0, isSelected: false },
                    { name: "高台への道",   light: 20, time: 0, isSelected: false }
                ]
            },
            {
                name: "草原高地（オレオ）", isExpanded: false, time: 180,
                spots: [
                    { name: "山道",     light: 30, time: 0, isSelected: false },
                    { name: "頂上の池", light: 39, time: 0, isSelected: false },
                    { name: "峰の祠",   light: 30, time: 0, isSelected: false }
                ]
            },
            {
                name: "草原の神殿", isExpanded: false, time: 120,
                spots: [
                    { name: "神殿内部",   light: 24, time: 0, isSelected: false },
                    { name: "神殿前",     light: 31, time: 0, isSelected: false },
                    { name: "八人エリア", light: 30, time: 0, isSelected: false }
                ]
            },
            {
                name: "草原の洞窟", isExpanded: false, time: 90,
                spots: [
                    { name: "洞窟内の池", light: 25, time: 0, isSelected: false },
                    { name: "奥の燭台",   light: 20, time: 0, isSelected: false }
                ]
            },
            {
                name: "鳥の巣", isExpanded: false, time: 90,
                spots: [
                    { name: "巣の島",     light: 26, time: 0, isSelected: false },
                    { name: "周辺の小島", light: 24, time: 0, isSelected: false }
                ]
            },
            {
                name: "楽園", isExpanded: false, time: 240,
                spots: [
                    { name: "楽園の島々", light: 120, time: 0, isSelected: false },
                    { name: "隠者の島",   light: 60,  time: 0, isSelected: false },
                    { name: "泉エリア",   light: 60,  time: 0, isSelected: false },
                    { name: "上空の島",   light: 60,  time: 0, isSelected: false },
                    { name: "ワープ周辺", light: 49,  time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "雨林",
        isExpanded: false,
        subAreas: [
            // 雨林：縦移動・複雑地形。ツリーハウスや風の街道は長め
            {
                name: "前庭",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "月・水・金・日 エリア全体", light: 46, time: 0, isSelected: false, group: "曜日" },
                    { name: "火・木・土 エリア全体",     light: 45, time: 0, isSelected: false, group: "曜日" }
                ]
            },
            {
                name: "小川", isExpanded: false, time: 240,
                spots: [
                    { name: "入口の川辺", light: 45, time: 0, isSelected: false },
                    { name: "中流の巣",   light: 50, time: 0, isSelected: false },
                    { name: "東屋まわり", light: 47, time: 0, isSelected: false },
                    { name: "上流の岩場", light: 45, time: 0, isSelected: false },
                    { name: "出口付近",   light: 40, time: 0, isSelected: false }
                ]
            },
            {
                name: "墓場（神殿前）", isExpanded: false, time: 210,
                spots: [
                    { name: "骨の原",     light: 60, time: 0, isSelected: false },
                    { name: "神殿への道", light: 55, time: 0, isSelected: false },
                    { name: "川沿い",     light: 60, time: 0, isSelected: false }
                ]
            },
            {
                name: "高台広場（晴れ間）", isExpanded: false, time: 90,
                spots: [
                    { name: "広場中央",     light: 22, time: 0, isSelected: false },
                    { name: "ベンチまわり", light: 20, time: 0, isSelected: false }
                ]
            },
            {
                name: "大空洞", isExpanded: false, time: 120,
                spots: [
                    { name: "空洞内部",   light: 30, time: 0, isSelected: false },
                    { name: "崖の燭台",   light: 27, time: 0, isSelected: false }
                ]
            },
            {
                name: "雨林の神殿", isExpanded: false, time: 120,
                spots: [
                    { name: "神殿内部", light: 30, time: 0, isSelected: false },
                    { name: "神殿前",   light: 29, time: 0, isSelected: false }
                ]
            },
            {
                name: "聖なる池", isExpanded: false, time: 60,
                spots: [
                    { name: "池のほとり", light: 13, time: 0, isSelected: false },
                    { name: "岩の上",     light: 11, time: 0, isSelected: false }
                ]
            },
            {
                name: "ツリーハウス", isExpanded: false, time: 150,
                spots: [
                    { name: "家の中",   light: 20, time: 0, isSelected: false },
                    { name: "テラス",   light: 18, time: 0, isSelected: false },
                    { name: "下の池",   light: 17, time: 0, isSelected: false }
                ]
            },
            {
                name: "風の街道", isExpanded: false, time: 300,
                spots: [
                    { name: "街道入り口", light: 50, time: 0, isSelected: false },
                    { name: "中間の岩場", light: 50, time: 0, isSelected: false },
                    { name: "出口の崖",   light: 50, time: 0, isSelected: false },
                    { name: "隠し部屋",   light: 48, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "峡谷",
        isExpanded: false,
        subAreas: [
            // 峡谷：陸レ・空レで大きく変わる。レース系は長い
            {
                name: "ロビー", isExpanded: false, time: 90,
                spots: [
                    { name: "坂の途中", light: 28, time: 0, isSelected: false },
                    { name: "売店前",   light: 27, time: 0, isSelected: false }
                ]
            },
            {
                name: "凍った湖（アイスリンク）", isExpanded: false, time: 120,
                spots: [
                    { name: "リンク中央", light: 22, time: 0, isSelected: false },
                    { name: "観客席側",   light: 21, time: 0, isSelected: false },
                    { name: "祠まわり",   light: 21, time: 0, isSelected: false }
                ]
            },
            {
                name: "陸通り（陸レ）", isExpanded: false, time: 360,
                spots: [
                    { name: "スタート地点", light: 40, time: 0, isSelected: false },
                    { name: "中間コース",   light: 60, time: 0, isSelected: false },
                    { name: "ゴール手前",   light: 60, time: 0, isSelected: false }
                ]
            },
            {
                name: "城塞都市", isExpanded: false, time: 150,
                spots: [
                    { name: "城塞前広場", light: 27, time: 0, isSelected: false },
                    { name: "城壁沿い",   light: 26, time: 0, isSelected: false },
                    { name: "塔の上",     light: 26, time: 0, isSelected: false }
                ]
            },
            {
                name: "空通り（空レ）", isExpanded: false, time: 300,
                spots: [
                    { name: "スタート台",   light: 40, time: 0, isSelected: false },
                    { name: "空中リング",   light: 65, time: 0, isSelected: false },
                    { name: "ゴールエリア", light: 65, time: 0, isSelected: false }
                ]
            },
            {
                name: "円形劇場", isExpanded: false, time: 60,
                spots: [
                    { name: "客席",     light: 12, time: 0, isSelected: false },
                    { name: "中央舞台", light: 10, time: 0, isSelected: false }
                ]
            },
            {
                name: "峡谷の神殿", isExpanded: false, time: 150,
                spots: [
                    { name: "神殿内部", light: 33, time: 0, isSelected: false },
                    { name: "神殿前",   light: 30, time: 0, isSelected: false },
                    { name: "神殿裏手", light: 30, time: 0, isSelected: false }
                ]
            },
            {
                name: "夢見の町",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "ゴンドラ付近DC", light: 50, time: 0, isSelected: false },
                    { name: "温泉DC",         light: 50, time: 0, isSelected: false }
                ]
            },
            {
                name: "隠者の峠", isExpanded: false, time: 180,
                spots: [
                    { name: "谷の入り口", light: 34, time: 0, isSelected: false },
                    { name: "隠者の家",   light: 34, time: 0, isSelected: false },
                    { name: "奥の崖",     light: 34, time: 0, isSelected: false }
                ]
            },
            { name: "奏の音楽堂",   isExpanded: false, time: 120, spots: [{ name: "演奏8割成功", light: 100, time: 0, isSelected: false }] }
        ]
    },
    {
        name: "捨て地",
        isExpanded: false,
        subAreas: [
            // 捨て地：広く暗め。曜日でルートが変わる
            {
                name: "外郭（倒壊した祠）",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "月水金エリア合計", light: 64,  time: 0, isSelected: false, group: "月水金曜日" },
                    { name: "火木土エリア合計", light: 65,  time: 0, isSelected: false, group: "火木土曜日" },
                    { name: "日曜日エリア合計", light: 86,  time: 0, isSelected: false, group: "日曜日" }
                ]
            },
            {
                name: "墓所の入り口",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "月水金エリア合計", light: 42, time: 0, isSelected: false, group: "月水金曜日" },
                    { name: "火木土エリア合計", light: 30, time: 0, isSelected: false, group: "火木土曜日" },
                    { name: "日曜日エリア合計", light: 45, time: 0, isSelected: false, group: "日曜日" }
                ]
            },
            {
                name: "墓所",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "月水金エリア合計", light: 88,  time: 0, isSelected: false, group: "曜日" },
                    { name: "火木土エリア合計", light: 100, time: 0, isSelected: false, group: "曜日" },
                    { name: "日曜日エリア合計", light: 112, time: 0, isSelected: false, group: "曜日" }
                ]
            },
            {
                name: "戦場",
                isExpanded: false,
                time: 240,
                spots: [
                    { name: "月水金エリア合計", light: 111, time: 0, isSelected: false, group: "月水金曜日" },
                    { name: "火木土エリア合計", light: 111, time: 0, isSelected: false, group: "火木土曜日" },
                    { name: "日曜日エリア合計", light: 139, time: 0, isSelected: false, group: "日曜日" }
                ]
            },
            {
                name: "蟹の沼地（座礁船）",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "月水金エリア合計", light: 63,  time: 0, isSelected: false, group: "月水金曜日" },
                    { name: "火木土エリア合計", light: 63,  time: 0, isSelected: false, group: "火木土曜日" },
                    { name: "日曜日エリア合計", light: 101, time: 0, isSelected: false, group: "日曜日" }
                ]
            },
            {
                name: "捨て地神殿", isExpanded: false, time: 90,
                spots: [
                    { name: "神殿内部",   light: 22, time: 0, isSelected: false },
                    { name: "入口の廊下", light: 18, time: 0, isSelected: false }
                ]
            },
            {
                name: "忘れられた方舟", isExpanded: false, time: 240,
                spots: [
                    { name: "方舟の甲板", light: 40, time: 0, isSelected: false },
                    { name: "沼地まわり", light: 35, time: 0, isSelected: false },
                    { name: "裏の岩場",   light: 34, time: 0, isSelected: false }
                ]
            },
            {
                name: "秘宝の岩礁", isExpanded: false, time: 300,
                spots: [
                    { name: "岩礁の浅瀬",     light: 65, time: 0, isSelected: false },
                    { name: "沈没船まわり",   light: 63, time: 0, isSelected: false },
                    { name: "外洋の岩",       light: 60, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "書庫",
        isExpanded: false,
        subAreas: [
            // 書庫：縦に長い・各階の移動。4階と保管庫は火種が多い
            { name: "ロビー",                   isExpanded: false, time: 30,  spots: [{ name: "エリア合計", light: 5,   time: 0, isSelected: false }] },
            {
                name: "1階", isExpanded: false, time: 120,
                spots: [
                    { name: "中央の祭壇", light: 33, time: 0, isSelected: false },
                    { name: "両脇の書架", light: 30, time: 0, isSelected: false }
                ]
            },
            {
                name: "2階", isExpanded: false, time: 180,
                spots: [
                    { name: "フロア中央", light: 40, time: 0, isSelected: false },
                    { name: "蝶の間",     light: 33, time: 0, isSelected: false },
                    { name: "隠し部屋",   light: 33, time: 0, isSelected: false }
                ]
            },
            { name: "3階",                      isExpanded: false, time: 60,  spots: [{ name: "エリア合計", light: 12,  time: 0, isSelected: false }] },
            {
                name: "4階", isExpanded: false, time: 300,
                spots: [
                    { name: "浮島・下層",   light: 60, time: 0, isSelected: false },
                    { name: "浮島・中層",   light: 60, time: 0, isSelected: false },
                    { name: "浮島・上層",   light: 52, time: 0, isSelected: false },
                    { name: "隠者側の島",   light: 50, time: 0, isSelected: false }
                ]
            },
            {
                name: "書庫の神殿", isExpanded: false, time: 120,
                spots: [
                    { name: "最上階の祭壇", light: 34, time: 0, isSelected: false },
                    { name: "天窓テラス",   light: 30, time: 0, isSelected: false }
                ]
            },
            {
                name: "資料庫", isExpanded: false, time: 90,
                spots: [
                    { name: "資料室の机", light: 26, time: 0, isSelected: false },
                    { name: "奥の棚",     light: 24, time: 0, isSelected: false }
                ]
            },
            { name: "君憶う保存庫",             isExpanded: false, time: 90,  spots: [{ name: "エリア合計", light: 31,  time: 0, isSelected: false }] },
            {
                name: "壊れし燈の保管庫（修繕）", isExpanded: false, time: 360,
                spots: [
                    { name: "前半エリア", light: 140, time: 0, isSelected: false },
                    { name: "大広間",     light: 132, time: 0, isSelected: false },
                    { name: "最奥エリア", light: 130, time: 0, isSelected: false }
                ]
            },
            {
                name: "秘密のエリア", isExpanded: false, time: 120,
                spots: [
                    { name: "オフィスの部屋", light: 30, time: 0, isSelected: false },
                    { name: "廊下",           light: 27, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "コラボルーム",
        isExpanded: false,
        subAreas: [
            {
                name: "星月夜の砂漠", isExpanded: false, time: 240,
                spots: [
                    { name: "星の砂丘", light: 50, time: 0, isSelected: false },
                    { name: "月の泉",   light: 45, time: 0, isSelected: false },
                    { name: "大星屑",   light: 45, time: 0, isSelected: false }
                ]
            },
            {
                name: "三日月オアシス", isExpanded: false, time: 120,
                spots: [
                    { name: "泉のほとり", light: 23, time: 0, isSelected: false },
                    { name: "ヤシの木陰", light: 20, time: 0, isSelected: false }
                ]
            },
            {
                name: "最後の街（ふたつの灯火）", isExpanded: false, time: 300,
                spots: [
                    { name: "ミニゲーム①", light: 50, time: 0, isSelected: false },
                    { name: "ミニゲーム②", light: 50, time: 0, isSelected: false },
                    { name: "ミニゲーム③", light: 50, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "ソーシャルライト",
        isExpanded: false,
        subAreas: [
            // ソーシャル系：他プレイヤー依存のため固定時間にはしにくいが目安を設定
            { name: "先祖の食楽（パン）",             isExpanded: false, time: 600, spots: [{ name: "1日上限", light: 1000, time: 0, isSelected: false }] },
            { name: "ウミガメの軌跡（パンと上限共有）", isExpanded: false, time: 480, spots: [{ name: "1日上限", light: 1000, time: 0, isSelected: false }] },
            { name: "間欠泉（ウニ）",                isExpanded: false, time: 480, spots: [{ name: "1日上限", light: 1000, time: 0, isSelected: false }] },
            { name: "岩礁うなぎ軌跡",               isExpanded: false, time: 300, spots: [{ name: "上限", light: 500, time: 0, isSelected: false }] },
            {
                name: "焚き火",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "草原横穴",   light: 250, time: 0, isSelected: false },
                    { name: "雨林小川",   light: 250, time: 0, isSelected: false },
                    { name: "峡谷神殿",   light: 250, time: 0, isSelected: false },
                    { name: "捨て地墓所", light: 250, time: 0, isSelected: false }
                ]
            },
            { name: "街道雲のトンネル", isExpanded: false, time: 120, spots: [{ name: "上限", light: 250, time: 0, isSelected: false }] },
            {
                name: "ならい",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "信頼のならい（雨林小川）", light: 112, time: 0, isSelected: false },
                    { name: "助力のならい（草原洞窟）", light: 180, time: 0, isSelected: false },
                    { name: "協調のならい（草原蝶々）", light: 128, time: 0, isSelected: false },
                    { name: "団結のならい（雨林墓所）", light: 200, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "ランダムの火種",
        isExpanded: false,
        subAreas: [
            // ランダム系：所要時間は試行回数に依存するため平均的な目安
            {
                name: "岩礁貝殻",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "平均値", light: 207, time: 0, isSelected: false, group: "平均" },
                    { name: "最低値", light: 159, time: 0, isSelected: false, group: "最低" },
                    { name: "最高値", light: 245, time: 0, isSelected: false, group: "最高" }
                ]
            },
            {
                name: "隠者レース",
                isExpanded: false,
                time: 240,
                spots: [
                    { name: "最低値", light: 150, time: 0, isSelected: false, group: "最低" },
                    { name: "最高値", light: 300, time: 0, isSelected: false, group: "最高" }
                ]
            },
            {
                name: "夢見の劇場花束",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "最低値", light: 21, time: 0, isSelected: false, group: "最低" },
                    { name: "最高値", light: 44, time: 0, isSelected: false, group: "最高" }
                ]
            }
        ]
    }
];

window.SKY_DEFAULT_AREAS = SKY_DEFAULT_AREAS;
