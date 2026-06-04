const { createApp } = Vue;

createApp({
    data() {
        return {
            // モード・設定
            isDarkMode: false,
            showSettings: false,
            isWideScreen: window.innerWidth > 850,
            
            // 表示セクション管理（カスタム窓の切り替え状態）
            visibleSections: {
                candleManage: true,
                optimization: true,
                sharedItems: true,
                myRoutes: true,
                spellShare: true
            },
            
            // キャンドル管理
            carryOverPercent: 0,
            currentCandles: 0,
            plannedUsage: 0,
            targetDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 初期値は14日後
            candleMemo: '',
            
            // 効率最適化の目標本数
            targetCandlesForOptimization: 15,
            
            // シェア系創作物
            isItemsExpanded: true,
            placedItems: [],
            
            // データの共有（復活の呪文）
            generatedSpell: '',
            inputSpell: '',
            isConfirming: false,
            
            // エリア管理（初期デフォルトデータ）
            areas: [
                {
                    id: 'a1', name: '孤島', isExpanded: true,
                    subAreas: [
                        { id: 's1', name: '平原・砂漠', isSelected: false, light: 120, time: 180 },
                        { id: 's2', name: '神殿・預言者の試練', isSelected: false, light: 280, time: 360 }
                    ]
                },
                {
                    id: 'a2', name: '草原', isExpanded: true,
                    subAreas: [
                        { id: 's3', name: '蝶々の平原・各洞窟', isSelected: false, light: 220, time: 240 },
                        { id: 's4', name: '鳥の巣・浮島', isSelected: false, light: 160, time: 180 },
                        { id: 's5', name: '楽園の諸島（大キャンドル含）', isSelected: false, light: 450, time: 420 }
                    ]
                },
                {
                    id: 'a3', name: '雨林', isExpanded: false,
                    subAreas: [
                        { id: 's6', name: '静けさの森・開拓地', isSelected: false, light: 180, time: 200 },
                        { id: 's7', name: '地下洞窟・晴れ間', isSelected: false, light: 320, time: 300 }
                    ]
                }
            ],
            
            // マイルート配列
            myRoutes: [],
            
            // カスタム削除確認モーダルの状態
            deleteModal: {
                show: false,
                type: '', // 'main' または 'sub'
                mainIdx: null,
                subIdx: null,
                name: ''
            },
            
            // 自作トースト通知システム用
            toasts: [],
            toastIdCounter: 0,
            
            // キャンドル精錬の必要火種テーブル（Skyのメーター減衰システムの簡易シミュレート）
            thresholds: [
                150, 150, 150, 150, 150, // 1〜5本目
                200, 200, 200, 200, 200, // 6〜10本目
                300, 300, 300, 300, 300, // 11〜15本目
                400, 400, 400, 400, 400, // 16〜20本目
                500, 600, 700, 800, 1000 // 21〜25本目
            ]
        };
    },
    computed: {
        // 現在選択中の総火種数
        totalLight() {
            let total = 0;
            this.areas.forEach(main => {
                main.subAreas.forEach(sub => {
                    if (sub.isSelected) total += (Number(sub.light) || 0);
                });
            });
            return total;
        },
        // 全体の総合効率（火種/秒）
        totalEfficiency() {
            let totalTime = 0;
            this.areas.forEach(main => {
                main.subAreas.forEach(sub => {
                    if (sub.isSelected) totalTime += (Number(sub.time) || 0);
                });
            });
            return totalTime > 0 ? this.totalLight / totalTime : 0;
        },
        // 総所要時間のフォーマット（◯分◯秒）
        formattedTotalTime() {
            let totalSeconds = 0;
            this.areas.forEach(main => {
                main.subAreas.forEach(sub => {
                    if (sub.isSelected) totalSeconds += (Number(sub.time) || 0);
                });
            });
            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;
            if (h > 0) return `${h}時間${m}分${s}秒`;
            return `${m}分${s}秒`;
        },
        // 火種からキャンドル本数への精錬計算
        calculated() {
            let light = this.totalLight;
            let candles = 0;
            let nextReq = 0;
            
            for (let i = 0; i < this.thresholds.length; i++) {
                if (light >= this.thresholds[i]) {
                    light -= this.thresholds[i];
                    candles++;
                } else {
                    nextReq = this.thresholds[i] - light;
                    break;
                }
            }
            return {
                candles: candles,
                nextReq: candles < this.thresholds.length ? `${nextReq} 火種` : 'MAX'
            };
        },
        // イベント終了日までの残日数
        eventDays() {
            const today = new Date();
            today.setHours(0,0,0,0);
            const target = new Date(this.targetDate);
            target.setHours(0,0,0,0);
            const diffTime = target - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays >= 0 ? diffDays : 0;
        },
        // 最終予想残キャンドル数
        projectedCandles() {
            const dailyGain = this.calculated.candles;
            return this.currentCandles + (dailyGain * this.eventDays) - this.plannedUsage;
        },
        visiblePlacedItems() {
            return this.placedItems;
        }
    },
    watch: {
        // 各データが変更されたらローカルストレージへ自動保存（リアルタイムセーブ）
        areas: { handler: 'saveToLocalStorage', deep: true },
        myRoutes: { handler: 'saveToLocalStorage', deep: true },
        visibleSections: { handler: 'saveToLocalStorage', deep: true },
        placedItems: { handler: 'saveToLocalStorage', deep: true },
        carryOverPercent: 'saveToLocalStorage',
        currentCandles: 'saveToLocalStorage',
        plannedUsage: 'saveToLocalStorage',
        targetDate: 'saveToLocalStorage',
        candleMemo: 'saveToLocalStorage',
        isDarkMode: 'applyTheme'
    },
    mounted() {
        this.loadFromLocalStorage();
        window.addEventListener('resize', () => {
            this.isWideScreen = window.innerWidth > 850;
        });
        this.applyTheme();
    },
    methods: {
        // ✨ ポップアップブロッカーに引っかからないトースト通知
        showToast(message) {
            const id = this.toastIdCounter++;
            this.toasts.push({ id, message });
            setTimeout(() => {
                this.toasts = this.toasts.filter(t => t.id !== id);
            }, 3000); // 3秒後に消滅
        },
        
        // 🌗 ダークモード切り替え制御
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        },
        applyTheme() {
            if (this.isDarkMode) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
            localStorage.setItem('candle_calc_darkMode', this.isDarkMode);
        },
        
        // 🔥 今日の状況リセット
        dailyReset() {
            this.areas.forEach(main => {
                main.subAreas.forEach(sub => {
                    sub.isSelected = false;
                });
            });
            this.showToast("🔄 精錬状況をリセットしました！");
        },
        
        // ⚡ 効率自動最適化アルゴリズム
        optimize() {
            let requiredLight = 0;
            const target = Math.min(this.targetCandlesForOptimization, this.thresholds.length);
            for (let i = 0; i < target; i++) {
                requiredLight += this.thresholds[i];
            }
            
            // 全サブエリアを1つの配列にフラット化し、効率の良い順に並び替え
            let allSubAreas = [];
            this.areas.forEach(main => {
                main.subAreas.forEach(sub => {
                    const eff = sub.time > 0 ? sub.light / sub.time : 0;
                    allSubAreas.push({ sub, eff });
                });
            });
            allSubAreas.sort((a, b) => b.eff - a.eff);
            
            // 一旦すべて未選択にする
            this.areas.forEach(main => main.subAreas.forEach(s => s.isSelected = false));
            
            // 目標火種に達するまで高効率エリアから順にチェックを入れる
            let currentLight = 0;
            for (let item of allSubAreas) {
                if (currentLight >= requiredLight) break;
                item.sub.isSelected = true;
                currentLight += item.sub.light;
            }
            
            this.showToast(`⚡ 目標 ${target}本 に向けた高効率エリアを自動選択しました！`);
        },
        
        // 🗺️ エリア管理ロジック
        isAllMainSelected(mainArea) {
            if (mainArea.subAreas.length === 0) return false;
            return mainArea.subAreas.every(sub => sub.isSelected);
        },
        toggleMainArea(mainArea) {
            const targetState = !this.isAllMainSelected(mainArea);
            mainArea.subAreas.forEach(sub => sub.isSelected = targetState);
        },
        getMainAreaStats(mainArea) {
            let light = 0;
            let time = 0;
            mainArea.subAreas.forEach(sub => {
                if (sub.isSelected) {
                    light += (Number(sub.light) || 0);
                    time += (Number(sub.time) || 0);
                }
            });
            return { light, eff: time > 0 ? light / time : 0 };
        },
        getEfficiency(subArea) {
            return subArea.time > 0 ? subArea.light / subArea.time : 0;
        },
        addMainArea() {
            const name = prompt("新規メインエリア名を入力してください:", "新エリア");
            if (name) {
                this.areas.push({
                    id: 'main_' + Date.now(),
                    name: name,
                    isExpanded: true,
                    subAreas: []
                });
                this.showToast(`🗺️ エリア「${name}」を追加しました`);
            }
        },
        addSubArea(mIdx) {
            this.areas[mIdx].subAreas.push({
                id: 'sub_' + Date.now(),
                name: '新しいサブエリア',
                isSelected: false,
                light: 100,
                time: 120
            });
        },
        moveMainArea(idx, direction) {
            const targetIdx = idx + direction;
            if (targetIdx >= 0 && targetIdx < this.areas.length) {
                const temp = this.areas[idx];
                this.areas.splice(idx, 1);
                this.areas.splice(targetIdx, 0, temp);
            }
        },
        moveSubArea(mIdx, sIdx, direction) {
            const subAreas = this.areas[mIdx].subAreas;
            const targetIdx = sIdx + direction;
            if (targetIdx >= 0 && targetIdx < subAreas.length) {
                const temp = subAreas[sIdx];
                subAreas.splice(sIdx, 1);
                subAreas.splice(targetIdx, 0, temp);
            }
        },
        requestDeleteMainArea(mIdx) {
            this.deleteModal = {
                show: true,
                type: 'main',
                mainIdx: mIdx,
                subIdx: null,
                name: this.areas[mIdx].name
            };
        },
        requestDeleteSubArea(mIdx, sIdx) {
            this.deleteModal = {
                show: true,
                type: 'sub',
                mainIdx: mIdx,
                subIdx: sIdx,
                name: this.areas[mIdx].subAreas[sIdx].name
            };
        },
        confirmDelete() {
            if (this.deleteModal.type === 'main') {
                this.areas.splice(this.deleteModal.mainIdx, 1);
            } else if (this.deleteModal.type === 'sub') {
                this.areas[this.deleteModal.mainIdx].subAreas.splice(this.deleteModal.subIdx, 1);
            }
            this.showToast(`🗑️ 「${this.deleteModal.name}」を削除しました`);
            this.cancelDelete();
        },
        cancelDelete() {
            this.deleteModal.show = false;
        },
        
        // 📍 マイルート管理ロジック
        saveCurrentRoute() {
            let selectedSubAreaIds = [];
            this.areas.forEach(main => {
                main.subAreas.forEach(sub => {
                    if (sub.isSelected) {
                        selectedSubAreaIds.push(sub.id);
                    }
                });
            });
            
            // ✨ 未選択ダイアログの代わりに自作トーストを呼び出し（ブロッカー完全回避！）
            if (selectedSubAreaIds.length === 0) {
                this.showToast("⚠️ エリアが一つも選択されていません！");
                return;
            }
            
            const routeName = prompt("このマイルートの名前を入力してください:", `マイカスタムルート (${this.myRoutes.length + 1})`);
            if (!routeName) return;
            
            this.myRoutes.push({
                id: 'route_' + Date.now(),
                name: routeName,
                isExpanded: false, // ✨ 初期状態は美しく折りたたむ
                memo: '',
                selectedIds: selectedSubAreaIds
            });
            
            this.showToast(`💾 ルート「${routeName}」を保存しました！`);
        },
        applyRoute(route) {
            this.areas.forEach(main => {
                main.subAreas.forEach(sub => {
                    sub.isSelected = route.selectedIds.includes(sub.id);
                });
            });
            this.showToast(`📍 ルート「${route.name}」を適用しました`);
        },
        deleteRoute(rIdx) {
            const name = this.myRoutes[rIdx].name;
            this.myRoutes.splice(rIdx, 1);
            this.showToast(`🗑️ ルート「${name}」を削除しました`);
        },
        // ✨ ルートに含まれるエリア名を構築してスモールテキストで表示
        getRouteSummaryText(route) {
            let names = [];
            this.areas.forEach(main => {
                let count = 0;
                main.subAreas.forEach(sub => {
                    if (route.selectedIds.includes(sub.id)) count++;
                });
                if (count > 0) {
                    names.push(`${main.name}(${count})`);
                }
            });
            return names.length > 0 ? names.join(' / ') : 'エリア選択なし';
        },
        getRouteStats(route) {
            let light = 0;
            let totalSeconds = 0;
            this.areas.forEach(main => {
                main.subAreas.forEach(sub => {
                    if (route.selectedIds.includes(sub.id)) {
                        light += (Number(sub.light) || 0);
                        totalSeconds += (Number(sub.time) || 0);
                    }
                });
            });
            const m = Math.floor(totalSeconds / 60);
            const s = totalSeconds % 60;
            return {
                light,
                timeStr: `${m}分${s}秒`,
                eff: totalSeconds > 0 ? light / totalSeconds : 0
            };
        },
        
        // 📦 シェア系創作物管理ロジック
        addItem() {
            this.placedItems.push({
                id: 'item_' + Date.now(),
                memo: '',
                placedDate: new Date().toISOString().split('T')[0],
                isSuspended: false
            });
        },
        removeItem(id) {
            this.placedItems = this.placedItems.filter(item => item.id !== id);
        },
        suspendItem(id) {
            const item = this.placedItems.find(item => item.id === id);
            if (item) item.isSuspended = true;
        },
        rePlaceItem(id) {
            const item = this.placedItems.find(item => item.id === id);
            if (item) {
                item.placedDate = new Date().toISOString().split('T')[0];
                item.isSuspended = false;
                this.showToast("♻️ アイテムを本日付で再設置しました！");
            }
        },
        getDaysLeft(placedDateStr) {
            const placed = new Date(placedDateStr);
            placed.setHours(0,0,0,0);
            const today = new Date();
            today.setHours(0,0,0,0);
            const expiry = new Date(placed.getTime() + 14 * 24 * 60 * 60 * 1000);
            const diffTime = expiry - today;
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        },
        getExpiryDateString(placedDateStr) {
            const placed = new Date(placedDateStr);
            const expiry = new Date(placed.getTime() + 14 * 24 * 60 * 60 * 1000);
            return `${expiry.getMonth() + 1}/${expiry.getDate()}`;
        },
        formatDateForInput(dateStr) {
            return dateStr;
        },
        updateItemDate(id, newDate) {
            const item = this.placedItems.find(item => item.id === id);
            if (item && newDate) item.placedDate = newDate;
        },
        
        // 🧙‍♂️ データの共有（復活の呪文エンコード・デコード）
        generateSpell() {
            const dataToPack = {
                areas: this.areas,
                myRoutes: this.myRoutes,
                visibleSections: this.visibleSections,
                placedItems: this.placedItems,
                carryOverPercent: this.carryOverPercent,
                currentCandles: this.currentCandles,
                plannedUsage: this.plannedUsage,
                targetDate: this.targetDate,
                candleMemo: this.candleMemo
            };
            try {
                const jsonStr = JSON.stringify(dataToPack);
                this.generatedSpell = btoa(unescape(encodeURIComponent(jsonStr)));
                this.showToast("🔮 復活の呪文を生成しました！コピーして共有できます");
            } catch(e) {
                this.showToast("❌ 呪文の生成に失敗しました");
            }
        },
        requestApplySpell() {
            if (!this.inputSpell.trim()) {
                this.showToast("⚠️ 呪文を入力してください");
                return;
            }
            this.isConfirming = true;
        },
        confirmApplySpell() {
            try {
                const jsonStr = decodeURIComponent(escape(atob(this.inputSpell.trim())));
                const parsed = JSON.parse(jsonStr);
                
                if (parsed.areas) this.areas = parsed.areas;
                if (parsed.myRoutes) this.myRoutes = parsed.myRoutes;
                if (parsed.visibleSections) this.visibleSections = parsed.visibleSections;
                if (parsed.placedItems) this.placedItems = parsed.placedItems;
                if (parsed.carryOverPercent !== undefined) this.carryOverPercent = parsed.carryOverPercent;
                if (parsed.currentCandles !== undefined) this.currentCandles = parsed.currentCandles;
                if (parsed.plannedUsage !== undefined) this.plannedUsage = parsed.plannedUsage;
                if (parsed.targetDate) this.targetDate = parsed.targetDate;
                if (parsed.candleMemo !== undefined) this.candleMemo = parsed.candleMemo;
                
                this.isConfirming = false;
                this.inputSpell = '';
                this.showToast("✨ パルプンテ！データが正常に復元されました！");
            } catch(e) {
                this.isConfirming = false;
                this.showToast("❌ 呪文が間違っているか、データが壊れています");
            }
        },
        
        // 💾 ローカルストレージ連携
        saveToLocalStorage() {
            localStorage.setItem('candle_calc_areas', JSON.stringify(this.areas));
            localStorage.setItem('candle_calc_myRoutes', JSON.stringify(this.myRoutes));
            localStorage.setItem('candle_calc_visibleSections', JSON.stringify(this.visibleSections));
            localStorage.setItem('candle_calc_placedItems', JSON.stringify(this.placedItems));
            localStorage.setItem('candle_calc_carryOver', this.carryOverPercent);
            localStorage.setItem('candle_calc_current', this.currentCandles);
            localStorage.setItem('candle_calc_planned', this.plannedUsage);
            localStorage.setItem('candle_calc_targetDate', this.targetDate);
            localStorage.setItem('candle_calc_memo', this.candleMemo);
        },
        loadFromLocalStorage() {
            if (localStorage.getItem('candle_calc_areas')) {
                this.areas = JSON.parse(localStorage.getItem('candle_calc_areas'));
            }
            if (localStorage.getItem('candle_calc_myRoutes')) {
                this.myRoutes = JSON.parse(localStorage.getItem('candle_calc_myRoutes'));
            }
            if (localStorage.getItem('candle_calc_visibleSections')) {
                this.visibleSections = JSON.parse(localStorage.getItem('candle_calc_visibleSections'));
            }
            if (localStorage.getItem('candle_calc_placedItems')) {
                this.placedItems = JSON.parse(localStorage.getItem('candle_calc_placedItems'));
            }
            if (localStorage.getItem('candle_calc_carryOver')) {
                this.carryOverPercent = Number(localStorage.getItem('candle_calc_carryOver'));
            }
            if (localStorage.getItem('candle_calc_current')) {
                this.currentCandles = Number(localStorage.getItem('candle_calc_current'));
            }
            if (localStorage.getItem('candle_calc_planned')) {
                this.plannedUsage = Number(localStorage.getItem('candle_calc_planned'));
            }
            if (localStorage.getItem('candle_calc_targetDate')) {
                this.targetDate = localStorage.getItem('candle_calc_targetDate');
            }
            if (localStorage.getItem('candle_calc_memo')) {
                this.candleMemo = localStorage.getItem('candle_calc_memo');
            }
            if (localStorage.getItem('candle_calc_darkMode')) {
                this.isDarkMode = localStorage.getItem('candle_calc_darkMode') === 'true';
            }
        }
    }
}).mount('#app');
