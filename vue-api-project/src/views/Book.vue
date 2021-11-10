<template>
  <div class="book-info">
    <div v-for="list in events" :key="list">
        <span class="flex" v-for="book in list.books" :key="book">
          {{  }}
        </span>
        
     </div>
  </div>
</template>

<script>

export default {
 data() {
    return{
      singleBook: {},
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
        this.singleBook = data.results.lists; 
        console.log(data)
      } catch (error) {
        console.log(error)
      }
   }
  },
}
</script>

<style scoped>
.book-info {
  background-color: #E64A19; 
/*   #FF9800 */
}
</style>

