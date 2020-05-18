import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
    const home=()=> import('../views/home');
const cart=()=> import('../views/cart');
const profile=()=> import('../views/profile');
const category=()=> import('../views/category');
  const routes = [
      {
          path:'',
          redirect:'/home'
      },
      {
          path:'/cart',
          component: cart,
      },
      {
          path:'/profile',
          component: profile,
      },
      {
          path:'/category',
          component:category,
      },
      {
          path:'/home',
          component: home,
      }
      ]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
