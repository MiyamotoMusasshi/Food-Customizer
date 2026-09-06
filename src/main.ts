import './assets/reset.css'

import { createApp } from 'vue'
import Customize from './pages/Customize.vue'
import App from './App.vue'
import router from './index.ts'

createApp(App).use(router).mount('#app')
