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
    { name: "草原", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 742, time: 0, isSelected: false }] }] },
    { name: "雨林", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 893, time: 0, isSelected: false }] }] },
    { name: "峡谷", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 925, time: 0, isSelected: false }] }] },
    { name: "捨て地", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 682, time: 0, isSelected: false }] }] },
    { name: "書庫", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 796, time: 0, isSelected: false }] }] }
];
