<template>
    <div id="search-page">
        <h2>Search for a book!</h2>
        <form class="search-form" @submit.prevent="onSubmit">
            <input 
            class="search-bar" 
            type="text" 
            placeholder="Search for the book's title..."
            v-model="searchParams">
            <input class="submit-btn" type="submit">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchParams: null,
        }
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        onSubmit() {
            console.log(this.searchParams)
        },
        fetchData: async function(){
            try {
                const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?title=apple&api-key=usCi4RaBNDKBfG3jWXiTgwjpfSJ6aWG4`)
                const data = await result.json();
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    },
}
</script>

<style scoped>
    #search-page {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45vh;
        background-image:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("../assets/books.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        flex-direction: column;
    }

    .search-bar {
        width: 15rem;
        height: 1.5rem;
        border: none;
        border-bottom: #FF9800 solid 2px;
    }

    .submit-btn {
        background-color: #FF9800;
	    border: #FF9800 2px solid;
        color: white;
        padding: .3rem;
	    cursor: pointer;
	    outline: inherit;
        transition: all .5s ease-out;
        width: 5rem;
        margin-left: .2rem;
        border-bottom: 2px solid #E64A19;
    }

    h2{
        color: white;
        font-size: 1.3rem;
        font-weight: 100;
    }
</style>

