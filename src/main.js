import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Importa o router que criamos

const app = createApp(App)
app.use(router) // Ativa o router
app.mount('#app')