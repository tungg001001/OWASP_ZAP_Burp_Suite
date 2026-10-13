# 1. 工具介紹與比較

在 Web 應用程式安全測試領域，**OWASP ZAP (Zed Attack Proxy)** 與 **Burp Suite** 是目前最主流的兩款安全工具。

---

## 工具核心定位

* **OWASP ZAP**
  * 完全免費且開源（由 OWASP 維護）。
  * 適合 DevSecOps、CI/CD 自動化整合，並開放完整的主動與被動掃描能力。
* **Burp Suite**
  * 由 PortSwigger 開發，手動滲透測試 (Penetration Testing) 的業界標準。
  * 社區版 (Community) 免費但功能受限；專業版 (Professional) 需付費。

---

## 功能詳細對照表

| 比較項目 | OWASP ZAP | Burp Suite (Community / Pro) |
| :--- | :--- | :--- |
| **費用與授權** | 完全免費 / 開源 (Apache 2.0) | 社區版免費 / 專業版約 $449 USD/年 |
| **主動弱點掃描** | 免費開放 (Active Scan) | 社區版**無**；專業版具備 Burp Scanner |
| **自動化爆破速度** | 無速度限制 | 社區版 Intruder 具備速率限制 (Throttling) |
| **適用場景** | 自動化掃描、開發團隊自測 | 資安顧問、滲透測試人員手動稽核 |
| **擴充生態** | ZAP Add-ons | BApp Store (部分進階套件限專業版) |
