// areas-data.js
// time の単位: 秒（中級者・スマートフォン基準）
// 習熟度係数が乗算されて各プレイヤーの初期値になり、
// その後はマイルートの実測タイマー結果で少しずつ自動補正されます
//
// 🔥 火種量は Sky公式Wiki (Fandom) の「Pieces of Light」ページに掲載されている
// 正確な調査値をもとに、場所のまとまりごとに集計した初期データです。
// （参考: https://sky-children-of-the-light.fandom.com/wiki/Pieces_of_Light ）
// 曜日で変わる闇植物（雨林・捨て地）は曜日別スポットとして収録しています。
// ※実測と異なる場合はリスト表示から個別に修正できます。

// 📦 データ構成バージョン。スポット構成を刷新した際に上げると、
// 保存済みデータのスポット一覧が新構成へ自動移行される（index.html側で処理）。
const SKY_AREAS_DATA_VERSION = 3;

const SKY_DEFAULT_AREAS = [
    {
        name: "ホーム",
        isExpanded: true,
        subAreas: [
            {
                // 花鳥郷: Wiki「Aviary Village」。ロッキー・シナモロールは日替わり
                name: "花鳥郷",
                isExpanded: false,
                time: 60,
                spots: [
                    { name: "希望の番人の街灯",     light: 3,  time: 0, isSelected: false },
                    { name: "イベントストア階段",   light: 2,  time: 0, isSelected: false },
                    { name: "キャンドル職人横",     light: 3,  time: 0, isSelected: false },
                    { name: "巣づくり工房の扉横",   light: 3,  time: 0, isSelected: false },
                    { name: "美容室の扉横",         light: 3,  time: 0, isSelected: false },
                    { name: "音楽堂前の街灯",       light: 3,  time: 0, isSelected: false },
                    { name: "ケープ店の扉横",       light: 2,  time: 0, isSelected: false },
                    { name: "ホームキャンドル横",   light: 4,  time: 0, isSelected: false },
                    { name: "イベント掲示板横",     light: 4,  time: 0, isSelected: false },
                    { name: "ロッキー（日替り）",   light: 10, time: 0, isSelected: false },
                    { name: "シナモロール",         light: 50, time: 0, isSelected: false }
                ]
            },
            {
                // 旧ホーム: Wiki「Home (23)」
                name: "旧ホーム",
                isExpanded: false,
                time: 30,
                spots: [
                    { name: "池の岩の上",   light: 6, time: 0, isSelected: false },
                    { name: "楽器の祠前",   light: 4, time: 0, isSelected: false },
                    { name: "ケープの祠前", light: 3, time: 0, isSelected: false },
                    { name: "髪型の祠前",   light: 3, time: 0, isSelected: false },
                    { name: "マスクの祠前", light: 3, time: 0, isSelected: false },
                    { name: "服の祠前",     light: 4, time: 0, isSelected: false }
                ]
            },
            {
                // アリスカフェ: Wiki「Wonderland Cafe (312)」
                name: "アリスカフェ",
                isExpanded: false,
                time: 296,
                spots: [
                    { name: "暖炉入り口横",       light: 5,   time: 0, isSelected: false },
                    { name: "ソファ横",           light: 5,   time: 0, isSelected: false },
                    { name: "紙のボート横",       light: 15,  time: 0, isSelected: false },
                    { name: "鉢植え横",           light: 15,  time: 0, isSelected: false },
                    { name: "カウンター前の角",   light: 15,  time: 0, isSelected: false },
                    { name: "カウンター内側",     light: 15,  time: 0, isSelected: false },
                    { name: "光の雲１０か所",     light: 120, time: 0, isSelected: false },
                    { name: "ソファ裏の闇植物",   light: 42,  time: 0, isSelected: false },
                    { name: "ティーパーティ任務①", light: 20, time: 0, isSelected: false },
                    { name: "ティーパーティ任務②", light: 20, time: 0, isSelected: false },
                    { name: "カニうさぎ捕獲",     light: 40,  time: 0, isSelected: false }
                ]
            },
            {
                // カーニバル: Wiki「Wandering Carnival (211)」
                name: "カーニバルエリア",
                isExpanded: false,
                time: 110,
                spots: [
                    { name: "宝キャンドル（船首）", light: 50, time: 0, isSelected: false },
                    { name: "宝キャンドル（左舷）", light: 50, time: 0, isSelected: false },
                    { name: "宝キャンドル（右舷）", light: 50, time: 0, isSelected: false },
                    { name: "小型ボートの１本",     light: 1,  time: 0, isSelected: false },
                    { name: "メリーゴーランド船",   light: 30, time: 0, isSelected: false },
                    { name: "観覧車船",             light: 30, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "孤島",
        isExpanded: false,
        subAreas: [
            {
                // Wiki「Dawn Circle (100)」
                name: "孤島台地",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "蝶の岩場（埋もれた船）", light: 3,  time: 0, isSelected: false },
                    { name: "通路岩のスロープ下",     light: 9,  time: 0, isSelected: false },
                    { name: "左砂丘洞窟の宝",         light: 50, time: 0, isSelected: false },
                    { name: "精霊の記憶の闇",         light: 5,  time: 0, isSelected: false },
                    { name: "職人の砂丘洞窟",         light: 8,  time: 0, isSelected: false },
                    { name: "右砂丘洞窟",             light: 10, time: 0, isSelected: false },
                    { name: "石窟入口の階段",         light: 15, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Temple of the Isle (37)」
                name: "孤島の神殿",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "航海者の洞窟",     light: 12, time: 0, isSelected: false },
                    { name: "洞窟の闇植物",     light: 8,  time: 0, isSelected: false },
                    { name: "神殿内部",         light: 17, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Dawn Overlook (89)」
                name: "孤島の見晴らし台",
                isExpanded: false,
                time: 150,
                spots: [
                    { name: "パズル部屋の階段", light: 8,  time: 0, isSelected: false },
                    { name: "蝶の瓶の周り",     light: 21, time: 0, isSelected: false },
                    { name: "上の通路",         light: 10, time: 0, isSelected: false },
                    { name: "船の宝キャンドル", light: 50, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Cave of Prophecies (58)」+ 四つの試練 (106/115/200/200) = 679
                name: "預言者の石窟",
                isExpanded: false,
                time: 300,
                spots: [
                    { name: "大広間の宝",   light: 50,  time: 0, isSelected: false },
                    { name: "雲の間の岩",   light: 8,   time: 0, isSelected: false },
                    { name: "水の試練",     light: 106, time: 0, isSelected: false },
                    { name: "地の試練",     light: 115, time: 0, isSelected: false },
                    { name: "風の試練",     light: 200, time: 0, isSelected: false },
                    { name: "火の試練",     light: 200, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "草原",
        isExpanded: false,
        subAreas: [
            {
                // Wiki「Prairie Rest (10)」+「Butterfly Fields (45)」
                name: "ロビー・蝶々の住処",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "噴水まわり",         light: 10, time: 0, isSelected: false },
                    { name: "道中の岩",           light: 5,  time: 0, isSelected: false },
                    { name: "右の小洞窟",         light: 20, time: 0, isSelected: false },
                    { name: "蝶使いの精霊横",     light: 5,  time: 0, isSelected: false },
                    { name: "村へのゲート前",     light: 5,  time: 0, isSelected: false },
                    { name: "鳥の巣ゲート前",     light: 5,  time: 0, isSelected: false },
                    { name: "洞窟ゲート前",       light: 5,  time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Prairie Village (109)」
                name: "草原の村",
                isExpanded: false,
                time: 150,
                spots: [
                    { name: "左島（鐘楼と闇）",   light: 30, time: 0, isSelected: false },
                    { name: "中島（鐘楼と部屋）", light: 54, time: 0, isSelected: false },
                    { name: "右島（洞窟側）",     light: 25, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Prairie Heights (99)」
                name: "草原高地（オレオ）",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "入口の階段",       light: 12, time: 0, isSelected: false },
                    { name: "8人部屋の奥",      light: 80, time: 0, isSelected: false },
                    { name: "右の丘の上",       light: 7,  time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Temple of the Prairie (85)」
                name: "草原の神殿",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "橋の下の池",   light: 5,  time: 0, isSelected: false },
                    { name: "入口右の棚",   light: 5,  time: 0, isSelected: false },
                    { name: "神殿内部",     light: 15, time: 0, isSelected: false },
                    { name: "祠の裏",       light: 9,  time: 0, isSelected: false },
                    { name: "神殿の屋根",   light: 51, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Prairie Caves (45)」
                name: "草原の洞窟",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "入口周辺の壺", light: 15, time: 0, isSelected: false },
                    { name: "中央部・船",   light: 15, time: 0, isSelected: false },
                    { name: "奥・出口側",   light: 15, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Bird Nest (50)」
                name: "鳥の巣",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "桟橋周辺",     light: 15, time: 0, isSelected: false },
                    { name: "大きな浮島",   light: 20, time: 0, isSelected: false },
                    { name: "小さな浮島",   light: 15, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Sanctuary Islands (299)」
                name: "楽園",
                isExpanded: false,
                time: 240,
                spots: [
                    { name: "第一浮島（宝と洞窟）", light: 56, time: 0, isSelected: false },
                    { name: "蟹の洞窟（闇の木）",   light: 72, time: 0, isSelected: false },
                    { name: "滝まわり（宝含む）",   light: 74, time: 0, isSelected: false },
                    { name: "クラゲの洞窟",         light: 6,  time: 0, isSelected: false },
                    { name: "鐘のモニュメント裏",   light: 50, time: 0, isSelected: false },
                    { name: "ビーチ（間欠泉横）",   light: 41, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "雨林",
        isExpanded: false,
        subAreas: [
            {
                // Wiki「Forest Courtyard (46/45)」曜日で闇植物が入れ替わる
                name: "前庭",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "月・水・金・日 エリア全体", light: 46, time: 0, isSelected: false, group: "曜日" },
                    { name: "火・木・土 エリア全体",     light: 45, time: 0, isSelected: false, group: "曜日" }
                ]
            },
            {
                // Wiki「Forest Brook (227)」
                name: "小川",
                isExpanded: false,
                time: 240,
                spots: [
                    { name: "入口・東屋周辺",   light: 31, time: 0, isSelected: false },
                    { name: "家の跡・洞窟前",   light: 25, time: 0, isSelected: false },
                    { name: "川沿い・丘の木",   light: 24, time: 0, isSelected: false },
                    { name: "土管の中の宝",     light: 50, time: 0, isSelected: false },
                    { name: "蟹洞窟・橋の下",   light: 20, time: 0, isSelected: false },
                    { name: "木の上の家",       light: 29, time: 0, isSelected: false },
                    { name: "ポーターの洞窟",   light: 24, time: 0, isSelected: false },
                    { name: "出口周辺",         light: 24, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Boneyard (175)」※場所ごとの値はまとまりの目安（日合計は常に175）
                name: "墓場（神殿前）",
                isExpanded: false,
                time: 210,
                spots: [
                    { name: "入口・左の道",     light: 24, time: 0, isSelected: false },
                    { name: "骨と倒木エリア",   light: 43, time: 0, isSelected: false },
                    { name: "橋・マンタ周辺",   light: 36, time: 0, isSelected: false },
                    { name: "光掘りの洞窟",     light: 28, time: 0, isSelected: false },
                    { name: "洞窟の上（闇の木）", light: 44, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Elevated Clearing (42)」
                name: "高台広場（晴れ間）",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "入口・東屋側",   light: 21, time: 0, isSelected: false },
                    { name: "池と丘",         light: 14, time: 0, isSelected: false },
                    { name: "墓場への出口側", light: 7,  time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Forest Cavern (57)」
                name: "大空洞",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "蝶の瓶の棚",     light: 19, time: 0, isSelected: false },
                    { name: "扉のスイッチ上", light: 14, time: 0, isSelected: false },
                    { name: "右の洞",         light: 8,  time: 0, isSelected: false },
                    { name: "左の洞",         light: 16, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Temple of the Forest (59)」
                name: "雨林の神殿",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "動く足場まわり",   light: 17, time: 0, isSelected: false },
                    { name: "建物の根本",       light: 8,  time: 0, isSelected: false },
                    { name: "大きな闇の木",     light: 34, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Sacred Pond (24)」曜日で場所が入れ替わるが日合計は常に24
                name: "聖なる池",
                isExpanded: false,
                time: 60,
                spots: [
                    { name: "木の根元（２か所）", light: 12, time: 0, isSelected: false },
                    { name: "切り株・池の右",     light: 12, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「The Treehouse (55)」
                name: "ツリーハウス",
                isExpanded: false,
                time: 150,
                spots: [
                    { name: "入口の休憩所",   light: 10, time: 0, isSelected: false },
                    { name: "テント・坑道",   light: 10, time: 0, isSelected: false },
                    { name: "家の周り",       light: 15, time: 0, isSelected: false },
                    { name: "裏の池",         light: 15, time: 0, isSelected: false },
                    { name: "てっぺんの棚",   light: 5,  time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「The Wind Paths - Islands (98)」+「Cloud Tunnel (100)」
                name: "風の街道",
                isExpanded: false,
                time: 300,
                spots: [
                    { name: "主島の階段・桟橋",   light: 20, time: 0, isSelected: false },
                    { name: "主島のトンネル群",   light: 38, time: 0, isSelected: false },
                    { name: "右の浮島",           light: 20, time: 0, isSelected: false },
                    { name: "左の浮島",           light: 10, time: 0, isSelected: false },
                    { name: "奥の浮島",           light: 10, time: 0, isSelected: false },
                    { name: "各入口前のキャンドル", light: 35, time: 0, isSelected: false },
                    { name: "雲柱の浮島",         light: 15, time: 0, isSelected: false },
                    { name: "浮島の宝キャンドル", light: 50, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "峡谷",
        isExpanded: false,
        subAreas: [
            {
                // Wiki「Valley Rest (55)」
                name: "ロビー",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "左の道",           light: 5,  time: 0, isSelected: false },
                    { name: "右の道",           light: 10, time: 0, isSelected: false },
                    { name: "中央の道・スロープ", light: 15, time: 0, isSelected: false },
                    { name: "トンネル",         light: 10, time: 0, isSelected: false },
                    { name: "湖への氷道",       light: 15, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Frozen Lake (64)」
                name: "凍った湖（アイスリンク）",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "橋の下",           light: 8,  time: 0, isSelected: false },
                    { name: "陸レ入口前",       light: 8,  time: 0, isSelected: false },
                    { name: "観光客の精霊の下", light: 8,  time: 0, isSelected: false },
                    { name: "壊れたアーチの上", light: 10, time: 0, isSelected: false },
                    { name: "長いトンネルの先", light: 15, time: 0, isSelected: false },
                    { name: "湖の中央の下",     light: 15, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Lower Valley Track (160)」1日1回・全員共有
                name: "陸通り（陸レ）",
                isExpanded: false,
                time: 360,
                spots: [
                    { name: "レース完走報酬",       light: 135, time: 0, isSelected: false },
                    { name: "かけら全回収ボーナス", light: 25,  time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「The Citadel (79)」
                name: "城塞都市",
                isExpanded: false,
                time: 150,
                spots: [
                    { name: "入口右の建物群", light: 17, time: 0, isSelected: false },
                    { name: "入口左の建物群", light: 12, time: 0, isSelected: false },
                    { name: "重なるアーチ",   light: 15, time: 0, isSelected: false },
                    { name: "丸い建物",       light: 11, time: 0, isSelected: false },
                    { name: "空レ入口の柱",   light: 24, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Upper Valley Track (170)」1日1回・全員共有
                name: "空通り（空レ）",
                isExpanded: false,
                time: 300,
                spots: [
                    { name: "部屋のキャンドル",     light: 10,  time: 0, isSelected: false },
                    { name: "レース完走報酬",       light: 135, time: 0, isSelected: false },
                    { name: "かけら全回収ボーナス", light: 25,  time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「The Coliseum (22)」
                name: "円形劇場",
                isExpanded: false,
                time: 60,
                spots: [
                    { name: "階段の両側",       light: 10, time: 0, isSelected: false },
                    { name: "赤テント側の客席", light: 6,  time: 0, isSelected: false },
                    { name: "青テント側の客席", light: 6,  time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Temple of the Valley (93)」
                name: "峡谷の神殿",
                isExpanded: false,
                time: 150,
                spots: [
                    { name: "長老像の周り",   light: 75, time: 0, isSelected: false },
                    { name: "迷路の闇植物",   light: 18, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Village of Dreams (100)」
                name: "夢見の町",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "滑走路下の宝", light: 50, time: 0, isSelected: false },
                    { name: "温泉の宝",     light: 50, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Hermit Valley (102)」
                name: "隠者の峠",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "隠者の家の宝",   light: 50, time: 0, isSelected: false },
                    { name: "レース序盤",     light: 11, time: 0, isSelected: false },
                    { name: "谷の中腹",       light: 6,  time: 0, isSelected: false },
                    { name: "上部洞窟の道",   light: 10, time: 0, isSelected: false },
                    { name: "氷橋の先",       light: 8,  time: 0, isSelected: false },
                    { name: "終盤の輪",       light: 17, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Harmony Hall (100)」デイリー楽譜チャレンジ
                name: "奏の音楽堂",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "演奏 約50%達成", light: 50, time: 0, isSelected: false },
                    { name: "演奏 約80%達成", light: 50, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "捨て地",
        isExpanded: false,
        subAreas: [
            // 捨て地は月水金(D1)・火木土(D2)・日曜で闇植物が変わる（Wiki準拠の日合計）
            {
                name: "外郭（倒壊した祠）",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "月水金エリア合計", light: 64,  time: 0, isSelected: false, group: "曜日" },
                    { name: "火木土エリア合計", light: 65,  time: 0, isSelected: false, group: "曜日" },
                    { name: "日曜日エリア合計", light: 86,  time: 0, isSelected: false, group: "曜日" }
                ]
            },
            {
                name: "墓所の入り口",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "月水金エリア合計", light: 42, time: 0, isSelected: false, group: "曜日" },
                    { name: "火木土エリア合計", light: 30, time: 0, isSelected: false, group: "曜日" },
                    { name: "日曜日エリア合計", light: 45, time: 0, isSelected: false, group: "曜日" }
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
                    { name: "月水金エリア合計", light: 111, time: 0, isSelected: false, group: "曜日" },
                    { name: "火木土エリア合計", light: 111, time: 0, isSelected: false, group: "曜日" },
                    { name: "日曜日エリア合計", light: 139, time: 0, isSelected: false, group: "曜日" }
                ]
            },
            {
                name: "蟹の沼地（座礁船）",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "月水金エリア合計", light: 63,  time: 0, isSelected: false, group: "曜日" },
                    { name: "火木土エリア合計", light: 63,  time: 0, isSelected: false, group: "曜日" },
                    { name: "日曜日エリア合計", light: 101, time: 0, isSelected: false, group: "曜日" }
                ]
            },
            {
                // Wiki「Temple of the Wasteland (40)」
                name: "捨て地神殿",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "長老像の左",   light: 11, time: 0, isSelected: false },
                    { name: "長老像の後ろ", light: 18, time: 0, isSelected: false },
                    { name: "長老像の右",   light: 11, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「The Forgotten Ark (109)」
                name: "忘れられた方舟",
                isExpanded: false,
                time: 240,
                spots: [
                    { name: "方舟の上",       light: 25, time: 0, isSelected: false },
                    { name: "壊れた船",       light: 23, time: 0, isSelected: false },
                    { name: "沼の洞窟",       light: 29, time: 0, isSelected: false },
                    { name: "迷路の洞窟",     light: 32, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Treasure Reef (188)」固定配置分（貝は「ランダムの火種」参照）
                name: "秘宝の岩礁",
                isExpanded: false,
                time: 300,
                spots: [
                    { name: "入口・船・東屋",     light: 23, time: 0, isSelected: false },
                    { name: "水中トンネルと穴",   light: 50, time: 0, isSelected: false },
                    { name: "曲がった壁・深い溝", light: 25, time: 0, isSelected: false },
                    { name: "竜の塔（巨大貝含む）", light: 50, time: 0, isSelected: false },
                    { name: "格子の隠し部屋",     light: 10, time: 0, isSelected: false },
                    { name: "右島の巨大貝５つ",   light: 30, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "書庫",
        isExpanded: false,
        subAreas: [
            // Wiki「Vault of Knowledge (1288)」
            { name: "ロビー", isExpanded: false, time: 30, spots: [{ name: "階段上の柱", light: 5, time: 0, isSelected: false }] },
            {
                name: "1階",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "エレベーター裏",   light: 11, time: 0, isSelected: false },
                    { name: "扉の奥の宝",       light: 49, time: 0, isSelected: false },
                    { name: "祈る侍者の横",     light: 3,  time: 0, isSelected: false }
                ]
            },
            {
                name: "2階",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "足場の間の宝",     light: 48, time: 0, isSelected: false },
                    { name: "階段のキャンドル", light: 10, time: 0, isSelected: false },
                    { name: "扉の奥・机の下",   light: 48, time: 0, isSelected: false }
                ]
            },
            {
                name: "3階",
                isExpanded: false,
                time: 60,
                spots: [
                    { name: "祠の足場",     light: 3, time: 0, isSelected: false },
                    { name: "東屋の屋根",   light: 9, time: 0, isSelected: false }
                ]
            },
            {
                name: "4階",
                isExpanded: false,
                time: 300,
                spots: [
                    { name: "丸い建物の下",   light: 12, time: 0, isSelected: false },
                    { name: "記憶の島の輪",   light: 8,  time: 0, isSelected: false },
                    { name: "滝の下の宝",     light: 50, time: 0, isSelected: false },
                    { name: "星座の上の宝",   light: 47, time: 0, isSelected: false },
                    { name: "語り部の島と岩", light: 52, time: 0, isSelected: false },
                    { name: "最上部の柱の島", light: 53, time: 0, isSelected: false }
                ]
            },
            {
                name: "書庫の神殿",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "床の紋章の両側", light: 6,  time: 0, isSelected: false },
                    { name: "階段まわり",     light: 12, time: 0, isSelected: false },
                    { name: "長老像の裏の宝", light: 46, time: 0, isSelected: false }
                ]
            },
            {
                name: "資料庫",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "入口の足場",       light: 5,  time: 0, isSelected: false },
                    { name: "迷路・上の階",     light: 10, time: 0, isSelected: false },
                    { name: "迷路・中の階",     light: 15, time: 0, isSelected: false },
                    { name: "迷路・下の階",     light: 20, time: 0, isSelected: false }
                ]
            },
            {
                name: "君憶う保存庫",
                isExpanded: false,
                time: 90,
                spots: [
                    { name: "棚の上",         light: 10, time: 0, isSelected: false },
                    { name: "梯子の棚",       light: 6,  time: 0, isSelected: false },
                    { name: "ランタンの裏",   light: 5,  time: 0, isSelected: false },
                    { name: "天井の上",       light: 10, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Fractured Lantern Storage (402)」日替わりランタン修繕
                name: "壊れし燈の保管庫（修繕）",
                isExpanded: false,
                time: 360,
                spots: [
                    { name: "宝キャンドル",     light: 50,  time: 0, isSelected: false },
                    { name: "赤キャンドル各所", light: 158, time: 0, isSelected: false },
                    { name: "結晶のかけら",     light: 144, time: 0, isSelected: false },
                    { name: "修繕完了ボーナス", light: 50,  time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Secret Area and The Office (57)」
                name: "秘密のエリア",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "バリア前の大キャンドル", light: 8,  time: 0, isSelected: false },
                    { name: "バリアの奥（卓球台）",   light: 8,  time: 0, isSelected: false },
                    { name: "オフィス",               light: 41, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "コラボルーム",
        isExpanded: false,
        subAreas: [
            {
                // Wiki「Starlight Desert (140)」
                name: "星月夜の砂漠",
                isExpanded: false,
                time: 240,
                spots: [
                    { name: "巨大な壺の中",     light: 15, time: 0, isSelected: false },
                    { name: "円形劇場の客席",   light: 15, time: 0, isSelected: false },
                    { name: "ランプの塔",       light: 15, time: 0, isSelected: false },
                    { name: "入り江の船",       light: 15, time: 0, isSelected: false },
                    { name: "浮かぶ城の玉座",   light: 15, time: 0, isSelected: false },
                    { name: "浮かぶ本の山",     light: 15, time: 0, isSelected: false },
                    { name: "バラ園横の宝",     light: 50, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Crescent Oasis (43)」
                name: "三日月オアシス",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "湖底のトンネル",   light: 1,  time: 0, isSelected: false },
                    { name: "玉座の間",         light: 41, time: 0, isSelected: false },
                    { name: "隣の小さな建物",   light: 1,  time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「The Last City (150)」＋回廊の癒しの池
                name: "最後の街（ふたつの灯火）",
                isExpanded: false,
                time: 300,
                spots: [
                    { name: "街のレース",       light: 50,  time: 0, isSelected: false },
                    { name: "岩投げゲーム",     light: 50,  time: 0, isSelected: false },
                    { name: "貝殻ゲーム",       light: 50,  time: 0, isSelected: false },
                    { name: "回廊の癒しの池",   light: 200, time: 0, isSelected: false }
                ]
            }
        ]
    },
    {
        name: "ソーシャルライト",
        isExpanded: false,
        subAreas: [
            // ソーシャル系: 他プレイヤー依存のため固定時間にはしにくいが目安を設定（値はWiki準拠）
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
            {
                // Wiki「Treasure Reef Small Clams」時計回りの10ゾーン。値は1日の平均目安
                // （日により合計159〜245の幅がある）
                name: "岩礁貝殻",
                isExpanded: false,
                time: 180,
                spots: [
                    { name: "Ａ：入口アーチ前",     light: 7,  time: 0, isSelected: false },
                    { name: "Ｂ：釣り人島の外側",   light: 20, time: 0, isSelected: false },
                    { name: "Ｃ１：釣り人島の内側", light: 27, time: 0, isSelected: false },
                    { name: "Ｃ２：案内人の船の下", light: 10, time: 0, isSelected: false },
                    { name: "Ｄ：砲手の島まわり",   light: 25, time: 0, isSelected: false },
                    { name: "Ｅ：左島の岸・塔",     light: 21, time: 0, isSelected: false },
                    { name: "Ｆ：沈んだ東屋",       light: 19, time: 0, isSelected: false },
                    { name: "Ｇ：右島への岩場",     light: 40, time: 0, isSelected: false },
                    { name: "Ｈ：緑の岩（酸素）",   light: 25, time: 0, isSelected: false },
                    { name: "Ｉ：右島の外側",       light: 15, time: 0, isSelected: false }
                ]
            },
            {
                // Wiki「Yeti Race」150〜300
                name: "隠者レース",
                isExpanded: false,
                time: 240,
                spots: [
                    { name: "最低値", light: 150, time: 0, isSelected: false, group: "最低" },
                    { name: "最高値", light: 300, time: 0, isSelected: false, group: "最高" }
                ]
            },
            {
                // Wiki「Village Theater Bouquets」21〜44
                name: "夢見の劇場花束",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "最低値", light: 21, time: 0, isSelected: false, group: "最低" },
                    { name: "最高値", light: 44, time: 0, isSelected: false, group: "最高" }
                ]
            },
            {
                // Wiki「Dreams Skater」夢見の町のスケーターイベント
                name: "夢見の町スケーター",
                isExpanded: false,
                time: 120,
                spots: [
                    { name: "イベント報酬", light: 400, time: 0, isSelected: false }
                ]
            }
        ]
    }
];

window.SKY_DEFAULT_AREAS = SKY_DEFAULT_AREAS;
window.SKY_AREAS_DATA_VERSION = SKY_AREAS_DATA_VERSION;
