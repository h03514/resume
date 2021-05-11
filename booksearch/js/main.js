function cslog(arr) {
    console.log(JSON.stringify(arr));
}

const vm = Vue.createApp({
    data() {
        return {
            searchBookName: '',
            bookAry: []
        }
    },
    methods: {
        search() {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchBookName}`).then(res => {
                    this.bookAry = res.data;
                    // console.log(res.data);
                    cslog(this.bookAry.items[0].volumeInfo.authors[0]);
                })
                .catch(err => {
                    console.log(err);
                })
        },

    }
});
vm.mount('#booksearch');