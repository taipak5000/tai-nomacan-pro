// areas-data.js
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
            {
                name: "前庭",
                isExpanded: false,
                spots: [
                    { name: "月・水・金・日 エリア全体", light: 46, time: 0, isSelected: false, group: "曜日" },
                    { name: "火・木・土 エリア全体", light: 45, time: 0, isSelected: false, group: "曜日" }
                ]
            },
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
    {
        name: "峡谷",
        isExpanded: false,
        subAreas: [
            { name: "ロビー", isExpanded: false, spots: [{ name: "エリア合計", light: 55, time: 0, isSelected: false }] },
            { name: "凍った湖（アイスリンク）", isExpanded: false, spots: [{ name: "エリア合計", light: 64, time: 0, isSelected: false }] },
            { name: "陸通り（陸レ）", isExpanded: false, spots: [{ name: "エリア合計", light: 160, time: 0, isSelected: false }] },
            { name: "城塞都市", isExpanded: false, spots: [{ name: "エリア合計", light: 79, time: 0, isSelected: false }] },
            { name: "空通り（空レ）", isExpanded: false, spots: [{ name: "エリア合計", light: 170, time: 0, isSelected: false }] },
            { name: "円形劇場", isExpanded: false, spots: [{ name: "エリア合計", light: 22, time: 0, isSelected: false }] },
            { name: "峡谷の神殿", isExpanded: false, spots: [{ name: "エリア合計", light: 93, time: 0, isSelected: false }] },
            {
                name: "夢見の町",
                isExpanded: false,
                spots: [
                    { name: "ゴンドラ付近DC", light: 50, time: 0, isSelected: false },
                    { name: "温泉DC", light: 50, time: 0, isSelected: false }
                ]
            },
            { name: "隠者の峠", isExpanded: false, spots: [{ name: "エリア合計", light: 102, time: 0, isSelected: false }] },
            { name: "奏の音楽堂", isExpanded: false, spots: [{ name: "演奏8割成功", light: 100, time: 0, isSelected: false }] }
        ]
    },
    {
        name: "捨て地",
        isExpanded: false,
        subAreas: [
            {
                name: "外郭（倒壊した祠）",
                isExpanded: false,
                spots: [
                    { name: "月水金エリア合計", light: 64, time: 0, isSelected: false, group: "月水金曜日" },
                    { name: "火木土エリア合計", light: 65, time: 0, isSelected: false, group: "火木土曜日" },
                    { name: "日曜日エリア合計", light: 86, time: 0, isSelected: false, group: "日曜日" }
                ]
            },
            {
                name: "墓所の入り口",
                isExpanded: false,
                spots: [
                    { name: "月水金エリア合計", light: 42, time: 0, isSelected: false, group: "月水金曜日" },
                    { name: "火木土エリア合計", light: 30, time: 0, isSelected: false, group: "火木土曜日" },
                    { name: "日曜日エリア合計", light: 45, time: 0, isSelected: false, group: "日曜日" }
                ]
            },
            {
                name: "墓所",
                isExpanded: false,
                spots: [
                    { name: "月水金エリア合計", light: 88, time: 0, isSelected: false, group: "曜日" },
                    { name: "火木土エリア合計", light: 100, time: 0, isSelected: false, group: "曜日" },
                    { name: "日曜日エリア合計", light: 112, time: 0, isSelected: false, group: "曜日" }
                ]
            },
            {
                name: "戦場",
                isExpanded: false,
                spots: [
                    { name: "月水金エリア合計", light: 111, time: 0, isSelected: false, group: "月水金曜日" },
                    { name: "火木土エリア合計", light: 111, time: 0, isSelected: false, group: "火木土曜日" },
                    { name: "日曜日エリア合計", light: 139, time: 0, isSelected: false, group: "日曜日" }
                ]
            },
            {
                name: "蟹の沼地（座礁船）",
                isExpanded: false,
                spots: [
                    { name: "月水金エリア合計", light: 63, time: 0, isSelected: false, group: "月水金曜日" },
                    { name: "火木土エリア合計", light: 63, time: 0, isSelected: false, group: "火木土曜日" },
                    { name: "日曜日エリア合計", light: 101, time: 0, isSelected: false, group: "日曜日" }
                ]
            },
            { name: "捨て地神殿", isExpanded: false, spots: [{ name: "エリア合計", light: 40, time: 0, isSelected: false }] },
            { name: "忘れられた方舟", isExpanded: false, spots: [{ name: "エリア合計", light: 109, time: 0, isSelected: false }] },
            { name: "秘宝の岩礁", isExpanded: false, spots: [{ name: "エリア合計", light: 188, time: 0, isSelected: false }] }
        ]
    },
    {
        name: "書庫",
        isExpanded: false,
        subAreas: [
            { name: "ロビー", isExpanded: false, spots: [{ name: "エリア合計", light: 5, time: 0, isSelected: false }] },
            { name: "1階", isExpanded: false, spots: [{ name: "エリア合計", light: 63, time: 0, isSelected: false }] },
            { name: "2階", isExpanded: false, spots: [{ name: "エリア合計", light: 106, time: 0, isSelected: false }] },
            { name: "3階", isExpanded: false, spots: [{ name: "エリア合計", light: 12, time: 0, isSelected: false }] },
            { name: "4階", isExpanded: false, spots: [{ name: "エリア合計", light: 222, time: 0, isSelected: false }] },
            { name: "書庫の神殿", isExpanded: false, spots: [{ name: "エリア合計", light: 64, time: 0, isSelected: false }] },
            { name: "資料庫", isExpanded: false, spots: [{ name: "エリア合計", light: 50, time: 0, isSelected: false }] },
            { name: "君憶う保存庫", isExpanded: false, spots: [{ name: "エリア合計", light: 31, time: 0, isSelected: false }] },
            { name: "壊れし燈の保管庫（修繕）", isExpanded: false, spots: [{ name: "エリア合計", light: 402, time: 0, isSelected: false }] },
            { name: "秘密のエリア", isExpanded: false, spots: [{ name: "エリア合計", light: 57, time: 0, isSelected: false }] }
        ]
    },
    {
        name: "コラボルーム",
        isExpanded: false,
        subAreas: [
            { name: "星月夜の砂漠", isExpanded: false, spots: [{ name: "エリア合計", light: 140, time: 0, isSelected: false }] },
            { name: "三日月オアシス", isExpanded: false, spots: [{ name: "エリア合計", light: 43, time: 0, isSelected: false }] },
            { name: "最後の街（ふたつの灯火）", isExpanded: false, spots: [{ name: "ミニゲーム3種合計", light: 150, time: 0, isSelected: false }] }
        ]
    },
    {
        name: "ソーシャルライト",
        isExpanded: false,
        subAreas: [
            { name: "先祖の食楽（パン）", isExpanded: false, spots: [{ name: "1日上限", light: 1000, time: 0, isSelected: false }] },
            { name: "ウミガメの軌跡（パンと上限共有）", isExpanded: false, spots: [{ name: "1日上限", light: 1000, time: 0, isSelected: false }] },
            { name: "間欠泉（ウニ）", isExpanded: false, spots: [{ name: "1日上限", light: 1000, time: 0, isSelected: false }] },
            { name: "岩礁うなぎ軌跡", isExpanded: false, spots: [{ name: "上限", light: 500, time: 0, isSelected: false }] },
            {
                name: "焚き火",
                isExpanded: false,
                spots: [
                    { name: "草原横穴", light: 250, time: 0, isSelected: false },
                    { name: "雨林小川", light: 250, time: 0, isSelected: false },
                    { name: "峡谷神殿", light: 250, time: 0, isSelected: false },
                    { name: "捨て地墓所", light: 250, time: 0, isSelected: false }
                ]
            },
            { name: "街道雲のトンネル", isExpanded: false, spots: [{ name: "上限", light: 250, time: 0, isSelected: false }] },
            {
                name: "ならい",
                isExpanded: false,
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
            {
                name: "岩礁貝殻",
                isExpanded: false,
                spots: [
                    { name: "平均値", light: 207, time: 0, isSelected: false, group: "平均" },
                    { name: "最低値", light: 159, time: 0, isSelected: false, group: "最低" },
                    { name: "最高値", light: 245, time: 0, isSelected: false, group: "最高" }
                ]
            },
            {
                name: "隠者レース",
                isExpanded: false,
                spots: [
                    { name: "最低値", light: 150, time: 0, isSelected: false, group: "最低" },
                    { name: "最高値", light: 300, time: 0, isSelected: false, group: "最高" }
                ]
            },
            {
                name: "夢見の劇場花束",
                isExpanded: false,
                spots: [
                    { name: "最低値", light: 21, time: 0, isSelected: false, group: "最低" },
                    { name: "最高値", light: 44, time: 0, isSelected: false, group: "最高" }
                ]
            }
        ]
    }
];

window.SKY_DEFAULT_AREAS = SKY_DEFAULT_AREAS;
