import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import chat from '@/views/chat'
import close from '@/components/close'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/chat',
            name: 'chat',
            component: chat
        },
        {
            path: '/close',
            name: 'close',
            component: close
        },
    ]
})
