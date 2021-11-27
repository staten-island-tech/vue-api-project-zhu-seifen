<template>
      <div class="flexButton">
        <div>
          <button class="button1" @click="removeFromCart">-</button>
          <button class="button2" @click="addToCart">+</button>
        </div>
        <div class="cartValue">You have &nbsp;<span> {{ cart }}  </span> &nbsp; item(s) of this book.</div>
      </div>
</template>

<script>
export default {
  name: "UpdateCart",
  props: {
    id: Object,
  },
  data() {
    return {
      cart: 0,
    }
  },
  created: function () {
    let found = -1; //this.$shoppingCart.push('1')
    found = this.$root.shoppingCart.findIndex((item) => {
      return item.title == this.id.title;
    });

    if (found > -1) {
      this.statusDescription =
        "You already have " +
this.$root.shoppingCart[found].quantity
     //   this.$root.quantity[found] +
        " of this book in your cart.";
      this.cart = this.$root.shoppingCart[found].quantity;

    } else {
      this.cart = 0;
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
      let found = -1;
      //this.$shoppingCart.push('1')
      found = this.$root.shoppingCart.findIndex((item) => {
        return item.title == this.id.title;
      });
      if (found < 0) {
        this.id.quantity = 1;
        this.$root.shoppingCart.push(this.id);
      } else {
        this.$root.shoppingCart[found].quantity++;

      }
      this.getCartSum();


      // this.remove = 0;
      /*   this.statusDescription = this.cart + ' additional item(s) has been added to your cart.' */
      console.log("This item has been added to your cart.");
    },
    removeFromCart() {
      if (this.cart < 1) return;

      this.cart -= 1;
      this.remove += 1;

      let found = -1; //this.$shoppingCart.push('1')
      found = this.$root.shoppingCart.findIndex((item) => {
        return item.title == this.id.title;
      });
      if (this.$root.shoppingCart[found].quantity > 1) {
        this.$root.shoppingCart[found].quantity-- ;
      } else {
        this.$root.shoppingCart.splice(found, 1);
      }
       this.getCartSum();

      /*   this.statusDescription = this.remove +' item(s) has been removed from your cart.', */
      console.log("This item has been removed from your cart.");
    },
    getCartSum()
    {
      this.$root.cartSum = 0 ; 
      this.$root.shoppingCart.forEach((item) => {
        this.$root.cartSum += item.quantity; });


    },
  },
};
</script>

<style scoped>

.flexButton {
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
}
.button1 {
  border: none;
  width: 4rem;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  
  background-color: #ff9800;
  
    /* background-color: white; */
  border: black 2px solid;
  border-right: none;
  color: black;
  /* border-radius: 5px; */
  padding: 4px;
  margin-top: 1rem;
  cursor: pointer;
  outline: inherit;
  transition: all 0.5s ease-out;
}
.button2 {
  border: none;
  width: 4rem;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #ff9800;

   border: black 2px solid;
   border-left: none;
  color: black;
  /* border-radius: 5px; */
  padding: 4px;
  /* margin-top: 1rem; */
  cursor: pointer;
  outline: inherit;
  transition: all 0.5s ease-out;
}

.buttonContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  margin: 1rem;
}

span {
  font-style: bold;
  background-color: #ff9800;
  color: white;
  border-radius: 5px;
  padding-left: 7px;
  padding-right: 7px;
}

.cartValue { 
  display: flex; 
  text-align: center; 
  font-size: 1rem;
justify-content: center; 
padding: 10px; 
background-color: white; 
font-size: 0.95rem;
}

.button1:hover {
  background-color: #e64a19;
  transition: all .2s ease-out;
  color: white;

}
.button2:hover {
  background-color: #e64a19;
  transition: all .2s ease-out;
  color: white;
}

</style>
