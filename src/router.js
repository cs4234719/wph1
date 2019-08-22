import Vue from 'vue';
import Router from 'vue-router';
const idx = () => import("./views/idx/idx");
const sort = () => import("./views/sort/sort");
const shoppingcar = () => import("./views/shoppingcar/shoppingcar");
const my = () => import("./views/my/my")



Vue.use(Router)

export default new Router({
  routes: [
    { path: "/", redirect: "/idx" },
    { path: "/idx", component: idx },
    { path: "/sort", component: sort },
    { path: "/shoppingcar", component: shoppingcar },
    { path: "/my", component: my }
  ]
})
