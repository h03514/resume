// Vue.component('row-componet',{
//     props:['img'],
//     template:'#urlImg'
// });

let img = {
    props: ['img'],
    template: '#urlImg',
};

let vm = new Vue({
    el: '#app',
    data: {
        imgUrl: '../img/Computer.png',
        protfoImg1: '../img/qve.jpg',
        protfoImg2: '../img/map.jpg',
        protfoImg3: '../img/weather.jpg',
    },
    methods: {
        introText: function() {},
    },
});

let typed = new Typed('.turn', {
    strings: ['', 'Front-end Engineer', 'a SI Engineer', 'a MIS Engineer'],
    smartBackspace: true, // Default value
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
