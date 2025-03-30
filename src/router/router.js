import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router'

import Homepage from '../views/Featured.vue'
import First from '../views/1_250.vue'
import Second from '../views/251_500.vue'
import Third from '../views/501_750.vue'
import Fourth from '../views/751_1000.vue'
import Fifth from '../views/1001_1250.vue'
import Newest from '../views/1251_1500.vue'
import Nsfw from '../views/Nsfw.vue'
import Donators from '../views/Donators.vue'
import Contact from '../views/Info.vue'
import Updates from '../views/Updates.vue'


const routes = [
    { path: '/', component: Homepage },
    { path: '/page/01', component: First },
    { path: '/page/02', component: Second },
    { path: '/page/03', component: Third },
    { path: '/page/04', component: Fourth },
    { path: '/page/05', component: Fifth },
    { path: '/page/06', component: Newest },
    { path: '/page/nsfw', component: Nsfw },
    { path: '/donators', component: Donators },
    { path: '/contact_info', component: Contact },
    { path: '/updates', component: Updates },
    // Slight compatibility with older links.
    { path: '/page01', component: First },
    { path: '/set2', component: Second },
    { path: '/501750', component: Third },
    { path: '/7511000', component: Fourth },
    { path: '/10011250', component: Fifth },
    { path: '/newest-hanas-12511500', component: Newest },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
