## 使用遠端

此擴充功能支援[遠端開發](https://code.visualstudio.com/docs/remote/remote-overview)情境，您可依需求選擇使用方式

### 我會存取遠端，但大部分工作在本機進行

這是_一般_情境，因此不需要任何特殊操作，擴充功能即可運作，開箱即用。

在本機安裝時，您可以將任何 Container、SSH、WSL 或 Codespaces 專案儲存為我的最愛。每一個都有各自的圖示以便辨識，選取後 VS Code 會自動開啟該遠端。

_直接就能用_

### 但如果我大部分工作都在遠端進行

如果您通常連線到遠端（例如 SSH/WSL），並希望在該遠端儲存我的最愛專案，或能自動偵測位於該遠端的存放庫，就必須啟用／安裝擴充功能，使其在遠端運作。

您只需將以下內容加入「使用者設定」。

```json
    "remote.extensionKind": {
        "alefragnani.project-manager": [
            "workspace"
        ]
    },
```

> 更多詳細資訊請參閱 [VS Code 官方說明](https://code.visualstudio.com/docs/remote/containers#_advanced-forcing-an-extension-to-run-locally-or-remotely)
