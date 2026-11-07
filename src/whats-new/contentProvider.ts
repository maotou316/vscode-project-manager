/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { ChangeLogItem, ChangeLogKind, ContentProvider, Header, Image, IssueKind, SupportChannel, SocialMediaProvider } from "../../vscode-whats-new/src/ContentProvider";

export class ProjectManagerContentProvider implements ContentProvider {

    public provideHeader(logoUrl: string): Header {
        return <Header> {logo: <Image> {src: logoUrl, height: 50, width: 50}, 
            message: `<b>Project Manager</b> 讓您輕鬆存取各個<b>專案</b>，
            無論它們位於何處。<i>再也不會錯過重要的專案</i>。
            <br><br>您可以自行定義<b>專案</b>（也稱為<b>我的最愛</b>），或選擇自動偵測
            <b>Git</b>、<b>Mercurial</b> 或 <b>SVN</b> 存放庫、<b>VSCode</b>
            資料夾，或<b>任何</b>其他資料夾。`};
    }

    public provideChangeLog(): ChangeLogItem[] {
        const changeLog: ChangeLogItem[] = [];

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "13.1.4", releaseDate: "2026 年 11 月" } });
        changeLog.push({ kind: ChangeLogKind.NEW, detail: "在「我的最愛」的標籤檢視中，可把專案拖放到標籤上來加入該標籤" });
        changeLog.push({ kind: ChangeLogKind.CHANGED, detail: "新功能頁面、說明與介面文字全面改用台灣繁體中文" });
        changeLog.push({ kind: ChangeLogKind.FIXED, detail: "修正中文介面下，手動編輯專案清單的按鈕沒有反應的問題" });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "13.1.0", releaseDate: "2026 年 3 月" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "自動偵測 VS Code 工作區",
                id: 334,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "儲存專案時可新增標籤",
                id: 551,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "標籤檢視中的標籤可摺疊",
                id: 867,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "在標籤檢視中隱藏沒有標籤的專案",
                id: 874,
                kind: IssueKind.PR,
                kudos: "@AlanQtten"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "自動偵測支援符號連結",
                id: 655,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "<code>baseFolders</code> 設定支援 glob 模式",
                id: 309,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "自動偵測的專案排除基底資料夾",
                id: 828,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.CHANGED,
            detail: {
                message: "在 README 加入鍵盤導覽快速鍵說明",
                id: 839,
                kind: IssueKind.PR,
                kudos: "@zobweyt"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.CHANGED,
            detail: {
                message: "更新翻譯／在地化參考資料",
                id: 854,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "路徑使用 <code>~</code> 或 <code>$HOME</code> 時，側邊欄未醒目提示目前專案",
                id: 892,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "<code>baseFolders</code> 設定的路徑含 <code>~</code> 時無法運作",
                id: 663,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({ kind: ChangeLogKind.INTERNAL, detail: { message: "安全性警示：js-yaml", id: 850, kind: IssueKind.PR, kudos: "dependabot" } });
        changeLog.push({ kind: ChangeLogKind.INTERNAL, detail: { message: "安全性警示：webpack", id: 895, kind: IssueKind.PR, kudos: "dependabot" } });
        changeLog.push({ kind: ChangeLogKind.INTERNAL, detail: { message: "安全性警示：minimatch", id: 900, kind: IssueKind.PR, kudos: "dependabot" } });
        changeLog.push({ kind: ChangeLogKind.INTERNAL, detail: { message: "安全性警示：cross-spawn", id: 904, kind: IssueKind.PR, kudos: "dependabot" } });
        changeLog.push({ kind: ChangeLogKind.INTERNAL, detail: { message: "安全性警示：minimatch", id: 906, kind: IssueKind.PR, kudos: "dependabot" } });
        changeLog.push({ kind: ChangeLogKind.INTERNAL, detail: { message: "安全性警示：flatted", id: 911, kind: IssueKind.PR, kudos: "dependabot" } });
        changeLog.push({ kind: ChangeLogKind.INTERNAL, detail: { message: "安全性警示：picomatch", id: 914, kind: IssueKind.PR, kudos: "dependabot" } });
        changeLog.push({ kind: ChangeLogKind.INTERNAL, detail: { message: "安全性警示：brace-expansion", id: 915, kind: IssueKind.PR, kudos: "dependabot" } });
        changeLog.push({ kind: ChangeLogKind.INTERNAL, detail: { message: "將 Node.js 升級至 v22", id: 910, kind: IssueKind.PR } });
        changeLog.push({ kind: ChangeLogKind.INTERNAL, detail: { message: "將 <code>vscode-whats-new</code> 升級至 2026 年 3 月版本", id: 913, kind: IssueKind.PR } });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "13.0.0", releaseDate: "2025 年 11 月" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "再次完全開放原始碼",
                id: 498,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "在側邊欄醒目提示目前專案",
                id: 299,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "歡迎檢視支援在地化",
                id: 938,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "<code>package.json</code> 格式錯誤時支援強制回應訊息",
                id: 531,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "專案支援<b>設定檔</b>",
                id: 281,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "<b>fr</b> 翻譯",
                id: 735,
                kind: IssueKind.PR,
                kudos: "@damsfx"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "<b>zh-tw</b> 與 <b>zh-cn</b> 翻譯",
                id: 734,
                kind: IssueKind.PR,
                kudos: "@Chakyiu"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.CHANGED,
            detail: {
                message: "更新 <code>projectsLocation</code> 設定的說明文件",
                id: 764,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.CHANGED,
            detail: {
                message: "<b>ru</b> 翻譯",
                id: 841,
                kind: IssueKind.PR
            }
        });
        changeLog.push({
            kind: ChangeLogKind.CHANGED,
            detail: {
                message: "<b>uk</b> 翻譯",
                id: 842,
                kind: IssueKind.PR
            }
        });
        changeLog.push({
            kind: ChangeLogKind.CHANGED,
            detail: {
                message: "<b>zh-cn</b> 翻譯",
                id: 771,
                kind: IssueKind.PR,
                kudos: "@Mister-Hope"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "依標籤篩選時未顯示我的最愛",
                id: 557,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "沒有遠端時也遵循 <code>removeCurrentProjectFromList</code> 設定",
                id: 381,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "修正細微的文法問題",
                id: 795,
                kind: IssueKind.PR,
                kudos: "@dphelan"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "修正列舉 <code>confirmSwitchOnActiveWindow</code> 的說明",
                id: 797,
                kind: IssueKind.PR,
                kudos: "@salim-b"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "安全性警示：brace-expansion",
                id: 832,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "安全性警示：serialize-javascript",
                id: 796,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "安全性警示：webpack",
                id: 761,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "安全性警示：braces",
                id: 746,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });


        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "12.8.0", releaseDate: "2024 年 3 月" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "已發佈至 Open VSX",
                id: 458,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "快速入門／逐步導覽",
                id: 517,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "<b>cs</b> 翻譯",
                id: 720,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.CHANGED,
            detail: {
                message: "使用 Gitpod 時不顯示新功能頁面",
                id: 724,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.CHANGED,
            detail: {
                message: "安裝較低版本時不顯示新功能頁面",
                id: 724,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "<b>baseFolders</b> 含符號連結時擴充功能啟用失敗",
                id: 657,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "專案使用相對路徑時狀態列消失",
                id: 650,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "未開啟資料夾時嘗試儲存專案",
                id: 683,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "json 無效時的擴充功能啟用問題",
                id: 687,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "新功能頁面在網頁版中損壞",
                id: 677,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "在地化（l10n）支援",
                id: 654,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "支援隱含啟用事件（Implicit Activation Events）API",
                id: 659,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "安全性警示：word-wrap",
                id: 695,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "安全性警示：webpack",
                id: 680,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "安全性警示：terser",
                id: 624,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "12.7.0", releaseDate: "2022 年 8 月" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "提升<b>清單</b>效能",
                id: 628,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "在活動列中篩選專案",
                id: 213,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "重新命名專案時接受大小寫變更",
                id: 622,
                kind: IssueKind.PR,
                kudos: "@gdh1995"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "Linux 中<b>檔案管理員</b>的說明有誤",
                id: 618,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "快取設為 false 時專案未被自動偵測",
                id: 448,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "改善擴充功能啟動速度",
                id: 625,
                kind: IssueKind.Issue
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "12.6.1", releaseDate: "2022 年 6 月" } });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: "新增 <b>GitHub Sponsors</b> 支援"
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "12.6.0", releaseDate: "2022 年 5 月" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "新增設定，可決定在同一視窗切換專案時是否需要確認",
                id: 346,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "專案清單選擇區新增<b>在新視窗中開啟</b>按鈕",
                id: 570,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "支援設定分類（Settings Categories）API",
                id: 554,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "修正 <b>openInCurrenWindowIfEmpty</b> 設定的錯字",
                id: 587,
                kind: IssueKind.PR,
                kudos: "@apettenati"
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "12.5.0", releaseDate: "2022 年 1 月" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "新增設定，讓 baseFolder 設定支援符號連結",
                id: 583,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "支援新的 MacOS 檔案功能表 API",
                id: 555,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "支援新的 createStatusBarItem API",
                id: 521,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.CHANGED,
            detail: {
                message: "移除 watchFile 間隔",
                id: 575,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: "<b>Duckly</b> 成為贊助者"
        });

        return changeLog;
    }

    public provideSupportChannels(): SupportChannel[] {
        const supportChannels: SupportChannel[] = [];
        supportChannels.push({
            title: "在 GitHub 上成為贊助者",
            link: "https://www.github.com/sponsors/alefragnani",
            message: "成為贊助者"
        });
        supportChannels.push({
            title: "透過 PayPal 捐款",
            link: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EP57F3B6FXKTU&lc=US&item_name=Alessandro%20Fragnani&item_number=vscode%20extensions&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted",
            message: "透過 PayPal 捐款"
        });
        return supportChannels;
    }
}

export class ProjectManagerSocialMediaProvider implements SocialMediaProvider {
    public provideSocialMedias() {
        return [{
            title: "在 Twitter 上追蹤我",
            link: "https://www.twitter.com/alefragnani"
        }];
    }
}