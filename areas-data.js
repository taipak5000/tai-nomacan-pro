// areas-data.js
// Sky キャンドル計算機 - 各エリアの初期データ専用マスターファイル
const SKY_DEFAULT_AREAS = [
    {
        name: "ホーム",
        isExpanded: true,
        subAreas: [
            {
                name: "花鳥郷",
                isExpanded: false,
                spots: [
                    { name: "カフェ入り口", light: 3, time: 0, isSelected: false },
                    { name: "シェアメモ付近", light: 3, time: 0, isSelected: false },
                    { name: "シアターT字路", light: 3, time: 0, isSelected: false },
                    { name: "日々イベ案内人横", light: 4, time: 0, isSelected: false },
                    { name: "キャンドル職人", light: 3, time: 0, isSelected: false },
                    { name: "美容室入り口", light: 2, time: 0, isSelected: false },
                    { name: "魔法ショップT字路", light: 3, time: 0, isSelected: false },
                    { name: "希望の番人横", light: 3, time: 0, isSelected: false },
                    { name: "着替えの祠付近", light: 3, time: 0, isSelected: false },
                    { name: "シナモロール", light: 50, time: 0, isSelected: false }
                ]
            },
            {
                name: "旧ホーム",
                isExpanded: false,
                spots: [
                    { name: "池付近", light: 6, time: 0, isSelected: false },
                    { name: "祠前・持ち物", light: 4, time: 0, isSelected: false },
                    { name: "祠前・ケープ", light: 3, time: 0, isSelected: false },
                    { name: "祠前・髪型", light: 3, time: 0, isSelected: false },
                    { name: "祠前・マスク", light: 3, time: 0, isSelected: false },
                    { name: "祠前・服装", light: 4, time: 0, isSelected: false }
                ]
            },
            {
                name: "アリスカフェ",
                isExpanded: false,
                spots: [
                    { name: "暖炉付近・赤キャンドル1本", light: 5, time: 0, isSelected: false },
                    { name: "ソファ横・１本", light: 5, time: 0, isSelected: false },
                    { name: "メッセージボート付近・３本", light: 15, time: 0, isSelected: false },
                    { name: "鉢植え横・３本", light: 15, time: 0, isSelected: false },
                    { name: "カウンター内側・３本", light: 15, time: 0, isSelected: false },
                    { name: "カウンター外側・３本", light: 15, time: 0, isSelected: false },
                    { name: "浮いている火種１２か所合計", light: 120, time: 0, isSelected: false },
                    { name: "闇花合計", light: 42, time: 0, isSelected: false },
                    { name: "カニうさぎ1回", light: 10, time: 0, isSelected: false },
                    { name: "カウンターキノコ７か所合計", light: 35, time: 0, isSelected: false },
                    { name: "ミニゲーム（タスク1回）", light: 20, time: 0, isSelected: false }
                ]
            },
            {
                name: "カーニバルエリア",
                isExpanded: false,
                spots: [
                    { name: "大キャンドル3つ", light: 150, time: 0, isSelected: false },
                    { name: "小型ボートキャンドル１本", light: 1, time: 0, isSelected: false },
                    { name: "メリーゴーランド船", light: 30, time: 0, isSelected: false },
                    { name: "観覧車船", light: 30, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "孤島",
        isExpanded: false,
        subAreas: [
            {
                name: "孤島台地",
                isExpanded: false,
                spots: [
                    { name: "ボート光の子付近", light: 3, time: 0, isSelected: false },
                    { name: "ならいの大岩付近", light: 12, time: 0, isSelected: false },
                    { name: "おんぶ洞窟DC", light: 50, time: 0, isSelected: false },
                    { name: "キャンドル職人洞窟", light: 8, time: 0, isSelected: false },
                    { name: "光の子洞窟", light: 10, time: 0, isSelected: false },
                    { name: "石窟バリア前", light: 15, time: 0, isSelected: false }
                ]
            },
            {
                name: "孤島の神殿",
                isExpanded: false,
                spots: [
                    { name: "神殿横洞窟火種合計", light: 20, time: 0, isSelected: false },
                    { name: "神殿内キャンドル合計", light: 17, time: 0, isSelected: false }
                ]
            },
            {
                name: "孤島の見晴らし台",
                isExpanded: false,
                spots: [
                    { name: "二人扉内", light: 8, time: 0, isSelected: false },
                    { name: "蝶入り瓶まわり", light: 21, time: 0, isSelected: false },
                    { name: "光の子まわり", light: 10, time: 0, isSelected: false },
                    { name: "頂上DC", light: 50, time: 0, isSelected: false }
                ]
            },
            {
                name: "預言者の石窟",
                isExpanded: false,
                spots: [
                    { name: "石窟内大キャンドル", light: 50, time: 0, isSelected: false },
                    { name: "水の試練・道中DC", light: 50, time: 0, isSelected: false },
                    { name: "水・ゴール山裏DC", light: 50, time: 0, isSelected: false },
                    { name: "水・離れ小島", light: 6, time: 0, isSelected: false },
                    { name: "地の試練・チェックポイント１後", light: 2, time: 0, isSelected: false },
                    { name: "地・CP2前", light: 2, time: 0, isSelected: false },
                    { name: "地・CP2直前", light: 2, time: 0, isSelected: false },
                    { name: "地・CP2後", light: 4, time: 0, isSelected: false },
                    { name: "地・CP4前", light: 2, time: 0, isSelected: false },
                    { name: "地・祭壇直前", light: 3, time: 0, isSelected: false },
                    { name: "地・ゴールDC２", light: 100, time: 0, isSelected: false },
                    { name: "風の試練DC4", light: 200, time: 0, isSelected: false },
                    { name: "火の試練DC4", light: 200, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "草原",
        isExpanded: false,
        subAreas: [
            {
                name: "ロビー・蝶々の住処",
                isExpanded: false,
                spots: [
                    { name: "ロビー・三か所合計", light: 10, time: 0, isSelected: false },
                    { name: "蝶々・道の真ん中", light: 5, time: 0, isSelected: false },
                    { name: "蝶・右洞窟バリア内", light: 20, time: 0, isSelected: false },
                    { name: "蝶・蝶々精霊横", light: 5, time: 0, isSelected: false },
                    { name: "蝶・草原の村行き門前", light: 5, time: 0, isSelected: false },
                    { name: "蝶・鳥の巣バリア前", light: 5, time: 0, isSelected: false },
                    { name: "蝶・洞窟行きバリア前", light: 5, time: 0, isSelected: false }
                ]
            },
            {
                name: "草原の村",
                isExpanded: false,
                spots: [
                    { name: "左の島・拍手精霊二人扉前", light: 5, time: 0, isSelected: false },
                    { name: "左・鐘楼に続く小道", light: 5, time: 0, isSelected: false },
                    { name: "左・鐘楼の闇花合計", light: 20, time: 0, isSelected: false },
                    { name: "真ん中の島・埋まった船", light: 6, time: 0, isSelected: false },
                    { name: "真・鐘楼の闇花合計", light: 23, time: 0, isSelected: false },
                    { name: "真・桟橋付近", light: 5, time: 0, isSelected: false },
                    { name: "真・二人扉前", light: 5, time: 0, isSelected: false },
                    { name: "真・二人扉内", light: 10, time: 0, isSelected: false },
                    { name: "右の島・鐘楼近く段差", light: 5, time: 0, isSelected: false },
                    { name: "右・鐘楼の闇花合計", light: 15, time: 0, isSelected: false },
                    { name: "右・洞窟内笑い精霊付近", light: 5, time: 0, isSelected: false }
                ]
            },
            {
                name: "草原高地（オレオ）",
                isExpanded: false,
                spots: [
                    { name: "入口付近四か所合計", light: 12, time: 0, isSelected: false },
                    { name: "エレベーター起動後上合計", light: 80, time: 0, isSelected: false },
                    { name: "オレオ召喚の場", light: 7, time: 0, isSelected: false }
                ]
            },
            {
                name: "草原の神殿",
                isExpanded: false,
                spots: [
                    { name: "神殿前・橋の下", light: 5, time: 0, isSelected: false },
                    { name: "前・入り口前", light: 5, time: 0, isSelected: false },
                    { name: "神殿内・三か所合計", light: 15, time: 0, isSelected: false },
                    { name: "内・笑顔のキャンドル", light: 9, time: 0, isSelected: false },
                    { name: "神殿上・left側", light: 28, time: 0, isSelected: false },
                    { name: "上・右側L字", light: 23, time: 0, isSelected: false }
                ]
            },
            {
                name: "草原の洞窟",
                isExpanded: false,
                spots: [
                    { name: "入口瓶", light: 5, time: 0, isSelected: false },
                    { name: "階段上右側", light: 5, time: 0, isSelected: false },
                    { name: "焚火道中", light: 5, time: 0, isSelected: false },
                    { name: "埋まったボート", light: 5, time: 0, isSelected: false },
                    { name: "荷積み人近く", light: 5, time: 0, isSelected: false },
                    { name: "階段の下のボート", light: 5, time: 0, isSelected: false },
                    { name: "瓶の部屋入口横", light: 5, time: 0, isSelected: false },
                    { name: "瓶の部屋内", light: 5, time: 0, isSelected: false },
                    { name: "草原の村にいく出口付近", light: 5, time: 0, isSelected: false }
                ]
            },
            {
                name: "鳥の巣",
                isExpanded: false,
                spots: [
                    { name: "桟橋", light: 5, time: 0, isSelected: false },
                    { name: "桟橋下", light: 5, time: 0, isSelected: false },
                    { name: "中央浮島", light: 5, time: 0, isSelected: false },
                    { name: "大きな浮島合計", light: 20, time: 0, isSelected: false },
                    { name: "小さな浮島合計", light: 15, time: 0, isSelected: false }
                ]
            },
            {
                name: "楽園",
                isExpanded: false,
                spots: [
                    { name: "浮島DC", light: 50, time: 0, isSelected: false },
                    { name: "浮島闇花", light: 6, time: 0, isSelected: false },
                    { name: "本島洞窟入り口", light: 6, time: 0, isSelected: false },
                    { name: "カニ洞窟大闇花", light: 48, time: 0, isSelected: false },
                    { name: "カ・大闇のよこ闇花", light: 6, time: 0, isSelected: false },
                    { name: "カ・螺旋途中", light: 6, time: 0, isSelected: false },
                    { name: "カ・螺旋頂上", light: 6, time: 0, isSelected: false },
                    { name: "滝底梯子の下", light: 6, time: 0, isSelected: false },
                    { name: "滝DC", light: 50, time: 0, isSelected: false },
                    { name: "滝DC近く闇花", light: 6, time: 0, isSelected: false },
                    { name: "クラゲ洞窟トンネル入り口", light: 12, time: 0, isSelected: false },
                    { name: "クラゲ洞窟内", light: 6, time: 0, isSelected: false },
                    { name: "鐘DC", light: 50, time: 0, isSelected: false },
                    { name: "間欠泉よこ合計", light: 41, time: 0, isSelected: false }
                ]
            }
        ]
    },
    { name: "雨林", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 893, time: 0, isSelected: false }] }] },
    { name: "峡谷", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 925, time: 0, isSelected: false }] }] },
    { name: "捨て地", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 682, time: 0, isSelected: false }] }] },
    { name: "書庫", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 796, time: 0, isSelected: false }] }] }
];

// もし他のファイル（index.html等）で「SKY_DEFAULT_AREASが見つからない」というエラーが出る場合は、
// 以下のコードのコメントアウト（//）を解除してみてください。
// window.SKY_DEFAULT_AREAS = SKY_DEFAULT_AREAS;
