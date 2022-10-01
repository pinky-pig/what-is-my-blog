import { createApp } from 'vue'
import './styles/theme.css'
import './styles/fonts.css'
import './styles/paper.css'
import App from './App.vue'
import 'uno.css'
import { setupStore } from './store'
import { setupRouter } from './router'
import { createHead } from '@vueuse/head' 
const head = createHead() 

async function setupApp() {
  const app = createApp(App)
  await setupRouter(app)
  setupStore(app)

  app.use(head) 

  app.mount('#app')
}
setupApp()

