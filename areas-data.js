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
                spots: [{ name: "エリア全体", light: 81, time: 0, isSelected: false }] // 必要に応じて以前の細かいスポットに戻せます
            },
            {
                name: "旧ホーム",
                isExpanded: false,
                spots: [{ name: "エリア全体", light: 23, time: 0, isSelected: false }]
            },
            {
                name: "アリスカフェ",
                isExpanded: false,
                spots: [{ name: "エリア全体", light: 337, time: 0, isSelected: false }]
            },
            {
                name: "カーニバルエリア",
                isExpanded: false,
                spots: [{ name: "エリア全体", light: 211, time: 0, isSelected: false }]
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
            { name: "墓場（神殿前）", isExpanded: false, spots: [{ name: "エリア全体（test込）", light: 175, time: 0, isSelected: false }] },
            { name: "高台広場（晴れ間）", isExpanded: false, spots: [{ name: "エリア全体", light: 42, time: 0, isSelected: false }] },
            { name: "大空洞", isExpanded: false, spots: [{ name: "エリア全体", light: 57, time: 0, isSelected: false }] },
            { name: "雨林の神殿", isExpanded: false, spots: [{ name: "エリア全体", light: 59, time: 0, isSelected: false }] },
            { name: "聖なる池", isExpanded: false, spots: [{ name: "エリア全体", light: 24, time: 0, isSelected: false }] },
            { name: "ツリーハウス", isExpanded: false, spots: [{ name: "エリア全体", light: 55, time: 0, isSelected: false }] },
            { name: "風の街道", isExpanded: false, spots: [{ name: "エリア全体（test込）", light: 198, time: 0, isSelected: false }] }
        ]
    },
    { name: "峡谷", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 925, time: 0, isSelected: false }] }] },
    { name: "捨て地", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 682, time: 0, isSelected: false }] }] },
    { name: "書庫", isExpanded: false, subAreas: [{ name: "メイン", isExpanded: false, spots: [{ name: "エリア全体", light: 796, time: 0, isSelected: false }] }] }
];
