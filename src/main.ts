import './assets/main.css'
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia)
app.use(router)
app.use(PrimeVue)

app.mount('#app')