
<template>
    <div id="nav">
        <div id="nav-buttons">
            <router-link class="nav-sections" to="/">Home</router-link> |
            <router-link class="nav-sections" to="/cart/">Your Cart: {{$root.cartSum}}

            </router-link>
 
           

            <router-link class="nav-sections" to="/search">Search</router-link> |
        </div>
    </div>
</template>


<script>

 //import shoppingCart from "../main.js";

//shoppingCart.push('1')

export default {
    name: "NavBar",
  
}
</script>

<style scoped>
    #nav {
        background-color: #FF9800;
        height: 3rem;
        border-bottom: 2px solid #E64A19;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        position: sticky;
        top:0;
        z-index: 1;
        padding-right: 3rem;
    }
    .nav-sections {
        margin: 1rem;
        font-size: 1rem;
        color: inherit;
        text-decoration: inherit;
    }
</style>