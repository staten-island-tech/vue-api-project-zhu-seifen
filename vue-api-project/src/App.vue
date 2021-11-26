<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/test/">Test</router-link>
      <div> Cart:{{ cart }}</div>

    </div> -->
    <NavBar/> 
    <router-view />
  </div>
</template>


<script>
import NavBar from "./components/NavBar.vue";
 




export default {
  props: {
  //  cart: Number,
  },
  data() {
    return {
     
    }
  },
 components: {
    NavBar 
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

#nav {
  background-color:#FF9800;
}

/* #nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
