<template>
    <div id="search">
        <section id="search-page">
            <h2>Search for a book!</h2>
            <form class="search-form" @submit.prevent="onSubmit()">
                <input 
                class="search-bar" 
                type="text" 
                placeholder="Search for the book's title..."
                v-model="searchParams">
                <input class="submit-btn" type="submit">
            </form>
        </section>
        <section id="results">
            <div>
                <p :class="{ hide: validParam }">{{ message }}</p>
            </div>
            <div class="searchResults">
                <SearchResult v-for="result in results" :key="result.title" :result="result" :class="{ hide: !validParam }"/>
               
            </div>
        </section>
    </div>
</template>

<script>
import SearchResult from "../components/SearchResult.vue";

export default {
    name: "Search",
    components: {
        SearchResult
    },
    data() {
        return {
            searchParams: null,
            data: [],
            results: [],
            message: "Search to see results!",
        }
    },
    
    methods: {
        fetchData: async function(){
            try {
                const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?title=${this.searchParams}&api-key=usCi4RaBNDKBfG3jWXiTgwjpfSJ6aWG4`)
                const data = await result.json();
                this.data = data
                this.results = data.results
                this.results.forEach(result => {
                    result.book_image = require("../assets/default_book_cover.jpg")
                    console.log(result)
                });
                this.onSubmit()
                this.checkValid()
                this.searchParams = ""
            } catch (error) {
                console.log(error)
                
            }
        },
        checkValid() {
            if (!this.validParam) {
                this.message = "Sorry, we don't have this book!"
                this.searchParams = ""
            } else {
                //
            }
        },
        onSubmit() {
            if (!this.enteredParam || this.searchParams.trim() === "") {
                this.message = "Please enter a valid book title!";
                this.searchParams = ""
            } else {
                this.fetchData();
            }
        },
    },
    computed: {
        validParam() {
        if (this.results.length === 0) {
            return false   
          } else {
            return true
        }
      },
      enteredParam() {
        if (!this.searchParams) {
            return false   
          } else {
            return true
        }
      },
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

    .search-form {
        width: 40%;
        display:flex;
        flex-direction: row;
    }

    .search-bar {
        width: 100%;
        padding: .5rem 1rem;
        border: none;
        border-bottom: #FF9800 solid 2px;
    }

    .submit-btn {
        background-color: #FF9800;
        color: white;
        padding: .4rem;
	    cursor: pointer;
	    outline: inherit;
        width: 5rem;
        margin-left: .2rem;
        border:none;
        border-bottom: 2px solid #E64A19;
    }

    h2{
        color: white;
        font-size: 1.3rem;
        font-weight: 100;
    }

    .hide {
        display: none;
    }

    p {
        font-size: 1rem;
    }

    .searchResults {
        display: flex;
        flex-wrap: wrap;
    }
</style>

