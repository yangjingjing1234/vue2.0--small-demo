import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

const homelist = r => require.ensure([], () => r(require('../components/homelist')), 'homelist')
const side = r => require.ensure([], () => r(require('../components/Side')), 'side')
const picture = r => require.ensure([], () => r(require('../components/picture/picture')), 'picture')
const picturedetail=r=>require.ensure([],()=>r(require('../components/picture/picdetail')),'picdetail')
const movie=r=>require.ensure([],()=>r(require('../components/movie/Movie')),'movie')
const movielist=r=>require.ensure([],()=>r(require('../components/movie/Movielist')),'movielist')
const moviedetail=r=>require.ensure([],()=>r(require('../components/movie/Moviedetail')),'moviedetail')
const yjj=r=>require.ensure([],()=>r(require('../components/yjj')),'yjj')
const yjjchild=r=>require.ensure([],()=>r(require('../components/testchild')),'testchild')
const login=r=>require.ensure([],()=>r(require('../components/login')),'login')
const regist=r=>require.ensure([],()=>r(require('../components/register')),'regist')
const signout=r=>require.ensure([],()=>r(require('../components/signout')),'signout')
const user=r=>require.ensure([],()=>r(require('../components/user/user')),'user')
const nofound=r=>require.ensure([],()=>r(require('../components/404.vue')),'nofound')
const set=r=>require.ensure([],()=>r(require('../components/set/set.vue')),'set')
const shopcart = r => require.ensure([], () => r(require('../components/shopcart/shopcart')), 'shopcart')

// const transformchild = r => require.ensure([], () => r(require('../components/transformchild')), 'transformchild')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      //name: 'welcome',  //如果有默认的子路由这个名字最好不要在有了
      component: Home,   //刷新页面每个入口都会经过这个组件
      children:[
        {
          path:'',
          name:'Home',
          meta: { auth: false },
          component:homelist,
        },
      	{
	      path:'picture',
	    	name:'picture',
        //meta: { auth: false },
	    	component:picture,
        children:[
          {
            path:':time',
            name: 'picdetail',
            component: picturedetail,
          }
        ]
      	},
        {
          path:'movie',
          name:'movie',
          component:movie,
          children:[
            {
              path:'movie-list',
              name: 'movie-list',
              component: movielist,
            }
          ]
        },{
    
          path:'movie-detail/:id',
          name: 'movie-detail',
          component: moviedetail,
        },{
          path:'userindex',
          name:'userindex',
          component:user
        },{
          path:'/cart',
          name:'shopcart',
          component:shopcart
        },{
          path:'set',
          name:'set',
          component:set,
        },{
           path:'404',
          name:'nofound',
          component:nofound
        } 
      ]
    },{
      name: 'login', 
      path:'/login',
      component: login
    },{
      name: 'regist', 
      path:'/regist',
      component: regist
    },{
       path: '/signout', //退出
       name:'signout',
       meta: { auth: false },
       component: signout
    },{
      path:"*",
      redirect:'/404'
    },{
      path:'/yjj',
      component:yjj,
      meta: { auth: true },
      children:[
      {
        path:'child',
        name:'yjjtest',
        component:yjjchild
      }
      ]
    }
    
  ]
})

//{
    
          // path:'movie/movie-list',
          // name: 'movie-list',
          // component: movielist,
          // children:[
          //   {
          //       path:'movie-detail',
          //       name: 'movie-detail',
          //       component: moviedetail,
          //     }
          // ]
        //},
