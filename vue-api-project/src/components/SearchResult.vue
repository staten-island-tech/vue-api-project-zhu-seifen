<template>
  <section class="search-result">
      <div id="result-info">
        <h2> {{ result.title }} </h2>
        <p> {{ result.author }} </p>
        <p> {{ result.description }} </p>
      </div>
      <UpdateCart :id="result"/>
  </section>
</template>

<script>
import UpdateCart from "../components/UpdateCart.vue";

export default {
    name: "SearchResult",
    props: {
        result: Object,
    },
    components: {
        UpdateCart,
    },
    /* mounted: function() {
        this.setImage()
    },
    methods: {
        setImage() {
            this.result.book_image = require("../assets/default_book_cover.jpg")
            console.log(this.result)
        }
    } */
}
</script>

<style scoped>
    .search-result {
        width: 30vw;
        border: gray 1px solid;
        border-radius: 5px;
        margin: 1rem;
    }

    #result-info {
        padding: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 1rem;
    }
</style>