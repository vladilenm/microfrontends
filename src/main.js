import { registerApplication, start } from 'single-spa'
import { createStore } from './store/index.js'

window.store = createStore()

registerApplication(
  'vue',
  () => import('./vue/vue.app.js'),
  () => location.pathname.startsWith('/')
)

registerApplication(
  'react',
  () => import('./react/react.app.js'),
  () => location.pathname.startsWith('/')
)

start()
