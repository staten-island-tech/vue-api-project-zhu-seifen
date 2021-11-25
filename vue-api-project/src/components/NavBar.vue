
<template>
    <div id="nav">
        <div class="nav">
            <router-link to="/" class="logo-nav">
                <img src="../assets/nytlogo.png" class="logo" alt="New York Times Logo">
            </router-link>
            <div id="nav-buttons">
                <router-link class="nav-sections" to="/">Home</router-link> |
                <router-link class="nav-sections" to="/search">Search</router-link> |
                <router-link class="nav-sections" to="/cart/">Your Cart</router-link>
                <p>[ {{$root.cartSum}} ]</p>
            </div>
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
        color: white;
        text-decoration: inherit;
    }

    p{
        margin: 1rem;
        font-size: 1rem;
        color: white;
    }

    .nav-sections:after {
        display: block;
        content: '';
        border-bottom: 2px white solid;
        transform: scaleX(0);
        transition: 0.3s ease-in-out;
    }

    .nav-sections:hover::after {
        transform: scaleX(1);
    }

    .logo {
        height: 1.5rem;
        margin-left: 3rem;
    }

    .nav {
        display:flex;
        justify-content: space-between;
        width: 100%;
    }

    #nav-buttons {
        display: flex;
        align-items: center;
    }

    .logo-nav {
        display: flex;
        align-items: center;
    }
</style>