<template>
  <div class="cart">
    <button @click="clearList" class="clear-btn" :disable="noItems" :class="{ disabledButton: noItems }">Clear Cart</button>
      <CartItem v-for="(item,index) in this.$root.shoppingCart" :key="item.title" :book="item" :index="index"/>

    <div class="empty" v-if="$root.cartSum == 0">
        <p>Your cart is empty. My cat is sad now!!</p>
        

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
      },
      computed: {
        noItems() {
          if (this.$root.cartSum === 0) {
            return true
          } else {
            return false
          }
        }
      }
  } 
</script>

<style scoped>
.cart {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.empty {
  font-size: 3rem;
}

.clear-btn {
  background-color: #FF9800;
	  border: #FF9800 2px solid;
    color: white;
    border-radius: 5px;
    padding: .5rem 1rem;
	  cursor: pointer;
	  outline: inherit;
    transition: all .5s ease-out;
    margin: 1rem;
    width: 7rem;
}

.disabledButton {
    background-color: white;
	  border: rgb(168, 162, 162) 2px solid;
    color: rgb(168, 162, 162);
    cursor: inherit;
 }

p {
  font-size: 2rem;
  margin: 0rem;
  margin-bottom: 1rem;
}
</style>
