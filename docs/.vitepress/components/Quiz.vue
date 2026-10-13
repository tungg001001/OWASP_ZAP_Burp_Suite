<template>
  <div class="quiz-container">
    <div v-for="(q, index) in questions" :key="index" class="quiz-card">
      <h3>{{ index + 1 }}. {{ q.question }}</h3>
      <div v-for="(option, optIdx) in q.options" :key="optIdx" class="option">
        <label>
          <input 
            type="radio" 
            :name="'q-' + index" 
            :value="optIdx" 
            v-model="userAnswers[index]"
          />
          {{ option }}
        </label>
      </div>
      <div v-if="submitted" :class="['result', userAnswers[index] === q.answer ? 'correct' : 'wrong']">
        {{ userAnswers[index] === q.answer ? '✅ 正確！' : '❌ 錯誤，請參考答案解析。' }}
      </div>
    </div>
    <button @click="submitQuiz" class="submit-btn">提交測驗</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const questions = [
  {
    question: "為什麼在攔截 HTTPS 流量時需要在瀏覽器中安裝 Proxy 工具的 CA 根憑證？",
    options: [
      "為了提升網路連線速度",
      "解密 TLS 加密流量以進行中間人分析 (MitM)",
      "防止目標伺服器封鎖測試者的 IP",
      "繞過前端的 Captcha 驗證碼"
    ],
    answer: 1
  },
  {
    question: "下列關於 OWASP ZAP 與 Burp Suite 社區版 (Community Edition) 的比較，何者正確？",
    options: [
      "Burp Suite 社區版包含完全自動化的主動弱點掃描器",
      "OWASP ZAP 為免費開源軟體，且具備完整的主動掃描與無速度限制功能",
      "兩者皆無法用於手動封包修改與重放",
      "OWASP ZAP 無法安裝任何擴充套件"
    ],
    answer: 1
  },
  {
    question: "「被動掃描 (Passive Scanning)」的主要特點是什麼？",
    options: [
      "會對目標發送大量攻擊 Payload 以嘗試找出漏洞",
      "只分析現有流量而不發送額外請求，對目標系統完全無害",
      "能自動修復伺服器的安全漏洞",
      "需要取得伺服器的 Root 權限才能執行"
    ],
    answer: 1
  }
];

const userAnswers = ref([]);
const submitted = ref(false);

const submitQuiz = () => {
  submitted.value = true;
};
</script>

<style scoped>
.quiz-container { margin-top: 20px; }
.quiz-card { border: 1px solid #e2e8f0; padding: 18px; margin-bottom: 16px; border-radius: 8px; background: #fafafa; }
.option { margin: 8px 0; }
.submit-btn { background: #3eaf7c; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: bold; }
.submit-btn:hover { background: #339064; }
.result { margin-top: 10px; font-weight: bold; }
.correct { color: #42b983; }
.wrong { color: #f56c6c; }
</style>
