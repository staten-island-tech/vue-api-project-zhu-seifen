<template>
  <div class="book-info">
    <p> {{ id.title }}
</p>
    
  </div>
</template>

<script>

export default {
 props  : {
   id : Object,
   }, 
}
</script>

<style scoped>
.book-info {
  background-color: #E64A19; 
/*   #FF9800 */
}
</style>

