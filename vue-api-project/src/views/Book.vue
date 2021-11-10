<template>
  <div> hello
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
        this.singleBook = data.results; 
        console.log(data)
      } catch (error) {
        console.log(error)
      }
   }
  },
}
</script>

