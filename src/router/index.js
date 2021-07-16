import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/no-extraneous-dependencies
// import generatedRoutes from 'vue-auto-routing';

Vue.use(VueRouter);

/*const routes = generatedRoutes.map((route) => {
  route.path = route.path.replace(/Index/, '');
  return route;
});*/

const routes = [
  { path: '/roadstest/:question', component: () => import('@/pages/HalfExample.vue') },
  { path: '/result/:question', component: () => import('@/pages/ResultTest.vue') },
  { path: '/', component: () => import('@/pages/Index.vue') },
];


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL.replace('/dist', ''),
  routes,
});
