let ary = [];
let vm = new Vue({
    el: '#app',
    data() {
        return {
            info: null,
        };
    },
    filters: {
        country: function(item, index, arr) {
            return data.indexOf(element) === index;
        },
    },
    mounted() {
        axios
            .get('https://3000.gov.tw/hpgapi-openmap/api/getPostData')
            .then(response => {
                response.data.filter(function(da) {
                    ary.push(da.hsnNm);
                });
                let result = ary.filter(function(element, index, arr) {
                    return arr.indexOf(element) === index;
                });
                this.info = result;
            })
            // .then(function(response) {
            //     console.log((this.info = response.data.data));
            // })
            .catch(function(error) {
                // 请求失败处理
                console.log(error);
            });
    },
});
