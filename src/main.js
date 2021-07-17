import { registerApplication, start } from 'single-spa'
import { createStore } from './store'

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
