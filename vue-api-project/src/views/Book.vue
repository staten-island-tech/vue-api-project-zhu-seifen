<template>
  <div class="book-flex">
   
     <img  :src="id.book_image">
    
      
      <!-- <div class="middle">
        <div class="text"> {{ id.description }}</div>
      </div> -->
 
    <div claa="book-info">

        <h1> {{ id.title }}</h1>
        <h4> by: {{ id.author }}</h4>
        <p class="description"> {{ id.description }}</p>
        <UpdateCart :id="id" />
        <Review :book="id"/>
  
    </div>
     <!-- <button 
     class="buttonStyle"
     @click="addToCart" 
     >Add to Cart
     </button> -->
    
  </div>
</template>

<script>
import UpdateCart from "../components/UpdateCart.vue";
import Review from "../components/Review.vue";


export default {
 props  : {
   id : Object,
   
   },
components: {
  UpdateCart,
  Review,
}

}
</script>

<style scoped>
 

.book-flex {
  display: flex; 
  padding: 2rem;
  margin: 3rem;
 
  justify-content: center;
  
  flex-direction: row;
 }
img {
    /* max-width: 100%; */
    height: 35rem; 
    /* width: 5rem; */
}
 
.description {
  display: flex;
  text-align: center;
 font-size: 1rem;
 margin:0.5rem;
  justify-content: center;
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
  /* padding: 10px; */
  margin:0.5rem;
  color: #FF9800;
}

.book-info{

  margin: 1rem;
  


  
}

.status {
  font-size: 1rem;
  padding: 1rem;
}


.buttonContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
img {
    /* max-width: 100%; */
    height: 20rem; 
}

.cartValue {
  background-color:white;
  font-size: 0.95rem;
}
.container { 
  position: relative; width: 50%; 
  } 
/* .image { 

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


@media screen  and (max-width: 1000px) {
  img {
    height: 20rem;
  }
}

/* #book-info{
  width: 70%;
} */
/* 
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
} */

</style>

