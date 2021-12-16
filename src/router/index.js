//配置路由信息
import Vue from 'vue'
import VueRouter from "vue-router";

// import Home from "@/components/Home.vue";
// import About from "@/components/About.vue";
// import User from "@/components/User.vue";

//路由懒加载写法。路由通常会定义很多页面，项目打包构建时这些页面被打包在一个js文件里，会造成这个js文件很大
//如果一次性从服务器请求下来这些页面，会花费一些时间，甚至用户界面会出现短暂的空白
//把不同路由对应的组件分割成不同的代码块，路由访问的时候才加载对应的组件，这样就会更加高效。
const Home = () => import('../components/Home');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile = () => import('../components/Profile');

//1、通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2、创建路由对象
const routes = [
  {
    path: '',//这里加不加/都一样
    redirect: '/home',//默认重定向到首页
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      console.log('about beforeEnter');
      next();
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]
const router = new VueRouter({
  //配置路由和组件之间的映射关系
  mode: 'history',
  routes,//这里参数名一定是routes，而不能写成其它的，比如routers
  linkActiveClass: 'active',//这个指定router-link被选中后给它加的类名，可以在css中编写这个类，实现点击某个router-link后的样式
  //也可以在router-link标签中添加active-class="active"这个属性来实现

})

//全局导航守卫
//前置守卫(guard)
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

//后置钩子(hook)
router.afterEach((to, from) => {
  console.log('afterEach');
});

//3、将router对象传入到Vue实例中
export default router