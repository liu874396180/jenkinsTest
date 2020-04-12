// 这里面负责写路由映射，便于管理
// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



// 创建路由实例并配置路由映射
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  routes: [{
      path: '/',
      components: require('../components/one.vue'), // 主入口
      redirect: "one",
      children: [{
          path: 'one',
          components: require('../components/one.vue')
        },
        {
          path: 'two',
          components: require('../components/two.vue')
        },
        {
          path: 'three',
          components: require('../components/three.vue')
        },
        {
          path: 'four',
          components: require('../components/four.vue')
        }
      ]
    },
    {
      path: '/login',
      components: require('../components/login.vue')
    },
    {
      path: '/about',
      components: require('../components/about2.vue')
    },
    {
      path: '/vant',
      components: require('../components/vantTest.vue')
    },
    {
      path: '/dialog',
      components: require('../page/dialog.vue')
    },
    
    {
      path: '*',
      redirect: '/login'
    }
  ]
})


// 输出router
export default router;
