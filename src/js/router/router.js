import Vue    from 'vue'
import Router from 'vue-router'

import Home    from './../../components/Home.vue'
import Item    from './../../components/Item.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/item',
            name: 'item',
            props: true,
            component: Item
        },
    ],
})