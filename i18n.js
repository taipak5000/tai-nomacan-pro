// i18n.js
// 🌐 UI言語（日本語 / English）翻訳辞書。
// 'sky_app_lang' キー（'ja'|'en'）は taipak5000.github.io 系ツール共通のグローバル設定
// （プロフィール保存枠に依存しない、端末側の表示言語設定）。sky_app_themeと同じ扱い。
//
// sidebar / tools / footer.creditLabel / footer.infoLink は、このリポジトリが参加している
// taipak5000.github.io 系ツール共通のUIチェイン（tai-nomacan 等が原本）の訳文をそのまま踏襲しています。
// このツールは skyProfiles_v1 共通プロフィール／ダッシュボード／バックアップ／アイコンカスタマイズ
// の仕組みには参加していないため、それらの共通辞書キーはここには含まれていません。
window.SKY_TRANSLATIONS = {
    ja: {
        // ── ページ・ヘッダー ──
        pageTitleWide: "ノマキャン計算機プロ (Web版)",
        pageTitle: "ノマキャン計算機プロ",
        themeDark: "🌙 ダーク",
        themeLight: "☀️ ライト",
        langToggleBtn: "🌐 English",

        // ── サイドバー（共通UIチェイン踏襲） ──
        "sidebar.hamburgerToggle": "☰ ツール",
        "sidebar.relatedToolsLabel": "🔗 関連ツール",

        // ── ツール名（共通UIチェイン踏襲＋このリポジトリ独自分） ──
        "tools.taiNomacanPro": "🕯️ ノマキャン計算機プロ",
        "tools.taiNomacan": "🕯️ ノマキャン計算機",
        "tools.companion": "✨ 精霊同行ツール",
        "tools.share": "📍 創作物管理ツール",
        "tools.item": "🗂️ アイテム所持管理",
        "tools.dataTransfer": "🔄 データ引継ぎ",
        "tools.rtaTimer": "⏱️ RTAタイマー",

        // ── 表示設定パネル ──
        "settings.displaySettingsBtn": "⚙️ 表示設定",
        "settings.panelHeader": "⚙️ 各窓の表示・非表示設定",
        "settings.candleManage": "キャンドル管理",
        "settings.optimization": "効率自動最適化",
        "settings.myRoutes": "マイルート管理",
        "settings.spellShare": "データの共有",
        "settings.resetInputBtn": "🧹 入力数値をリセット",

        // ── 今日の精錬状況カード ──
        "refine.sectionHeader": "今日の精錬状況",
        "refine.dailyBonusLabel": "📅 本日の大キャンドル群:",
        "refine.dailyBonusNone": "なし",
        "refine.dailyBonus1": "1個 (+50)",
        "refine.dailyBonus2": "2個 (+100)",
        "refine.dailyBonus3": "3個 (+150)",
        "refine.dailyBonus4": "4個 (+200)",
        "refine.shardLabel": "🌋 本日の闇の破片（黒）",
        "refine.shardYes": "あり (+200)",
        "refine.shardNo": "なし",
        "refine.shardPredictionLabel": "🔮 黒シャード予測（{realm}・JST）",
        "refine.syncPrediction": "🔄予測に合わせる",
        "refine.receiveOnceNote": "※受取はその日の初回のみ",
        "refine.expectedCandles": "精錬予定:",
        "refine.candlesUnit": "本",
        "refine.totalLight": "火種合計:",
        "refine.totalEfficiency": "選択全体の総合効率:",
        "refine.totalTime": "総所要時間:",
        "refine.nextThreshold": "次まで:",
        "refine.dailyResetBtn": "デイリーリセット",

        // ── キャンドル管理カード ──
        "candle.sectionHeader": "📅 キャンドル管理",
        "candle.dcNote": "※大キャンドル＝DC",
        "candle.carryOver": "繰越:",
        "candle.carryGaugeAria": "繰越ゲージ",
        "candle.slideHint": "↕ スライドして調整",
        "candle.currentCandles": "所持キャンドル数:",
        "candle.plannedUsage": "使用予定数:",
        "candle.dailyHearts": "💛 毎日送るハート数:",
        "candle.perDayCost": "= 1日",
        "candle.overDaysCost": "／ {days}日間で",
        "candle.eventEndDate": "イベント終了日:",
        "candle.remainingDays": "稼げる残日数:",
        "candle.remainingDaysUnit": "日",
        "candle.projectedRemaining": "予想残数:",
        "candle.memoLabel": "キャンドル管理メモ:",
        "candle.memoPlaceholder": "交換・使用予定のアイテム、今後のイベント予定など自由に記載…",

        // ── 効率自動最適化カード ──
        "optimize.sectionHeader": "効率自動最適化",
        "optimize.targetLabel": "目標本数:",
        "optimize.autoSelectBtn": "高効率エリアを自動選択",

        // ── プレイスタイル診断カード ──
        "skill.cardHeader": "🌟 プレイスタイル診断",
        "skill.cardDesc": "あなたのプレイスタイルに合わせて、各エリアの<b>所要時間の初期値</b>を自動設定します。",
        "skill.notYet": "まだ診断していません。下のボタンから始めてください。",
        "skill.startBtn": "▶ 診断スタート",
        "skill.retryBtn": "🔄 プレイスタイルを再診断する",
        "skill.autoCorrected": "🎯 実測データにより現在 ×{mult} に補正済み",
        "skill.modalHeader": "🌟 プレイスタイル診断",
        "skill.modalDesc": "各質問にどのくらい当てはまるか選んでください。結果に応じて所要時間の初期値が設定されます。",
        "skill.scale0": "まったく<br>当てはまらない",
        "skill.scale1": "あまり<br>当てはまらない",
        "skill.scale2": "やや<br>当てはまる",
        "skill.scale3": "とても<br>当てはまる",
        "skill.scoreLabel": "スコア",
        "skill.scoreOutOf": "{n} / 12点",
        "skill.scaleTick0": "0",
        "skill.scaleTick3": "〜3",
        "skill.scaleTick6": "〜6",
        "skill.scaleTick9": "〜9",
        "skill.scaleTick10": "10〜<br>倍率なし",
        "skill.resultTiming": "所要時間を",
        "skill.resultSuffix": "で設定します",
        "skill.resultNotReady": "全問回答すると結果が表示されます",
        "skill.cancelBtn": "キャンセル",
        "skill.applyBtn": "✅ この設定で所要時間を設定する",
        "skill.q1": "プレイに自信がある",
        "skill.q2": "おんぶロケットやテントを利用する",
        "skill.q3": "リトル抜けなどグリッチを多用する",
        "skill.q4": "ルートはある程度決まっている",
        "skill.opt0": "😕\nまったく",
        "skill.opt1": "🙁\nあまり",
        "skill.opt2": "🙂\nやや",
        "skill.opt3": "😄\nとても",
        "skill.levelBeginnerLabel": "🌱 はじめたて",
        "skill.levelBeginnerDesc": "基準の2.5倍（ゆっくり設定）",
        "skill.levelNoviceLabel": "🌿 なれてきた",
        "skill.levelNoviceDesc": "基準の2.0倍",
        "skill.levelIntermediateLabel": "⭐ 中級者",
        "skill.levelIntermediateDesc": "基準の1.7倍",
        "skill.levelAdvancedLabel": "🌟 上級者",
        "skill.levelAdvancedDesc": "基準の1.3倍",
        "skill.levelExpertLabel": "💫 エキスパート",
        "skill.levelExpertDesc": "基準値そのまま（倍率なし）",
        "skill.multNone": "倍率なし（基準値そのまま）",
        "skill.multTemplate": "基準×{mult}",
        "skill.appliedMsg": "{label} として所要時間を設定しました（{multStr}）",

        // ── データの共有（復活の呪文）カード ──
        "spell.sectionHeader": "🧙‍♂️ データの共有（復活の呪文）",
        "spell.exportLabel": "この端末のデータを呪文にする：",
        "spell.generateBtn": "✨ 復活の呪文を生成",
        "spell.generatedPlaceholder": "ボタンを押すとここに呪文が生成されます...",
        "spell.importLabel": "他の端末の呪文から復元する：",
        "spell.importPlaceholder": "他端末で生成した呪文をここに貼り付けてください...",
        "spell.confirmOverwrite": "⚠️ 呪文を唱えると現在のデータが上書きされます。よろしいですか？",
        "spell.confirmYes": "はい、唱えます",
        "spell.confirmCancel": "やめる",
        "spell.applyBtn": "🔮 呪文を唱える",
        "spell.genFailed": "呪文の生成に失敗しました。",
        "spell.emptyInput": "呪文を入力してください。",
        "spell.restoreSuccess": "🌟 データの復元に成功しました！",
        "spell.restoreFailed": "😢 じじゅもんが ちがいます！",

        // ── マイルート管理カード ──
        "route.sectionHeader": "📍 マイルート管理（ルート比較・メモ・タイマー）",
        "route.saveCurrentBtn": "💾 現在の選択をルートとして保存",
        "route.importLabel": "📥 他人のルート呪文を読み込む",
        "route.importPlaceholder": "ここにルート共有用の呪文を貼り付け...",
        "route.importBtn": "読み込み",
        "route.emptyState": "保存されたルートはありません。<br>下のエリア管理でスポットのチェックを入れて、お気に入りルートを保存してみましょう！",
        "route.namePlaceholder": "ルート名",
        "route.moveUp": "↑",
        "route.moveDown": "↓",
        "route.apply": "適用",
        "route.share": "📤 共有",
        "route.rtaBtn": "⏱️ RTAで計測",
        "route.via": "🗺️ 経由:",
        "route.viaNone": "選択なし",
        "route.unmeasuredHint": "💡 未計測 - タップして1回計測すると精度が上がります",
        "route.timerLabel": "⏱️ 実測タイマー",
        "route.measuring": "● 計測中",
        "route.startBtn": "▶ 計測スタート",
        "route.pauseBtn": "⏸ 一時停止 (保存)",
        "route.resetBtn": "🔄 リセット",
        "route.reorderLabel": "🗺️ 経由順の入れ替え:",
        "route.memoPlaceholder": "ルートメモ…",
        "route.idealTotal": "📐 理想値合計:",
        "route.actualStatus": "🏃 実測値状況:",
        "route.efficiency": "効率:",
        "route.deleteBtn": "🗑️ ルート削除",
        "route.noSpotSelected": "⚠️ スポットが一つも選択されていません。",
        "route.savedHint": "✅ ルートを保存しました。1回だけ計測すると、次回からの見積もり精度が上がります👇",
        "route.deleteConfirm": "ルート「{name}」を削除しますか？",
        "route.correctionShorter": "短く",
        "route.correctionLonger": "長く",
        "route.correctionMsg": "🎯「{name}」の実測結果から所要時間を{percent}%{dir}補正しました（現在 ×{mult}）",
        "route.spellGenFailed": "⚠️ ルート呪文の生成に失敗しました。",
        "route.spellInvalid": "😢 ルート呪文の構造が正しくありません。",
        "route.spellImportSuccess": "📥 ルートを正常に取り込みました！",
        "route.rtaGenFailed": "⚠️ 呪文の生成に失敗したため、RTAタイマーに渡せませんでした。",
        "route.rtaCopiedHint": "📋 ルートが大きいため呪文をコピーしました。開いたRTAタイマーの「計算機のルートを読込」欄に貼り付けてください。",
        "route.defaultNamePrefix": "マイルート",
        "route.importedNamePrefix": "[読込]",
        "route.sharedAreaName": "📥 共有された外部エリア",

        // ── エリア管理カード ──
        "area.sectionHeader": "🗺️ エリア管理",
        "area.viewList": "📋 リスト",
        "area.viewMap": "🗺️ ミニマップ",
        "area.viewAtlas": "🧭 精密マップ",
        "area.bgSetBtn": "🖼️ この地図の背景画像を設定",
        "area.bgRemoveBtn": "背景を削除",
        "area.bgOpacity": "濃さ",
        "area.bgNote": "※画像はこの端末のブラウザ内にのみ保存されます（サイトには公開されません）。ソルとシュガ様(@sky_solsuga)の地図(2480×3508)を読み込むとマーカーがそのまま重なります",
        "area.legendCandle": "キャンドル",
        "area.legendTreasure": "宝キャンドル",
        "area.legendDark": "闇植物",
        "area.legendDarkWeekday": "闇植物(曜日限定)",
        "area.legendSocial": "ソーシャル",
        "area.legendControls": "／ ドラッグ移動・ホイール/±でズーム・マーカータップで選択パネル",
        "area.selectAll": "全選択",
        "area.tapHint": "マーカーをタップすると、その場所のスポットを選択できます",
        "area.mapLegendSpot": "火種スポット（数字＝火種量）",
        "area.mapLegendSelected": "選択中",
        "area.mapLegendControls": "／ チェックで一括選択",
        "area.selectedCount": "{n}件選択中",
        "area.noSubAreas": "サブエリアがまだありません",
        "area.selectedLabel": "選択",
        "area.durationLabel": "所要時間:",
        "area.secLabel": "秒",
        "area.subAreaTimeFallbackNote": "（サブエリアに時間未入力のため代用）",
        "area.moveUp": "↑ 上へ",
        "area.moveDown": "↓ 下へ",
        "area.deleteArea": "🗑️ エリア削除",
        "area.deleteSubArea": "削除",
        "area.addSpot": "➕ スポットを追加",
        "area.addSubArea": "➕ サブエリアを追加",
        "area.addMainArea": "➕ 新規メインエリアを追加",
        "area.spotNamePlaceholder": "スポット名",
        "area.fireLabel": "🔥 火種:",
        "area.groupLabel": "グループ:",
        "area.groupPlaceholder": "例: 曜日",
        "area.wholeAreaLabel": "エリア全体",
        "area.deleteAreaConfirm": "「{name}」を削除しますか？\n※中のサブエリアやスポットもすべて消去されます",
        "area.deleteSubAreaConfirm": "「{name}」を削除しますか？\n※中のスポットもすべて消去されます",
        "area.deleteSpotConfirm": "「{name}」を削除しますか？",
        "area.untitledArea": "無題のエリア",
        "area.untitledSubArea": "無題のサブエリア",
        "area.untitledSpot": "無題のスポット",
        "area.newMainArea": "新規メインエリア",
        "area.newSubArea": "新規サブエリア",
        "area.newSpot": "新規スポット",
        "area.loadErrorName": "⚠️データ読み込みエラー",
        "area.loadErrorHint": "areas-data.js が同じフォルダにあるか確認してください",
        "area.unknownSpot": "不明なスポット",

        // ── 確認モーダル ──
        "confirmModal.title": "⚠️ 確認",
        "confirmModal.cancel": "キャンセル",
        "confirmModal.execute": "実行する",
        "confirmModal.resetDataConfirm": "キャンドル数、メモ、エリアの選択状態などの入力数値をリセットしますか？\n（※保存したマイルートや自分で追加したエリアは消えずに残ります）",
        "confirmModal.resetDataDone": "🧹 入力数値をリセットしました",

        // ── 日付ラベル ──
        "date.today": "本日",
        "date.tomorrow": "明日",

        // ── アトラス（精密マップ） ──
        "atlas.kindCandle": "キャンドル",
        "atlas.kindTreasure": "宝キャンドル",
        "atlas.kindDark": "闇植物",
        "atlas.kindSocial": "ソーシャル",
        "atlas.fireLabel": "火種",

        // ── フッター（一部は共通UIチェイン踏襲） ──
        "footer.copyright": "© 2026 ノマキャン計算機プロ",
        "footer.creditLabel": "作成・ご意見:",
        "footer.referencesLabel": "参考文献:",
        "footer.infoLink": "⚙️ 設定・更新情報・クレジット・プライバシーポリシー",

        // ── 時間の単位（分・秒） ──
        "time.minSec": "{m}分{s}秒",
    },
    en: {
        pageTitleWide: "Nomacan Calculator Pro (Web)",
        pageTitle: "Nomacan Calculator Pro",
        themeDark: "🌙 Dark",
        themeLight: "☀️ Light",
        langToggleBtn: "🌐 日本語",

        "sidebar.hamburgerToggle": "☰ Tools",
        "sidebar.relatedToolsLabel": "🔗 Related Tools",

        "tools.taiNomacanPro": "🕯️ Nomacan Calculator Pro",
        "tools.taiNomacan": "🕯️ Nomacan Calculator",
        "tools.companion": "✨ Spirit Companion Tool",
        "tools.share": "📍 Creation Manager",
        "tools.item": "🗂️ Item Collection",
        "tools.dataTransfer": "🔄 Data Transfer",
        "tools.rtaTimer": "⏱️ RTA Timer",

        "settings.displaySettingsBtn": "⚙️ Display Settings",
        "settings.panelHeader": "⚙️ Show/Hide Each Panel",
        "settings.candleManage": "Candle Management",
        "settings.optimization": "Auto-Optimize Efficiency",
        "settings.myRoutes": "My Routes",
        "settings.spellShare": "Data Sharing",
        "settings.resetInputBtn": "🧹 Reset Entered Values",

        "refine.sectionHeader": "Today's Refining Status",
        "refine.dailyBonusLabel": "📅 Today's Grand Candles:",
        "refine.dailyBonusNone": "None",
        "refine.dailyBonus1": "1 (+50)",
        "refine.dailyBonus2": "2 (+100)",
        "refine.dailyBonus3": "3 (+150)",
        "refine.dailyBonus4": "4 (+200)",
        "refine.shardLabel": "🌋 Today's Shard Eruption (Black)",
        "refine.shardYes": "Yes (+200)",
        "refine.shardNo": "None",
        "refine.shardPredictionLabel": "🔮 Black Shard Prediction ({realm} · JST)",
        "refine.syncPrediction": "🔄 Match Prediction",
        "refine.receiveOnceNote": "*Reward is only received on the first eruption of the day",
        "refine.expectedCandles": "Expected Candles:",
        "refine.candlesUnit": "candles",
        "refine.totalLight": "Total Light:",
        "refine.totalEfficiency": "Overall Selected Efficiency:",
        "refine.totalTime": "Total Time Required:",
        "refine.nextThreshold": "Next At:",
        "refine.dailyResetBtn": "Daily Reset",

        "candle.sectionHeader": "📅 Candle Management",
        "candle.dcNote": "*Grand Candle = DC",
        "candle.carryOver": "Carry-over:",
        "candle.carryGaugeAria": "Carry-over gauge",
        "candle.slideHint": "↕ Slide to adjust",
        "candle.currentCandles": "Candles on Hand:",
        "candle.plannedUsage": "Planned Usage:",
        "candle.dailyHearts": "💛 Hearts Sent Daily:",
        "candle.perDayCost": "= per day",
        "candle.overDaysCost": "／ over {days} days",
        "candle.eventEndDate": "Event End Date:",
        "candle.remainingDays": "Remaining Earning Days:",
        "candle.remainingDaysUnit": "d",
        "candle.projectedRemaining": "Projected Remaining:",
        "candle.memoLabel": "Candle Management Memo:",
        "candle.memoPlaceholder": "Freely note items to trade/use, upcoming events, etc…",

        "optimize.sectionHeader": "Auto-Optimize Efficiency",
        "optimize.targetLabel": "Target Amount:",
        "optimize.autoSelectBtn": "Auto-Select High-Efficiency Areas",

        "skill.cardHeader": "🌟 Playstyle Diagnosis",
        "skill.cardDesc": "Automatically sets the <b>initial time-required values</b> for each area to match your playstyle.",
        "skill.notYet": "You haven't taken the diagnosis yet. Start with the button below.",
        "skill.startBtn": "▶ Start Diagnosis",
        "skill.retryBtn": "🔄 Re-take Playstyle Diagnosis",
        "skill.autoCorrected": "🎯 Corrected to ×{mult} based on measured data",
        "skill.modalHeader": "🌟 Playstyle Diagnosis",
        "skill.modalDesc": "Choose how well each question applies to you. Initial time values are set based on the result.",
        "skill.scale0": "Not at all",
        "skill.scale1": "Not very much",
        "skill.scale2": "Somewhat",
        "skill.scale3": "Very much",
        "skill.scoreLabel": "Score",
        "skill.scoreOutOf": "{n} / 12 pts",
        "skill.scaleTick0": "0",
        "skill.scaleTick3": "~3",
        "skill.scaleTick6": "~6",
        "skill.scaleTick9": "~9",
        "skill.scaleTick10": "10~<br>No multiplier",
        "skill.resultTiming": "Time required will be set to",
        "skill.resultSuffix": "",
        "skill.resultNotReady": "The result will appear once you've answered every question",
        "skill.cancelBtn": "Cancel",
        "skill.applyBtn": "✅ Set Time Required With This",
        "skill.q1": "I'm confident in my gameplay",
        "skill.q2": "I use piggyback rockets or tents",
        "skill.q3": "I frequently use glitches like Little Skips",
        "skill.q4": "My route is largely fixed",
        "skill.opt0": "😕\nNot at all",
        "skill.opt1": "🙁\nNot much",
        "skill.opt2": "🙂\nSomewhat",
        "skill.opt3": "😄\nVery much",
        "skill.levelBeginnerLabel": "🌱 Just Starting",
        "skill.levelBeginnerDesc": "2.5× the baseline (slow setting)",
        "skill.levelNoviceLabel": "🌿 Getting the Hang of It",
        "skill.levelNoviceDesc": "2.0× the baseline",
        "skill.levelIntermediateLabel": "⭐ Intermediate",
        "skill.levelIntermediateDesc": "1.7× the baseline",
        "skill.levelAdvancedLabel": "🌟 Advanced",
        "skill.levelAdvancedDesc": "1.3× the baseline",
        "skill.levelExpertLabel": "💫 Expert",
        "skill.levelExpertDesc": "Baseline as-is (no multiplier)",
        "skill.multNone": "No multiplier (baseline as-is)",
        "skill.multTemplate": "baseline ×{mult}",
        "skill.appliedMsg": "Set time required as {label} ({multStr})",

        "spell.sectionHeader": "🧙‍♂️ Data Sharing (Revival Spell)",
        "spell.exportLabel": "Turn this device's data into a spell:",
        "spell.generateBtn": "✨ Generate Revival Spell",
        "spell.generatedPlaceholder": "Press the button to generate a spell here...",
        "spell.importLabel": "Restore from a spell from another device:",
        "spell.importPlaceholder": "Paste the spell generated on another device here...",
        "spell.confirmOverwrite": "⚠️ Casting this spell will overwrite your current data. Are you sure?",
        "spell.confirmYes": "Yes, cast it",
        "spell.confirmCancel": "Cancel",
        "spell.applyBtn": "🔮 Cast Spell",
        "spell.genFailed": "Failed to generate the spell.",
        "spell.emptyInput": "Please enter a spell.",
        "spell.restoreSuccess": "🌟 Data restored successfully!",
        "spell.restoreFailed": "😢 That spell doesn't look right!",

        "route.sectionHeader": "📍 My Routes (Compare, Memo, Timer)",
        "route.saveCurrentBtn": "💾 Save Current Selection as a Route",
        "route.importLabel": "📥 Load Someone Else's Route Spell",
        "route.importPlaceholder": "Paste a route-sharing spell here...",
        "route.importBtn": "Load",
        "route.emptyState": "No saved routes yet.<br>Check some spots in the Area Management below and try saving your favorite route!",
        "route.namePlaceholder": "Route name",
        "route.moveUp": "↑",
        "route.moveDown": "↓",
        "route.apply": "Apply",
        "route.share": "📤 Share",
        "route.rtaBtn": "⏱️ Time with RTA",
        "route.via": "🗺️ Via:",
        "route.viaNone": "Nothing selected",
        "route.unmeasuredHint": "💡 Not yet measured — tap to time it once and improve accuracy",
        "route.timerLabel": "⏱️ Measured Timer",
        "route.measuring": "● Timing",
        "route.startBtn": "▶ Start Timing",
        "route.pauseBtn": "⏸ Pause (Save)",
        "route.resetBtn": "🔄 Reset",
        "route.reorderLabel": "🗺️ Reorder Route:",
        "route.memoPlaceholder": "Route memo…",
        "route.idealTotal": "📐 Ideal Total:",
        "route.actualStatus": "🏃 Measured Status:",
        "route.efficiency": "Efficiency:",
        "route.deleteBtn": "🗑️ Delete Route",
        "route.noSpotSelected": "⚠️ No spots are selected.",
        "route.savedHint": "✅ Route saved. Time it once and accuracy will improve next time👇",
        "route.deleteConfirm": 'Delete route "{name}"?',
        "route.correctionShorter": "shorter",
        "route.correctionLonger": "longer",
        "route.correctionMsg": '🎯 Corrected time required by {percent}% {dir} based on measured results for "{name}" (now ×{mult})',
        "route.spellGenFailed": "⚠️ Failed to generate the route spell.",
        "route.spellInvalid": "😢 This route spell's structure isn't valid.",
        "route.spellImportSuccess": "📥 Route imported successfully!",
        "route.rtaGenFailed": "⚠️ Failed to generate the spell, so it couldn't be passed to the RTA Timer.",
        "route.rtaCopiedHint": '📋 This route is large, so the spell was copied instead. Paste it into the "Load Calculator Route" field on the RTA Timer that opened.',
        "route.defaultNamePrefix": "My Route",
        "route.importedNamePrefix": "[Loaded]",
        "route.sharedAreaName": "📥 Shared External Area",

        "area.sectionHeader": "🗺️ Area Management",
        "area.viewList": "📋 List",
        "area.viewMap": "🗺️ Mini-Map",
        "area.viewAtlas": "🧭 Precise Map",
        "area.bgSetBtn": "🖼️ Set This Map's Background Image",
        "area.bgRemoveBtn": "Remove Background",
        "area.bgOpacity": "Opacity",
        "area.bgNote": "*The image is saved only in this device's browser (never uploaded to the site). Loading Sol & Suga's (@sky_solsuga) maps (2480×3508) will line the markers up exactly.",
        "area.legendCandle": "Candle",
        "area.legendTreasure": "Treasure Candle",
        "area.legendDark": "Dark Plant",
        "area.legendDarkWeekday": "Dark Plant (weekday-limited)",
        "area.legendSocial": "Social",
        "area.legendControls": "／ Drag to move · wheel/± to zoom · tap a marker to select",
        "area.selectAll": "Select All",
        "area.tapHint": "Tap a marker to select the spots at that location",
        "area.mapLegendSpot": "Light spot (number = amount)",
        "area.mapLegendSelected": "Selected",
        "area.mapLegendControls": "／ Check to bulk-select",
        "area.selectedCount": "{n} selected",
        "area.noSubAreas": "No sub-areas yet",
        "area.selectedLabel": "Selected",
        "area.durationLabel": "Time Required:",
        "area.secLabel": "s",
        "area.subAreaTimeFallbackNote": "(using this since sub-areas have no time set)",
        "area.moveUp": "↑ Up",
        "area.moveDown": "↓ Down",
        "area.deleteArea": "🗑️ Delete Area",
        "area.deleteSubArea": "Delete",
        "area.addSpot": "➕ Add Spot",
        "area.addSubArea": "➕ Add Sub-Area",
        "area.addMainArea": "➕ Add New Main Area",
        "area.spotNamePlaceholder": "Spot name",
        "area.fireLabel": "🔥 Light:",
        "area.groupLabel": "Group:",
        "area.groupPlaceholder": "e.g. Weekday",
        "area.wholeAreaLabel": "Whole Area",
        "area.deleteAreaConfirm": 'Delete "{name}"?\n*All sub-areas and spots inside will also be deleted',
        "area.deleteSubAreaConfirm": 'Delete "{name}"?\n*All spots inside will also be deleted',
        "area.deleteSpotConfirm": 'Delete "{name}"?',
        "area.untitledArea": "Untitled Area",
        "area.untitledSubArea": "Untitled Sub-Area",
        "area.untitledSpot": "Untitled Spot",
        "area.newMainArea": "New Main Area",
        "area.newSubArea": "New Sub-Area",
        "area.newSpot": "New Spot",
        "area.loadErrorName": "⚠️ Data Load Error",
        "area.loadErrorHint": "Please check that areas-data.js is in the same folder",
        "area.unknownSpot": "Unknown Spot",

        "confirmModal.title": "⚠️ Confirm",
        "confirmModal.cancel": "Cancel",
        "confirmModal.execute": "Execute",
        "confirmModal.resetDataConfirm": "Reset entered values such as candle count, memo, and area selection state?\n(*Saved routes and areas you added yourself will not be removed)",
        "confirmModal.resetDataDone": "🧹 Entered values have been reset",

        "date.today": "Today",
        "date.tomorrow": "Tomorrow",

        "atlas.kindCandle": "Candle",
        "atlas.kindTreasure": "Treasure Candle",
        "atlas.kindDark": "Dark Plant",
        "atlas.kindSocial": "Social",
        "atlas.fireLabel": "Light",

        "footer.copyright": "© 2026 Nomacan Calculator Pro",
        "footer.creditLabel": "Created by / feedback:",
        "footer.referencesLabel": "References:",
        "footer.infoLink": "⚙️ Settings / What's New / Credits / Privacy Policy",

        "time.minSec": "{m}m {s}s",
    }
};

