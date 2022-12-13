import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

setTimeout(() => {
    app.mount('#app')
}, 100)

