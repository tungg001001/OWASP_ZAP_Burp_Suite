import DefaultTheme from 'vitepress/theme'
import Quiz from '../components/Quiz.vue'
import TeacherHub from '../components/TeacherHub.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 註冊全局 Vue 組件，方便在 Markdown 中呼叫
    app.component('Quiz', Quiz)
    app.component('TeacherHub', TeacherHub)
  }
}
