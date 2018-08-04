import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CardList from './views/CardList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cardlist',
      name: 'cardlist',
      component: CardList,
    },
  ],
});
