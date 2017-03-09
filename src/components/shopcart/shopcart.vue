<template>
  <div id="app">
    <h2>Shopping Cart Example</h2>
    <hr>
    <cart></cart>
    <h2>Products</h2>
    <hr>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'

export default {
  components: { ProductList, Cart }
}
</script>

