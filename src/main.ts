import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import './assets/main.css'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)

app.mount('#app')
