<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data(){
    return {
      events: [],
      
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
                console.log(data)
              } catch (error) {
                console.log(error)
              }
            }
},
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
