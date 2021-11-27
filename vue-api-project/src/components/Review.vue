<template>
  <div class="review-container">

      
                <textarea 
                cols="50"
                @keyup.enter="addReview"
                class="review-bar" 
                type="text"
                placeholder="Leave a Review..."
                v-model="reviewParams"></textarea>

                <button @click="addReview" class="review-btn">Add Review</button>
               <div class="bookReview">

                <h1>Book Reviews</h1>
                <table class="reviewContainer" v-for="review in userReviews" :key="review">
                    <caption></caption>
                   <tr><td class="reviewStyle"> {{review}}</td></tr>
                </table>

               </div>
                
  </div>
</template>

<script>
export default {
    name: "Review",
    props: {
        book: Object, 
    },
    data() {
        return {
            reviewParams: '',
            userReviews: [],
            reviewIndex: -1
        }
    },
    created: function () {
        let found = -1; 
        found = this.$root.reviews.findIndex((item) => { return item.title == this.book.title; });
        if (found > -1) {
            this.userReviews = this.$root.reviews[found].userReviews;
            this.reviewIndex = found;
        }else {
            this.userReviews.push( "No reviews written yet.")
        }
    },
    methods: { 
        addReview() {
            
            if (this.reviewParams.trim() =='')
               {
                   this.reviewParams = '';
                   return; 
               }
            
            if (this.reviewIndex > -1) {
                this.$root.reviews[this.reviewIndex].userReviews.push(this.reviewParams);
                
            } else {
                this.$root.reviews.push({title: this.book.title, userReviews: [this.reviewParams]});
                this.reviewIndex = this.$root.reviews.length -1
           
                 

            }
            this.userReviews = this.$root.reviews[this.reviewIndex].userReviews;
            this.reviewParams  = '';

        }
    }
}
</script>

<style scoped>

.bookReview {
   border: solid 3px #FF9800;

}
.reviewContainer {
    display: flex;
    justify-content: center; 
    align-items: center; 
    text-align: left;
    width: 37rem;
    font-size: 15px;
}

table, tr, td 
{
    width: 36rem;

}
.reviewStyle {
    border-bottom: solid 1px #FF9800;
    width: 36rem;
    /* width: 55rem;  */
    padding: 1rem;
    text-align: left;

}
/* h1{
    text-decoration: underline;
} */
tr:nth-child(odd) {
    background-color: red;
}



.review-bar { 
    width: 35rem; 
  height: 3rem;
    padding: .5rem 1rem; 
    /* border: none;  */
    border:#FF9800 solid 2px; 
}

.review-container {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    /* height: 45vh; */
    padding: 3rem;
flex-direction: column;
/* width: 45rem; */

}
.review-btn { 
    background-color: #FF9800; 
    color: white; 
    padding: .4rem; 
    cursor:pointer; 
    outline: inherit; 
    width: 8rem; 
    margin-left: .2rem; 
    border:none;
border-bottom: 2px solid #E64A19;
margin: 1rem; }

.review-btn:hover {
    background-color: #E64A19; 
    color: white; 
    transition: all .2s ease-out;
 

}




</style>