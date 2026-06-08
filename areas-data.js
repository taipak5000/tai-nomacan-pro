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
            { name: "孤島台地", isExpanded: false, spots: [{ name: "エリア全体", light: 98, time: 0, isSelected: false }] },
            { name: "孤島の神殿", isExpanded: false, spots: [{ name: "エリア全体", light: 37, time: 0, isSelected: false }] },
            { name: "孤島の見晴らし台", isExpanded: false, spots: [{ name: "エリア全体", light: 89, time: 0, isSelected: false }] },
            { name: "預言者の石窟", isExpanded: false, spots: [{ name: "エリア全体", light: 673, time: 0, isSelected: false }] }
        ]
    },
    {
        name: "草原",
        isExpanded: false,
        subAreas: [
            { name: "ロビー・蝶々の住処", isExpanded: false, spots: [{ name: "エリア全体", light: 55, time: 0, isSelected: false }] },
            { name: "草原の村", isExpanded: false, spots: [{ name: "エリア全体", light: 104, time: 0, isSelected: false }] },
            { name: "草原高地（オレオ）", isExpanded: false, spots: [{ name: "エリア全体", light: 99, time: 0, isSelected: false }] },
            { name: "草原の神殿", isExpanded: false, spots: [{ name: "エリア全体", light: 85, time: 0, isSelected: false }] },
            { name: "草原の洞窟", isExpanded: false, spots: [{ name: "エリア全体", light: 45, time: 0, isSelected: false }] },
            { name: "鳥の巣", isExpanded: false, spots: [{ name: "エリア全体", light: 50, time: 0, isSelected: false }] },
            { name: "楽園", isExpanded: false, spots: [{ name: "エリア全体", light: 349, time: 0, isSelected: false }] }
        ]
    },
    {
        name: "雨林",
        isExpanded: false,
        subAreas: [
            { name: "前庭（月・水・金・日）", isExpanded: false, spots: [{ name: "エリア全体", light: 46, time: 0, isSelected: false }] },
            { name: "前庭（火・木・土）", isExpanded: false, spots: [{ name: "エリア全体", light: 45, time: 0, isSelected: false }] },
            { name: "小川", isExpanded: false, spots: [{ name: "エリア全体", light: 227, time: 0, isSelected: false }] },
            { name: "墓場（神殿前）", isExpanded: false, spots: [{ name: "エリア全体", light: 175, time: 0, isSelected: false }] },
            { name: "高台広場（晴れ間）", isExpanded: false, spots: [{ name: "エリア全体", light: 42, time: 0, isSelected: false }] },
            { name: "大空洞", isExpanded: false, spots: [{ name: "エリア全体", light: 57, time: 0, isSelected: false }] },
            { name: "雨林の神殿", isExpanded: false, spots: [{ name: "エリア全体", light: 59, time: 0, isSelected: false }] },
            { name: "聖なる池", isExpanded: false, spots: [{ name: "エリア全体", light: 24, time: 0, isSelected: false }] },
            { name: "ツリーハウス", isExpanded: false, spots: [{ name: "エリア全体", light: 55, time: 0, isSelected: false }] },
            { name: "風の街道", isExpanded: false, spots: [{ name: "エリア全体", light: 198, time: 0, isSelected: false }] }
        ]
    },
    { name: "峡谷", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 925, time: 0, isSelected: false }] }] },
    { name: "捨て地", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 682, time: 0, isSelected: false }] }] },
    { name: "書庫", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 796, time: 0, isSelected: false }] }] }
];

window.SKY_DEFAULT_AREAS = SKY_DEFAULT_AREAS;
