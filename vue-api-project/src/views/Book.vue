<template>
  <div class="book-flex">
    <div class="container">
      <img class="image" :src="id.book_image">
      <!-- <div class="middle">
        <div class="text"> {{ id.description }}</div>
      </div> -->
    </div>  
    <div id="book-info">
      <div>
        <h1> {{ id.title }}</h1>
        <h4> by: {{ id.author }}</h4>
        <p class="description"> {{ id.description }}</p>
      </div>
     <!-- <button 
     class="buttonStyle"
     @click="addToCart" 
     >Add to Cart
     </button> -->

  <UpdateCart :id="id" />

     

    </div>
  </div>
</template>

<script>
import UpdateCart from "../components/UpdateCart.vue";

export default {
 props  : {
   id : Object,
   
   },
components: {
  UpdateCart
}

}
</script>

<style scoped>

.description {
  display: flex;
  text-align: center;
  font-size: 1rem;
  justify-content: center;
}

.book-flex {
  display: flex; 
  padding: 2rem;
  margin: 3rem;
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
  padding: 10px;
  margin:0.5rem;
  color: #FF9800;
}

#book-info{
  margin: 1rem;
}

.status {
  font-size: 1rem;
  padding: 1rem;
}

img {
    /* max-width: 100%; */
    height: 20rem; 
}

.cartValue {
  background-color:white;
  font-size: 0.95rem;
}

/* .container { 
  position: relative; 
  width: 50%; 
}  */

.image { 
  opacity: 1; 
  display: block;
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
  text-align: center; 
} 

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
  padding: 16px 32px; 
}


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

</style>

