<template>
<div>
  <ul>
    <li>3种不同的方式获取方式是相同的</li>
    <li><hr></li>
    <li>1,mapGetters获得现在数据</li>
    <li v-for="p in products">
      {{ p.title }} - {{ p.price | currency }}---{{p.inventory}}
      <br>
      <button
        :disabled="!p.inventory"
        class="cartbtn"
        @click="addToCart(p)">
        Add to cart
      </button>
    </li>
  </ul>
  <hr>
  <ul>
    <li>2,mapState一样可以获得现在数据</li>
    <li v-for="p in productall">
       {{ p.title }} - {{ p.price | currency }}
    </li>
  </ul>
  <hr>
  <ul>
    <li>3,$store一样可以获得现在数据</li>
    <li v-for="p in $store.state.products.all ">
       {{ p.title }} - {{ p.price | currency }}

    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters, mapActions,mapState} from 'vuex'

export default {
  computed: {
    ...mapGetters({
    products: 'allProducts'   //获取列表数据
    }),
    ...mapState({
      productall: state => state.products.all 
    })
  },
  methods: mapActions([
    'addToCart'
  ]),
  created () {
    console.log(this.$store)
    this.$store.dispatch('getAllProducts')  //获取商品列表数据给state.all
  }
}
</script>
<style type="text/css" >
  .cartbtn{
    padding:10px;
    background: #03a9f4;
    color: #fff;
  }
  .cartbtn:disabled{
    background: #ccc;
  }
</style>
