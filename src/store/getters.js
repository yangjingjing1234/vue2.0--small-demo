
const getters={
  count(state){
  	return state.countnum
  },
  cartProducts(state){
  	{
	  return state.cart.added.map(({ id, quantity }) => {    //因为用到模块了，因此获取模块中的常量就要带上模块的前缀，组件中也是如此，但是模块中的方法 是直接访问不用带前缀的
	    console.log(state.cart.added)
	    console.log(quantity)
	    const product = state.products.all.find(p => p.id === id)
	    console.log(product)
	    return {
	      title: product.title,
	      price: product.price,
	      quantity
	    }
	  })
	}
  }
}
export default getters