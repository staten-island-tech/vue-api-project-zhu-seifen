<template>
      <div class="buttonContainer">
        <div class="cartValue">You have {{ cart }} item(s) of this book.</div>
        <div>
          <button class="button1 btn" @click="removeFromCart">-</button>
          <button class="button2 btn" @click="addToCart">+</button>
        </div>
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
.buttonStyle {
  background-color: white;
  border: #ff9800 2px solid;
  color: #ff9800;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  outline: inherit;
  transition: all 0.5s ease-out;
}

.buttonStyle:hover {
  background-color: #ff9800;
  border: #ff9800 2px solid;
  color: white;
  transition: 0.5s ease-out;
}
.disabledButton {
  background-color: grey;
  color: white;
  border: none;
  border: grey 2px solid;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  outline: inherit;
}

.buttonContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  margin: 1rem;
}

.cartValue {
  background-color: white;
  font-size: 0.95rem;
}

.button1 {
  border: none;
  width: 3rem;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: #ff9800;
  transition: all .3s ease-out;
}
.button2 {
  border: none;
  width: 3rem;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #ff9800;
  transition: all .3s ease-out;
}

.button2:hover {
  background-color: #e64a19;
  transition: all .3s ease-out;
}
.button1:hover {
  background-color: #e64a19;
  transition: all .3s ease-out;
}

.btn {
  margin: 1rem 0;
}

@media screen and (max-width: 900px) {
  /* .book-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1rem;
  }
  .status {
    font-size: 1rem;
  }
  img {
    height: 1rem;
  } */
}
</style>
