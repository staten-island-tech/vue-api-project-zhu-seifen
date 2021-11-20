<template>
  <section class="search-result">
      <div id="result-info">
        <h2> {{ result.title }} </h2>
        <p> {{ result.author }} </p>
        <p> {{ result.description }} </p>
      </div>
  </section>
</template>

<script>
export default {
    name: "SearchResult",
    props: {
        result: Object,
    },
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