// key に対応する訳文を返す。{placeholder} 形式のプレースホルダーは params で置換する
window.SKY_T_LANG_KEY = 'sky_app_lang';
function skyGetStoredLang() {
    try {
        const v = localStorage.getItem(window.SKY_T_LANG_KEY);
        return (v === 'en' || v === 'ja') ? v : 'ja';
    } catch (e) { return 'ja'; }
}
window.skyTranslate = function (lang, key, params) {
    const dict = window.SKY_TRANSLATIONS[lang] || window.SKY_TRANSLATIONS.ja;
    let str = (dict && dict[key] !== undefined) ? dict[key] : (window.SKY_TRANSLATIONS.ja[key] !== undefined ? window.SKY_TRANSLATIONS.ja[key] : key);
    if (params) {
        Object.keys(params).forEach(function (k) {
            str = str.split('{' + k + '}').join(params[k]);
        });
    }
    return str;
};

/* ================================================================
   🗺️ エリア・サブエリア・スポット名の英訳マップ（表示専用）
   areas-data.js（SKY_DEFAULT_AREAS）と atlas-data.js（SKY_ATLAS_RAW の
   マップ切替タブ名）は、既存の保存データ・マーカー座標との照合キーとして
   日本語名をそのまま使い続けるため変更していません。
   このマップは「表示だけ」を英語に差し替えるための追加データで、
   displayAreaName(jaName) ヘルパー経由で読み取り専用の表示箇所にのみ使います
   （リスト管理画面の name 入力欄は、ユーザーが自由に改名できる生データのため
   翻訳の対象外です）。
   出典: このファイル自身のコメントに記載の Sky Wiki (Fandom) ページ名、
   および index.html 内の ATLAS_LABEL_JA / SKY_ATLAS_RAW の source フィールド。
   Wikiページ名が確認できない、このツール独自の場所の説明的な名前
   （例:「橋の下」「入口周辺の壺」）は、原文の意味をそのまま英語で
   説明的に翻訳しています。
   ================================================================ */
