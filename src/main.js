import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div')
root.id = 'app'
document.body.appendChild(root)

new Vue({
  render: h => h(App)
}).$mount('#app')

