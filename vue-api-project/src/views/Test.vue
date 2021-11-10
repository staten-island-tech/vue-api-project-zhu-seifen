<template>
  <div>
    <div v-for="list in events" :key="list">
        <span class="flex" v-for="book in list.books" :key="book">
        <router-link :to="{name: 'Book',}">
            {{ book.title }}
        </router-link>
        </span>
        
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
    };
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: async function () {
      try {
        const result = await fetch(
          `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=usCi4RaBNDKBfG3jWXiTgwjpfSJ6aWG4`
        );
        const data = await result.json();
        this.events = data.results.lists;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.flex{
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column; 
    padding: 10px; 
}
</style>
