<template>
  <div class="book-flex">
    <div class="container">
      <img class="image" :src="id.book_image">
      
      <!-- <div class="middle">
        <div class="text"> {{ id.description }}</div>
      </div> -->
    </div>  
    <div>
      <div>
        <h1> {{ id.title }}</h1>
        <h4> by: {{ id.author }}</h4>
        <div class="description"> {{ id.description }}</div>
      </div>
     <button class="buttonStyle" @click="addToCart" :disabled="cart >= 1">Add to Cart</button>
      <!-- <div class="buttonContainer">
        <button class="button1" 
        @click="removeFromCart">-</button>
        <div class="cartValue"> {{ cart }}</div>
        <button class="button2" @click="addToCart" :cart="cart">+</button>
      </div>   -->
      <div class="status"> {{ statusDescription }}</div>
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
         remove: 0,
     }
   },

  methods: {

    addToCart (){
      this.cart += 1
      this.remove = 0
      this.statusDescription = this.cart + ' item(s) has been added to your cart.'
      console.log('This item has been added to your cart.')
      
    },
    removeFromCart (){
      if (this.cart >= 1)
         this.cart -= 1,
         this.remove +=1
         this.statusDescription = this.remove +' item(s) has been removed from your cart.',
         console.log('This item has been removed from your cart.')
    },

  },

}
</script>

<style scoped>
.buttonStyle {
  background-color: white;
	border: #FF9800 2px solid;
  color: #FF9800;
  border-radius: 5px;
  padding: .5rem 1rem;
  margin-top: 1rem;
	cursor: pointer;
	outline: inherit;
  transition: all .5s ease-out;
}

.buttonStyle:hover {
  background-color: #FF9800;
	border: #FF9800 2px solid;
  color: white;
  transition: .5s ease-out;
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
h1{
  font-size: 2rem;
  text-align: left;
  margin:0.5rem
/*   add cart and way to leave rating, img resizing  */
}
h4{
  font-size:0.8rem;
  border-bottom: 1px solid black;
  text-align: left;
  padding-bottom: 10px;
  margin:0.5rem;
  color: #FF9800;
  
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
  background-color:#FF9800;
  font-size: 0.95rem;

}
.container { 
  position: relative; width: 50%; 
  } 
.image { 
  opacity: 1; 
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility:hidden; 

  } 
.middle { 
  transition: .5s ease; 
  opacity: 0; 
  position: absolute; 
  top:50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  -ms-transform: translate(-50%,-50%); 
  text-align: center; } 
.container:hover .image { 
  opacity: 0.3; 
  }
.container:hover .middle { 
  opacity: 1; 
  }
.text { 
  background-color: #04AA6D;
  color: white; 
  font-size: 16px;
  padding: 16px 32px; }


@media screen and (max-width: 900px){
  .book-flex{
      display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  }
  h1{
  font-size: 2rem;
  }
  h4{
  font-size:1rem;
  }
  .status{
  font-size: 1rem;
  }
  img{
    height: 1rem; 
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

