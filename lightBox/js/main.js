let imgAry = [
  {
    id: 1,
    src: "/img/guitar-1245856_1280.jpg",
  },
  {
    id: 2,
    src: "/img/guitar-1836655_1280.jpg",
  },
  {
    id: 3,
    src: "/img/guitar-2276181_1280.jpg",
  },
];

window.onload = function () {
  const vm = Vue.createApp({
    data() {
      return {
        imgList: imgAry,
        modal: false,
      };
    },
  });
  vm.component("my-component", {
    template: `
            <div class="row">
                <div>eee</div>
           </div>
       `,
  });

  // vm.component('xtemplate', {
  //     template:
  // })

  vm.mount("#app");
};
