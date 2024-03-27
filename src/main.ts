import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import NavBarView from '@/views/Layout/components/NavBarView.vue';
import CarouselView from '@/views/Home/components/CarouselView.vue'
import TabsView from '@/views/Home/components/TabsView.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.component('NavBarView',NavBarView)
app.component('CarouselView',CarouselView)
app.component('TabsView',TabsView)

app.mount('#app')
