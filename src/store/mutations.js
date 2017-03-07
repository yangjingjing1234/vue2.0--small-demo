import Vue from 'vue'

const mutations = {
  menustate (state,flag) {
    console.log(flag)
    state.sideshow=flag;
    //这样写有一个bug当flag=false时也会走后面的
  },

  updata_title (state,payload) {
  	console.log(payload+'======all')
    state.headertitle=payload.title
    state.goback=payload.goback
    console.log(payload.title+'======title')
    console.log(payload.goback+'======goback')
  },
  USER_SIGNIN(state,user){

     sessionStorage.setItem('user', JSON.stringify(user))
      state.user= Object.assign(state.user, user);
      //这个地方用到es6对象的浅拷贝
  },
  USER_SIGNOUT(state){
    console.log(222)
    sessionStorage.removeItem('user')
     //Object.keys(state).forEach(k => Vue.delete(state, k))
     state.user= {};
  }
}

export default mutations