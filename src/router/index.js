import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import createmessage from '../views/createmessage.vue';
import ViewMessage from '../views/ViewMessage.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
      path: '/createmessage',
      name: 'createmessage',
      component: createmessage
  },
  {
    path: '/ViewMessage',
    name: 'ViewMessage',
    component: ViewMessage
},
 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
