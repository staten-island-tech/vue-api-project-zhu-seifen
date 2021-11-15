<template>
  <div class="book-flex">
    <img :src="id.book_image">  
    <div>
      <h1> {{ id.title }}</h1>
      <h4> by: {{ id.author }}</h4>
      <button 
        class = "button1" 
        @click="addToCart"
        :cart="cart">+</button>
      <button class = "button2" @click="removeFromCart">-</button>
      <div> Quantity:{{ cart }}</div>    
      <div> {{ statusDescription }}</div>
    </div>
  </div>
</template>

<script>

export default {
 props  : {
   id : Object,
   },
   data() {
     return {
        statusDescription: "",
         cart: 0,
     }
   },
  methods: {
    addToCart (){
      this.cart += 1
      this.statusDescription = 'This item has been added to your cart.'
      console.log('This item has been added to your cart.')
      
    },
    removeFromCart (){
      if (this.cart >= 1)
         this.cart -= 1,
         this.statusDescription = 'This item has been removed to your cart.'
         console.log('This item has been removed to your cart.')
    },
  },

}
</script>

<style scoped>
.book-flex {
  display: flex; 
  padding: 2rem;
  flex-direction: row; 
  align-items: center; 
  justify-content: center;
  flex-wrap: wrap;
  background-color: #ff990027;
  /* background-color: #E64A19;  */
/*   #FF9800 */
}
h1{
  font-size: 2rem;
}
h4{
  font-size:1rem;
}
img {
   max-width: 100%; 
    height: 30vw; 
    height: auto;
   
}

@media screen and (max-width: 900px){
  .book-flex{
      display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  font-size: 3rem;
  }
}

.button1 {
  border: none;
  width: 3rem;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: #FF9800;

}
.button2 {
  border: none;
  width: 3rem;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #FF9800;
}

.button2:hover{
  background-color:#E64A19;
}
.button1:hover{
  background-color: #E64A19;
}

</style>

