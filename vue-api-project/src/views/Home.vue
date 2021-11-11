<template>
  <div class="home">
    <section class="header">
      <div class="heading">
        <span class="title">Best Selling</span>
        <span class="title2">Books</span>
      </div>
    </section>
    <section id="books-list">
      <h2>Best Selling Books</h2>
      <BookCard v-for="book in books" :key="book.title" :book="book"/>
    </section>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: "Home",
  components: {
      BookCard,
  },
  data(){
    return {
      books: [],
      
    }
  },
  created: function() {
    this.fetchData();
  },
  methods: {

    fetchData: async function(){
      try {
        const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=usCi4RaBNDKBfG3jWXiTgwjpfSJ6aWG4`)
        const data = await result.json();
        this.books = data.results.lists[0].books;
        console.log(this.books)
      } catch (error) {
        console.log(error)
      }
    },
},
};
</script>

<style scoped>
.header {
    height: 92vh;
    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
url("../assets/shelves.jpg");

    display:flex;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  
  .heading {
    color:white;
    display:flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    line-height: 1.3;
    transform: translate(-50%, -50%);
  }
  
  .title {
    font-size: 6rem;
    font-weight: 300;
  }
  
  .title2 {
    font-size: 7rem;
    font-weight: 900;
  }
</style>