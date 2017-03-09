
import * as types from './mutation-types'

const actions = {
  menustate({ commit },flag) {
    commit('menustate',flag)  
  },

  updata_title({commit},obj){
  	commit('updata_title',obj)
  },
  USER_SIGNIN({commit}, user){
    //console.log(user)
  		 commit('USER_SIGNIN', user)
  },
  USER_SIGNOUT({commit}){
  	commit('USER_SIGNOUT')
  },
  addToCart({ commit }, product){
    if (product.inventory > 0) {
      commit(types.ADD_TO_CART, {
        id: product.id
      })
    }
  }
}

export default actions