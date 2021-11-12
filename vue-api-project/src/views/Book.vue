<template>
  <div class="book-flex">
    <div> {{ id.title }}</div>
    <h4> by: {{ id.author }}</h4>
    <img :src="id.book_image">  
    <button @click="UpdateCart()">Add to Cart</button>
  </div>
</template>

<script>

export default {
 props  : {
   id : Object,
   },
   data() {
     return {
       
     }
   },
  methods: {

  } 
}
</script>

<style scoped>
.book-flex {
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: center;
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

@media screen and (max-width: 1000px){
  .book-flex{
      display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  font-size: 3rem;
  }
}
</style>

