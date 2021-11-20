<template>
      <div class="buttonContainer">
        <div class="cartValue">You have {{ cart }} item(s) of this book.</div>

        <button class="button1" @click="removeFromCart">-</button>

        <button class="button2" @click="addToCart">+</button>
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

.description {
  display: flex;
  text-align: center;
  font-size: 1rem;

  justify-content: center;
}
.book-flex {
  display: flex;
  padding: 2rem;
  flex-direction: row;

  justify-content: center;
  flex-wrap: wrap;
}
h1 {
  font-size: 2rem;
  text-align: left;
  margin: 0.5rem;
  /*   add cart and way to leave rating, img resizing  */
}
h4 {
  font-size: 0.8rem;
  border-bottom: 1px solid black;
  text-align: left;
  padding-bottom: 10px;
  margin: 0.5rem;
  color: #ff9800;
}
.status {
  font-size: 1rem;
  padding: 1rem;
}
img {
  /* max-width: 100%; */
  height: 15rem;
  width: 5rem;
}

.buttonContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.cartValue {
  background-color: white;
  font-size: 0.95rem;
}
.container {
  position: relative;
  width: 50%;
}
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.container:hover .image {
  opacity: 0.3;
}
.container:hover .middle {
  opacity: 1;
}
.text {
  background-color: #04aa6d;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}

@media screen and (max-width: 900px) {
  .book-flex {
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
  }
}

.button1 {
  border: none;
  width: 3rem;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: #ff9800;
}
.button2 {
  border: none;
  width: 3rem;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #ff9800;
}

.button2:hover {
  background-color: #e64a19;
}
.button1:hover {
  background-color: #e64a19;
}
</style>
