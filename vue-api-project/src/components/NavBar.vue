<template>
    <div id="nav">
        <div id="nav-buttons">
            <router-link class="nav-sections" to="/">Home</router-link> |
            <router-link class="nav-sections" to="/test/">Your Cart:{{  }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: {
        shoppingCart: Array,
        cart: Number,
    }
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