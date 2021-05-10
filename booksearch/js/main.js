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
                    console.log(this.bookAry);
                })
                .catch(err => {
                    console.log(err);
                })
        },

    }
});
vm.mount('#booksearch');