window.SKY_AREA_NAMES_EN = {
    // ── メインエリア ──
    "ホーム": "Home",
    "孤島": "Isle of Dawn",
    "草原": "Prairie",
    "雨林": "Forest",
    "峡谷": "Valley",
    "捨て地": "Wasteland",
    "書庫": "Vault",
    "コラボルーム": "Collab Room",
    "ソーシャルライト": "Social Light",
    "ランダムの火種": "Random Light Sources",
    // atlas タブ専用キー（メインエリアと重複しないもの）
    "草原高地": "Prairie Peaks",
    // 他人のルート呪文取込時、既存エリアに無いスポットの受け皿として自動生成される名前
    "📥 共有された外部エリア": "📥 Shared External Area",

    // ── サブエリア: ホーム ──
    "花鳥郷": "Aviary Village",
    "旧ホーム": "Old Home",
    "アリスカフェ": "Alice's Wonderland Cafe",
    "カーニバルエリア": "Wandering Carnival",

    // ── サブエリア: 孤島 ──
    "孤島台地": "Dawn Circle",
    "孤島の神殿": "Temple of the Isle",
    "孤島の見晴らし台": "Dawn Overlook",
    "預言者の石窟": "Cave of Prophecies",

    // ── サブエリア: 草原 ──
    "ロビー・蝶々の住処": "Prairie Rest & Butterfly Fields",
    "草原の村": "Villages",
    "草原高地（オレオ）": "Prairie Heights (Oreo)",
    "草原の神殿": "Prairie Temple",
    "草原の洞窟": "Caves",
    "鳥の巣": "Bird Nest",
    "楽園": "Sanctuary Island",

    // ── サブエリア: 雨林 ──
    "前庭": "Forest Courtyard",
    "小川": "Forest Brook",
    "墓場（神殿前）": "Boneyard (near the Temple)",
    "高台広場（晴れ間）": "Elevated Clearing",
    "大空洞": "Forest Cavern",
    "雨林の神殿": "Temple of the Forest",
    "聖なる池": "Sacred Pond",
    "ツリーハウス": "The Treehouse",
    "風の街道": "The Wind Paths",

    // ── サブエリア: 峡谷 ──
    "凍った湖（アイスリンク）": "Frozen Lake (Ice Rink)",
    "陸通り（陸レ）": "Sliding Race",
    "城塞都市": "The Citadel",
    "空通り（空レ）": "Flying Race",
    "円形劇場": "The Coliseum",
    "峡谷の神殿": "Temple of the Valley",
    "夢見の町": "Village of Dreams",
    "隠者の峠": "Hermit Valley",
    "奏の音楽堂": "Harmony Hall",

    // ── サブエリア: 捨て地 ──
    "外郭（倒壊した祠）": "Broken Temple (Outskirts)",
    "墓所の入り口": "Graveyard Entrance",
    "墓所": "Graveyard",
    "戦場": "Battlefield",
    "蟹の沼地（座礁船）": "Crab Fields (Shipwreck)",
    "捨て地神殿": "Temple of the Wasteland",
    "忘れられた方舟": "The Forgotten Ark",
    "秘宝の岩礁": "The Treasure Reef",

    // ── サブエリア: 書庫 ──
    "1階": "First Floor",
    "2階": "Second Floor",
    "3階": "Third Floor",
    "4階": "Fourth Floor",
    "書庫の神殿": "The Summit",
    "資料庫": "The Archives",
    "君憶う保存庫": "Repository of Refuge",
    "壊れし燈の保管庫（修繕）": "Fractured Lantern Storage (Repair)",
    "秘密のエリア": "Secret Area",

    // ── サブエリア: コラボルーム ──
    "星月夜の砂漠": "Starlight Desert",
    "三日月オアシス": "Crescent Oasis",
    "最後の街（ふたつの灯火）": "The Last City (The Two Embers)",

    // ── サブエリア: ソーシャルライト ──
    "先祖の食楽（パン）": "Ancestors' Feast (Bread)",
    "ウミガメの軌跡（パンと上限共有）": "Sea Turtle's Path (shares cap with Bread)",
    "間欠泉（ウニ）": "Geyser (Urchin)",
    "岩礁うなぎ軌跡": "Reef Eel's Path",
    "焚き火": "Campfire",
    "街道雲のトンネル": "Cloud Tunnel (Wind Paths)",
    "ならい": "Bonding Rituals",

    // ── サブエリア: ランダムの火種 ──
    "岩礁貝殻": "Treasure Reef Clams",
    "隠者レース": "Yeti Race",
    "夢見の劇場花束": "Village Theater Bouquets",
    "夢見の町スケーター": "Dreams Skater",

    // ── ロビー（峡谷・書庫共通） ──
    "ロビー": "Lobby",

    // ── スポット: 花鳥郷 ──
    "希望の番人の街灯": "Streetlamp by the Guardian of Hope",
    "イベントストア階段": "Event Store Stairs",
    "キャンドル職人横": "Next to the Candlemaker",
    "巣づくり工房の扉横": "By the Nest-Weaving Workshop Door",
    "美容室の扉横": "By the Hair Salon Door",
    "音楽堂前の街灯": "Streetlamp in Front of the Concert Hall",
    "ケープ店の扉横": "By the Cape Shop Door",
    "ホームキャンドル横": "Next to the Home Candle",
    "イベント掲示板横": "Next to the Event Board",
    "ロッキー（日替り）": "Rocky (daily rotation)",
    "シナモロール": "Cinnamoroll",

    // ── スポット: 旧ホーム ──
    "池の岩の上": "On the Rock in the Pond",
    "楽器の祠前": "In Front of the Instrument Shrine",
    "ケープの祠前": "In Front of the Cape Shrine",
    "髪型の祠前": "In Front of the Hairstyle Shrine",
    "マスクの祠前": "In Front of the Mask Shrine",
    "服の祠前": "In Front of the Outfit Shrine",

    // ── スポット: アリスカフェ ──
    "暖炉入り口横": "By the Fireplace Entrance",
    "ソファ横": "By the Sofa",
    "紙のボート横": "By the Paper Boat",
    "鉢植え横": "By the Potted Plant",
    "カウンター前の角": "Corner in Front of the Counter",
    "カウンター内側": "Behind the Counter",
    "光の雲１０か所": "10 Light Clouds",
    "ソファ裏の闇植物": "Dark Plant Behind the Sofa",
    "ティーパーティ任務①": "Tea Party Quest ①",
    "ティーパーティ任務②": "Tea Party Quest ②",
    "カニうさぎ捕獲": "Catch the Crab-Rabbit",

    // ── スポット: カーニバルエリア ──
    "宝キャンドル（船首）": "Treasure Candle (Bow)",
    "宝キャンドル（左舷）": "Treasure Candle (Port Side)",
    "宝キャンドル（右舷）": "Treasure Candle (Starboard Side)",
    "小型ボートの１本": "Single Candle on the Small Boat",
    "メリーゴーランド船": "Carousel Ship",
    "観覧車船": "Ferris Wheel Ship",

    // ── スポット: 孤島台地 ──
    "蝶の岩場（埋もれた船）": "Butterfly Rocks (Buried Ship)",
    "通路岩のスロープ下": "Under the Slope by the Path Rocks",
    "左砂丘洞窟の宝": "Treasure in the Left Dune Cave",
    "精霊の記憶の闇": "Dark Plant by the Spirit's Memory",
    "職人の砂丘洞窟": "Artisan's Dune Cave",
    "右砂丘洞窟": "Right Dune Cave",
    "石窟入口の階段": "Stairs at the Cave Entrance",

    // ── スポット: 孤島の神殿 ──
    "航海者の洞窟": "Voyager's Cave",
    "洞窟の闇植物": "Dark Plant in the Cave",
    "神殿内部": "Inside the Temple",

    // ── スポット: 孤島の見晴らし台 ──
    "パズル部屋の階段": "Stairs by the Puzzle Room",
    "蝶の瓶の周り": "Around the Butterfly Jar",
    "上の通路": "Upper Path",
    "船の宝キャンドル": "Treasure Candle on the Ship",

    // ── スポット: 預言者の石窟 ──
    "大広間の宝": "Treasure in the Great Hall",
    "雲の間の岩": "Rock Between the Clouds",
    "水の試練": "The Trial of Water",
    "地の試練": "The Trial of Earth",
    "風の試練": "The Trial of Air",
    "火の試練": "The Trial of Fire",

    // ── スポット: ロビー・蝶々の住処 ──
    "噴水まわり": "Around the Fountain",
    "道中の岩": "Rock Along the Path",
    "右の小洞窟": "Small Cave on the Right",
    "蝶使いの精霊横": "Next to the Butterfly Charmer Spirit",
    "村へのゲート前": "In Front of the Gate to the Village",
    "鳥の巣ゲート前": "In Front of the Gate to Bird Nest",
    "洞窟ゲート前": "In Front of the Cave Gate",

    // ── スポット: 草原の村 ──
    "左島（鐘楼と闇）": "Left Island (Bell Tower & Dark Plant)",
    "中島（鐘楼と部屋）": "Middle Island (Bell Tower & Room)",
    "右島（洞窟側）": "Right Island (Cave Side)",

    // ── スポット: 草原高地（オレオ） ──
    "入口の階段": "Entrance Stairs",
    "8人部屋の奥": "Back of the 8-Player Room",
    "右の丘の上": "On the Hill to the Right",

    // ── スポット: 草原の神殿 ──
    "橋の下の池": "Pond Under the Bridge",
    "入口右の棚": "Shelf to the Right of the Entrance",
    "祠の裏": "Behind the Shrine",
    "神殿の屋根": "Temple Roof",

    // ── スポット: 草原の洞窟 ──
    "入口周辺の壺": "Jars Near the Entrance",
    "中央部・船": "Center Area & Ship",
    "奥・出口側": "Back, Near the Exit",

    // ── スポット: 鳥の巣 ──
    "桟橋周辺": "Around the Pier",
    "大きな浮島": "Large Floating Island",
    "小さな浮島": "Small Floating Island",

    // ── スポット: 楽園 ──
    "第一浮島（宝と洞窟）": "First Floating Island (Treasure & Cave)",
    "蟹の洞窟（闇の木）": "Crab Cave (Dark Tree)",
    "滝まわり（宝含む）": "Around the Waterfall (incl. Treasure)",
    "クラゲの洞窟": "Jellyfish Cave",
    "鐘のモニュメント裏": "Behind the Bell Monument",
    "ビーチ（間欠泉横）": "Beach (Next to the Geyser)",

    // ── スポット: 前庭 ──
    "月・水・金・日 エリア全体": "Mon/Wed/Fri/Sun - Whole Area",
    "火・木・土 エリア全体": "Tue/Thu/Sat - Whole Area",

    // ── スポット: 小川 ──
    "入口・東屋周辺": "Near the Entrance & Gazebo",
    "家の跡・洞窟前": "House Ruins & Cave Entrance",
    "川沿い・丘の木": "Along the River & Hill Tree",
    "土管の中の宝": "Treasure Inside the Pipe",
    "蟹洞窟・橋の下": "Crab Cave & Under the Bridge",
    "木の上の家": "House in the Tree",
    "ポーターの洞窟": "Porter's Cave",
    "出口周辺": "Near the Exit",

    // ── スポット: 墓場（神殿前） ──
    "入口・左の道": "Entrance & Left Path",
    "骨と倒木エリア": "Bones & Fallen Tree Area",
    "橋・マンタ周辺": "Bridge & Manta Area",
    "光掘りの洞窟": "Light-Digging Cave",
    "洞窟の上（闇の木）": "Above the Cave (Dark Tree)",

    // ── スポット: 高台広場（晴れ間） ──
    "入口・東屋側": "Entrance & Gazebo Side",
    "池と丘": "Pond & Hill",
    "墓場への出口側": "Exit Toward the Boneyard",

    // ── スポット: 大空洞 ──
    "蝶の瓶の棚": "Shelf with the Butterfly Jar",
    "扉のスイッチ上": "Above the Door Switch",
    "右の洞": "Right Cavern",
    "左の洞": "Left Cavern",

    // ── スポット: 雨林の神殿 ──
    "動く足場まわり": "Around the Moving Platforms",
    "建物の根本": "Base of the Building",
    "大きな闇の木": "Large Dark Tree",

    // ── スポット: 聖なる池 ──
    "木の根元（２か所）": "Base of the Trees (2 spots)",
    "切り株・池の右": "Stump & Right Side of the Pond",

    // ── スポット: ツリーハウス ──
    "入口の休憩所": "Rest Area at the Entrance",
    "テント・坑道": "Tent & Mine Shaft",
    "家の周り": "Around the House",
    "裏の池": "Pond in the Back",
    "てっぺんの棚": "Shelf at the Top",

    // ── スポット: 風の街道 ──
    "主島の階段・桟橋": "Main Island Stairs & Pier",
    "主島のトンネル群": "Main Island Tunnels",
    "右の浮島": "Right Floating Island",
    "左の浮島": "Left Floating Island",
    "奥の浮島": "Far Floating Island",
    "各入口前のキャンドル": "Candles at Each Entrance",
    "雲柱の浮島": "Floating Island by the Cloud Pillar",
    "浮島の宝キャンドル": "Treasure Candle on the Floating Island",

    // ── スポット: ロビー（峡谷） ──
    "左の道": "Left Path",
    "右の道": "Right Path",
    "中央の道・スロープ": "Center Path & Slope",
    "トンネル": "Tunnel",
    "湖への氷道": "Ice Path to the Lake",

    // ── スポット: 凍った湖 ──
    "橋の下": "Under the Bridge",
    "陸レ入口前": "In Front of the Sliding Race Entrance",
    "観光客の精霊の下": "Below the Tourist Spirit",
    "壊れたアーチの上": "On the Broken Arch",
    "長いトンネルの先": "Beyond the Long Tunnel",
    "湖の中央の下": "Below the Center of the Lake",

    // ── スポット: 陸通り・空通り 共通 ──
    "レース完走報酬": "Race Completion Reward",
    "かけら全回収ボーナス": "All-Shards-Collected Bonus",
    "部屋のキャンドル": "Candle in the Room",

    // ── スポット: 城塞都市 ──
    "入口右の建物群": "Buildings to the Right of the Entrance",
    "入口左の建物群": "Buildings to the Left of the Entrance",
    "重なるアーチ": "Overlapping Arches",
    "丸い建物": "Round Building",
    "空レ入口の柱": "Pillar at the Flying Race Entrance",

    // ── スポット: 円形劇場 ──
    "階段の両側": "Both Sides of the Stairs",
    "赤テント側の客席": "Seating by the Red Tent",
    "青テント側の客席": "Seating by the Blue Tent",

    // ── スポット: 峡谷の神殿 ──
    "長老像の周り": "Around the Elder Statue",
    "迷路の闇植物": "Dark Plant in the Maze",

    // ── スポット: 夢見の町 ──
    "滑走路下の宝": "Treasure Under the Runway",
    "温泉の宝": "Treasure in the Hot Spring",

    // ── スポット: 隠者の峠 ──
    "隠者の家の宝": "Treasure at the Hermit's House",
    "レース序盤": "Early Race Section",
    "谷の中腹": "Midway Up the Valley",
    "上部洞窟の道": "Path in the Upper Cave",
    "氷橋の先": "Beyond the Ice Bridge",
    "終盤の輪": "Ring Near the End",

    // ── スポット: 奏の音楽堂 ──
    "演奏 約50%達成": "Performance ~50% Complete",
    "演奏 約80%達成": "Performance ~80% Complete",

    // ── スポット: 捨て地 曜日別エリア合計（複数サブエリア共通） ──
    "月水金エリア合計": "Mon/Wed/Fri – Area Total",
    "火木土エリア合計": "Tue/Thu/Sat – Area Total",
    "日曜日エリア合計": "Sunday – Area Total",

    // ── スポット: 捨て地神殿 ──
    "長老像の左": "Left of the Elder Statue",
    "長老像の後ろ": "Behind the Elder Statue",
    "長老像の右": "Right of the Elder Statue",

    // ── スポット: 忘れられた方舟 ──
    "方舟の上": "On the Ark",
    "壊れた船": "Broken Ship",
    "沼の洞窟": "Marsh Cave",
    "迷路の洞窟": "Maze Cave",

    // ── スポット: 秘宝の岩礁 ──
    "入口・船・東屋": "Entrance, Ship & Gazebo",
    "水中トンネルと穴": "Underwater Tunnel & Hole",
    "曲がった壁・深い溝": "Curved Wall & Deep Trench",
    "竜の塔（巨大貝含む）": "Dragon's Tower (incl. Giant Clam)",
    "格子の隠し部屋": "Hidden Room Behind the Grate",
    "右島の巨大貝５つ": "5 Giant Clams on the Right Island",

    // ── スポット: 書庫 ロビー ──
    "階段上の柱": "Pillar Above the Stairs",

    // ── スポット: 1階 ──
    "エレベーター裏": "Behind the Elevator",
    "扉の奥の宝": "Treasure Behind the Door",
    "祈る侍者の横": "Next to the Praying Attendant",

    // ── スポット: 2階 ──
    "足場の間の宝": "Treasure Between the Platforms",
    "階段のキャンドル": "Candle on the Stairs",
    "扉の奥・机の下": "Behind the Door, Under the Desk",

    // ── スポット: 3階 ──
    "祠の足場": "Platform by the Shrine",
    "東屋の屋根": "Gazebo Roof",

    // ── スポット: 4階 ──
    "丸い建物の下": "Under the Round Building",
    "記憶の島の輪": "Ring on Memory Island",
    "滝の下の宝": "Treasure Under the Waterfall",
    "星座の上の宝": "Treasure Above the Constellation",
    "語り部の島と岩": "Storyteller's Island & Rock",
    "最上部の柱の島": "Island at the Top Pillar",

    // ── スポット: 書庫の神殿 ──
    "床の紋章の両側": "Both Sides of the Floor Emblem",
    "階段まわり": "Around the Stairs",
    "長老像の裏の宝": "Treasure Behind the Elder Statue",

    // ── スポット: 資料庫 ──
    "入口の足場": "Platform at the Entrance",
    "迷路・上の階": "Maze - Upper Level",
    "迷路・中の階": "Maze - Middle Level",
    "迷路・下の階": "Maze - Lower Level",

    // ── スポット: 君憶う保存庫 ──
    "棚の上": "On the Shelf",
    "梯子の棚": "Shelf on the Ladder",
    "ランタンの裏": "Behind the Lantern",
    "天井の上": "Above the Ceiling",

    // ── スポット: 壊れし燈の保管庫（修繕） ──
    "宝キャンドル": "Treasure Candle",
    "赤キャンドル各所": "Red Candles (Various Spots)",
    "結晶のかけら": "Crystal Shards",
    "修繕完了ボーナス": "Repair Completion Bonus",

    // ── スポット: 秘密のエリア ──
    "バリア前の大キャンドル": "Grand Candle Before the Barrier",
    "バリアの奥（卓球台）": "Behind the Barrier (Ping Pong Table)",
    "オフィス": "The Office",

    // ── スポット: 星月夜の砂漠 ──
    "巨大な壺の中": "Inside the Giant Jar",
    "円形劇場の客席": "Amphitheater Seating",
    "ランプの塔": "Lamp Tower",
    "入り江の船": "Ship in the Cove",
    "浮かぶ城の玉座": "Throne of the Floating Castle",
    "浮かぶ本の山": "Floating Pile of Books",
    "バラ園横の宝": "Treasure by the Rose Garden",

    // ── スポット: 三日月オアシス ──
    "湖底のトンネル": "Tunnel at the Bottom of the Lake",
    "玉座の間": "Throne Room",
    "隣の小さな建物": "Small Building Next Door",

    // ── スポット: 最後の街（ふたつの灯火） ──
    "街のレース": "City Race",
    "岩投げゲーム": "Rock Throwing Game",
    "貝殻ゲーム": "Shell Game",
    "回廊の癒しの池": "Healing Pond in the Cloister",

    // ── スポット: ソーシャルライト ──
    "1日上限": "Daily Cap",
    "上限": "Cap",
    "草原横穴": "Prairie Side Cave",
    "雨林小川": "Forest Brook",
    "峡谷神殿": "Valley Temple",
    "捨て地墓所": "Wasteland Graveyard",
    "信頼のならい（雨林小川）": "Trust Ritual (Forest Brook)",
    "助力のならい（草原洞窟）": "Assist Ritual (Prairie Caves)",
    "協調のならい（草原蝶々）": "Alliance Ritual (Butterfly Fields)",
    "団結のならい（雨林墓所）": "Bond Ritual (Boneyard)",

    // ── スポット: ランダムの火種 ──
    "Ａ：入口アーチ前": "A: In Front of the Entrance Arch",
    "Ｂ：釣り人島の外側": "B: Outside Fisherman's Island",
    "Ｃ１：釣り人島の内側": "C1: Inside Fisherman's Island",
    "Ｃ２：案内人の船の下": "C2: Under the Guide's Boat",
    "Ｄ：砲手の島まわり": "D: Around Gunner's Island",
    "Ｅ：左島の岸・塔": "E: Left Island Shore & Tower",
    "Ｆ：沈んだ東屋": "F: Sunken Gazebo",
    "Ｇ：右島への岩場": "G: Rocky Path to the Right Island",
    "Ｈ：緑の岩（酸素）": "H: Green Rock (Oxygen)",
    "Ｉ：右島の外側": "I: Outside the Right Island",
    "最低値": "Minimum",
    "最高値": "Maximum",
    "イベント報酬": "Event Reward",
};

window.skyDisplayAreaName = function (lang, jaName) {
    if (lang !== 'en' || !jaName) return jaName;
    return window.SKY_AREA_NAMES_EN[jaName] || jaName;
};
