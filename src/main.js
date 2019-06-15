import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './utils/flexble'
import './static/scss/common.scss'
import './static/font/iconfont.css'
import store from './store/index'
import Head from './components/header.vue'
import alertBox from './components/alertBox.vue'
Vue.component('Header', Head)
Vue.component('alertBox', alertBox)
import {
    DatePicker,
    TimePicker
} from 'element-ui'
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.component('Head', '@/components/header.vue')
new Vue({
    el: '#app',
    router,
    store,
    render: (createElement) => createElement(App)
})


