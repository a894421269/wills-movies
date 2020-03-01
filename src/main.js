import Vue from 'vue'
import store from './store/store'
import Fly from 'flyio/dist/npm/wx'
import App from './app.vue'

App.mpType = 'app'
//把store放在原型中，让每个实例都可以使用Vuex
Vue.prototype.$store = store

let fly = new Fly
Vue.prototype.$fly = fly

const app = new Vue(app)
//挂载整个应用
app.$mount()