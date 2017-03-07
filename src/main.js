// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll';  // 引入滑动模块
import VueLazyload from 'vue-lazyload';  // 引入图片懒加载模块
import Qs from 'qs'


Vue.config.productionTip = false;

Vue.use(infiniteScroll);
Vue.use(VueLazyload, {
    error: require('./assets/404.png'),
    loading: require('./assets/loading.gif'),
    attempt: 1
  }
);

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http=axios;
Vue.prototype.Qs=Qs;   //axios在post的时候参数有可能需要处理一下


router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta      //判断路由meta: { auth: false },就是不验证登录状态，默认是要验证的
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
});

global.sessiontime=null;

router.afterEach(route => {
  //用户登录的情况下需要设置一个回话过期时间
  if(Boolean(store.state.user.id)){
      clearTimeout(sessiontime)
      sessiontime=setTimeout(()=>{
       store.state.user={};
      },1800000)//30分钟不操作就会删除会话
  }

});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
