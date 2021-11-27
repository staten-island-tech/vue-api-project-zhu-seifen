<template>
  <section class="search-result">
      <div id="result-info">
        <h2> {{ result.title }} </h2>
        <p> {{ result.author }} </p>
        <p> {{ result.description }} </p>
      </div>
      
      <router-link
  class="book-btn"
  :to="{ name: 'Book', params: { id: result } }"
  tag="button"
>Learn More</router-link>

  </section>
</template>

<script>


export default {
    name: "SearchResult",
    props: {
        result: Object,
    },
    components: {
       
    },
    /* mounted: function() {
        this.setImage()
    },
    methods: {
        setImage() {
            this.result.book_image = require("../assets/default_book_cover.jpg")
            console.log(this.result)
        }
    } */
}
</script>

<style scoped>
    .search-result {
        width: 30vw;
        border: gray 1px solid;
        border-radius: 5px;
        margin: 1rem;
    }

    #result-info {
        padding: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
    }
    .book-btn { margin-bottom: 1rem; 
    background-color: white; 
    border: #FF9800 2px solid;
     color: #FF9800;
border-radius: 5px;
 padding: .5rem 1rem; 
 margin-top: 1rem; 
 cursor: pointer;
outline: inherit;
 transition: all .5s ease-out; } 
 
 .book-btn:hover {
background-color: #FF9800;
 border: #FF9800 2px solid; 
 color: white; 
 transition: .5s ease-out; }

</style>