<template>
  <div class="teacher-container">
    <div v-if="!isAuthenticated" class="login-box">
      <h3>🔒 教師權限驗證</h3>
      <p>請輸入教師專用授權密碼以觀看解答與實作指南：</p>
      <div class="input-group">
        <input 
          type="password" 
          v-model="password" 
          placeholder="請輸入密碼 (預設: teacher123)" 
          @keyup.enter="verifyPassword"
        />
        <button @click="verifyPassword">解鎖內容</button>
      </div>
      <p v-if="error" class="error">❌ 密碼錯誤，請重新輸入！</p>
    </div>

    <div v-else class="content-box">
      <div class="success-badge">✅ 教師身份已驗證成功</div>

      <h2>一、 測驗題目解答與詳細解析</h2>
      
      <div class="answer-card">
        <h4>第 1 題解答：(B) 解密 TLS 加密流量以進行中間人分析</h4>
        <p><strong>觀念解析：</strong>HTTPS 採用 TLS 進行端到端加密。Proxy 作為中間人，會動態替目標網站簽發憑證。若瀏覽器未信任 Proxy 的 Root CA，連線將被視為潛在攻擊並強制阻斷。</p>
      </div>

      <div class="answer-card">
        <h4>第 2 題解答：(B) OWASP ZAP 為免費開源軟體，且具備完整的主動掃描...</h4>
        <p><strong>觀念解析：</strong>Burp Suite 社區版免費但閹割了主動掃描器 (Burp Scanner) 且 Intruder 爆破功能有限速；ZAP 則是完全免費且無限制的主動掃描工具。</p>
      </div>

      <div class="answer-card">
        <h4>第 3 題解答：(B) 只分析現有流量而不發送額外請求...</h4>
        <p><strong>觀念解析：</strong>被動掃描只監聽經過 Proxy 的標頭與回應（如檢查 Cookie 旗標、HTTP Security Headers），不會主動觸發安全警報或影響系統運行。</p>
      </div>

      <h2>二、 實作演練標準作業 Writeup (OWASP Juice Shop)</h2>

      <h3>1. SQL 注入繞過登入驗證</h3>
      <ul>
        <li><strong>攔截位置：</strong>登入 POST 請求 `/api/Users/login`。</li>
        <li><strong>Payload：</strong>修改 `email` 欄位為 `' OR 1=1 --`。</li>
        <li><strong>原理：</strong>利用 `'` 切斷原始 SQL 語句，並透過 `OR 1=1` 使查詢恆真，`--` 註解後續驗證，成功獲得系統管理員權限。</li>
      </ul>

      <h3>2. DOM-Based XSS 跨站腳本注入</h3>
      <ul>
        <li><strong>測試位置：</strong>Juice Shop 主頁搜尋欄位。</li>
        <li><strong>Payload：</strong>`<iframe src="javascript:alert(1)">`。</li>
        <li><strong>原理：</strong>搜尋欄未對使用者輸入進行適當轉義，導致惡意腳本直接載入並於 DOM 中執行。</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const password = ref('');
const isAuthenticated = ref(false);
const error = ref(false);

const verifyPassword = () => {
  if (password.value === 'teacher123') {
    isAuthenticated.value = true;
    error.value = false;
  } else {
    error.value = true;
  }
};
</script>

<style scoped>
.teacher-container { margin-top: 20px; }
.login-box { border: 2px dashed #3eaf7c; padding: 30px; border-radius: 8px; background: #f8fafc; text-align: center; }
.input-group { margin-top: 15px; }
.login-box input { padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px; width: 250px; margin-right: 10px; }
.login-box button { padding: 10px 20px; background: #3eaf7c; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
.error { color: #ef4444; margin-top: 10px; font-weight: bold; }
.success-badge { background: #dcfce7; border: 1px solid #86efac; padding: 10px; color: #166534; border-radius: 6px; font-weight: bold; margin-bottom: 20px; }
.answer-card { background: #f1f5f9; padding: 15px; border-left: 5px solid #3eaf7c; margin-bottom: 15px; border-radius: 0 6px 6px 0; }
</style>
