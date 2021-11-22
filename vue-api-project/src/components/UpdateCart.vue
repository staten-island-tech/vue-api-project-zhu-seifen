<template>
      <div class="flexButton">
        <div>
          <button class="button1" @click="removeFromCart">-</button>
          <button class="button2" @click="addToCart">+</button>
        </div>
        <div class="cartValue">You have {{ cart }} item(s) of this book.</div>
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
    };
  },
  created: function () {
    let found = -1; //this.$shoppingCart.push('1')
    found = this.$root.shoppingCart.findIndex((item) => {
      return item.primary_isbn13 == this.id.primary_isbn13;
    });

    if (found > -1) {
      this.statusDescription =
        "You already have " +
        this.$root.quantity[found] +
        " of this book in your cart.";
      this.cart = this.$root.quantity[found];
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
        return item.primary_isbn13 == this.id.primary_isbn13;
      });
      if (found < 0) {
        this.$root.shoppingCart.push(this.id);
        this.$root.quantity.push(+1);
      } else {
        this.$root.quantity[found] = this.$root.quantity[found] + 1;
      }
      this.$root.cartSum = 0;
      this.$root.quantity.forEach((item) => {
        this.$root.cartSum += item;
      });

      this.remove = 0;
      /*   this.statusDescription = this.cart + ' additional item(s) has been added to your cart.' */
      console.log("This item has been added to your cart.");
    },
    removeFromCart() {
      if (this.cart < 1) return;

      (this.cart -= 1), (this.remove += 1);

      let found = -1; //this.$shoppingCart.push('1')
      found = this.$root.shoppingCart.findIndex((item) => {
        return item.primary_isbn13 == this.id.primary_isbn13;
      });
      if (this.$root.quantity[found] > 1) {
        this.$root.quantity[found] = this.$root.quantity[found] - 1;

        // this.$root.shoppingCart.push(this.id)
        // this.$root.quantity.push(+1)
      } else {
        this.$root.quantity.splice(found, 1);
        this.$root.shoppingCart.splice(found, 1);
      }
      this.$root.cartSum = 0;
      this.$root.quantity.forEach((item) => {
        this.$root.cartSum += item;
      });

      /*   this.statusDescription = this.remove +' item(s) has been removed from your cart.', */
      console.log("This item has been removed from your cart.");
    },
  },
};
</script>

<style scoped>
.cartValue {
  display: flex;
  text-align: center;
  font-size: 1rem;
  justify-content: center;
  padding: 10px;
}

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

.button2:hover {
  background-color: #e64a19;
   /* background-color: #ff9800; */
  /* border: #ff9800 2px solid; */
  color: white;
  transition: 0.5s ease-out;
}
.button1:hover {
   background-color: #e64a19;
   /* background-color: #ff9800; */
  /* border: #ff9800 2px solid; */
  color: white;
  transition: 0.5s ease-out;
}
</style>
