<template>
  <router-link class="book-link" :to="{ name: 'Book', params: { id: book } }">
      <h3 class="title">{{ book.title }}</h3>
      <img
        :src= "this.book.book_image"
        alt="Book Cover"
        class="book-cover">
  </router-link>

</template>

<script>
export default {
    props: {
        book: Object,
    },
    data() {
        return {
            bookCover: require(this.book.book_image)
        }
    }
}
</script>

<style>

</style>