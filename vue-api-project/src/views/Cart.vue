<template>
  <div >
    <button @click="clearList">Clear Cart</button>
      <CartItem v-for="(item,index) in this.$root.shoppingCart" :key="item.title" :book="item" :index="index"/>

    <div class="empty" v-if="$root.cartSum == 0">
        Your cart is empty. My cat is sad now!!
        <img src="..\assets\sadCat.jpg" alt="">

    </div>
   

  
  </div>
  
</template>

<script>

import CartItem from "../components/CartItem.vue"; 

export default {
     name:"Cart", 
     components: { 
         CartItem, 
         },
      methods: {
        clearList () {
            this.$root.shoppingCart = [];
            this.$root.quantity = [];
            this.$root.cartSum = 0;
        }
      }
  } 
</script>

<style scoped>
.empty {
  font-size: 3rem;
  padding: 1rem;
}
</style>
