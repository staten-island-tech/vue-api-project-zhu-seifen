<template>
  <div class="home">
    <section class="header">
      <div class="heading">
        <span class="title">Best Selling</span>
        <span class="title2">Books</span>
      </div>
    </section>
    <section class="books">
      <h2>Best Selling Books</h2>
      <!-- <div id="books-list" v-for="list in books" :key="list.title"> -->
        <BookCard v-for="book in books.books" :key="book.title" :book="book"/>
      <!-- </div> -->
      <div id="nav-btns">
        <button class="button" @click="previousPage()">Previous</button>
        <button class="button" @click="nextPage()">Next</button>
      </div>
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
      lists: [],
      books: [],
      index: 0,
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
        this.lists = data
        this.books = this.lists.results.lists[this.index]
        console.log(this.books)    
      } catch (error) {
        console.log(error)
      }
    },
    newPage: function() {
      this.books = this.lists.results.lists[this.index]
    },
    previousPage: function() {
      if (this.index === 0) {
          //console.log(this.index)               
        } else {
          this.index--
          this.newPage()
        }
      },
      nextPage: function() {
        if (this.index === this.lists.results.lists.length -1) {
            //console.log(this.index)   
          } else {
            this.index++
            this.newPage()
        }
      },
  },
  computed: {
      
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

  .books {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h2{
    font-size: 2rem;
  }

  #nav-btns {
    border-top: solid 1px black;
    width: 60%;
    padding: 2rem;
  }

  .button {
    margin: 1rem;
    width: 7rem;
  }
</style>
