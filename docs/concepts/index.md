# 2. 核心原理解析

要掌握弱點掃描工具，必須先瞭解 **中間人代理 (Proxy)** 與 **TLS/SSL 憑證解密** 的技術機制。

---

## 1. 中間人代理 (Man-in-the-Middle Proxy)

弱點掃描工具會在瀏覽器與目標伺服器之間建立一個本地代理伺服器（預設 Port 為 `8080`）：

1. **攔截 (Intercept)**：瀏覽器發送的 HTTP Request 會先到達 Proxy。
2. **檢視與修改**：測試人員能在 Proxy 中即時篡改參數（如 Cookies, Body, Headers）。
3. **轉發 (Forward)**：修改後的封包被發送至 Target Server。
4. **分析 Response**：回應資料傳回 Proxy，工具會檢測回應中是否包含安全漏洞。

---

## 2. HTTPS 憑證解密機制

因為 HTTPS 流量經過 TLS 加密，若無處理，Proxy 僅能看到加密後的密文。

* **解密原理**：Proxy 工具會動態生成「偽造的目標網站 TLS 憑證」。
* **根憑證安裝**：測試者必須將工具的 **Root CA 憑證** 匯入瀏覽器的「受信任的根證書頒發機構」中，瀏覽器才會信任該代理並解密內容。

---

## 3. 被動掃描 vs 主動掃描

* **被動掃描 (Passive Scanning)**：
  * **動作**：只「監聽」經過的流量，不發送額外封包。
  * **檢測**：標頭安全設定 (CSP, X-Frame-Options)、Cookie 未設 `HttpOnly` / `Secure`。
* **主動掃描 (Active Scanning)**：
  * **動作**：主動向目標注入各種測試攻擊載荷 (Payloads)。
  * **檢測**：SQL 注入 (SQLi)、跨站腳本 (XSS)、命令注入 (Command Injection)。
