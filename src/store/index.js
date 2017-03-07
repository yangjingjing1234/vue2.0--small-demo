import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)
const  store =new Vuex.Store({
	state:{
		sideshow:false,//是否显示侧边栏，头组件（根据侧边栏状态变化），侧栏组件通信
		headertitle:'首页',//头部的标题跟死的组件通信
		goback:false,//头部是否返回
		inloaing:true,//入场动画，每次初次入场都会展现
		user:JSON.parse(sessionStorage.getItem('user'))||{}//这里有用户的信息
	},
	mutations,
	actions
})

export default  store 