<template>
  <section class="book-card">
	<img
	:src= "this.book.book_image"
	alt="Book Cover"
	class="book-cover">
	<div id="book-info">
		<h3 class="title">{{ book.title }}</h3>
		<p class="author-name">{{ book.author }}</p>
		<p class="book-description">{{ book.description }}</p>
		<router-link class="book-btn" :to="{ name: 'Book', params: { id: book } }" tag="button">Learn More</router-link>
	</div>
  </section>

</template>

<script>
export default {
	name: "BookCard",
	props: {
		book: Object,
	},
	data() {
		return {
			
		}
	}
}
</script>

<style scoped>
	.book-cover {
		height: 15rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	.book-card {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding:2.5rem;
		border-top: solid 1px black;
		width: 60%;
	}

	.book-description{
		width: 75%;
	}

	#book-info {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 75%;
	}

	.title {
		margin: .5rem;
	}

	p{
		font-size: 1rem;
		margin: .5rem;
	}

	.book-btn {
		background-color: white;
		border: #FF9800 2px solid;
		color: #FF9800;
		border-radius: 5px;
		padding: .5rem 1rem;
		margin-top: 1rem;
		cursor: pointer;
		outline: inherit;
		transition: all .5s ease-out;
	}

	.book-btn:hover {
		background-color: #FF9800;
		border: #FF9800 2px solid;
		color: white;
		transition: .5s ease-out;
	}
	
</style>