function cslog(arr) {
  console.log(JSON.stringify(arr));
}

function cityIf(city) {
  let res = "";
  if (city == "new_x5F_taipei_x5F_city") {
    res = "新北市";
  }
  if (city == "path3635") {
    res = "基隆市";
  }
  if (city == "taipei_x5F_city") {
    res = "台北市";
  }
  if (city == "taoyuan_x5F_country") {
    res = "桃園市";
  }
  if (city == "hsinchu_x5F_country") {
    res = "新竹縣";
  }
  if (city == "hsinchu_x5F_city") {
    res = "新竹市";
  }
  if (city == "miaoli_x5F_country") {
    res = "苗栗縣";
  }
  if (city == "taichung_x5F_city") {
    res = "臺中市";
  }
  if (city == "nantou_x5F_country") {
    res = "南投縣";
  }
  if (city == "changhua_x5F_country") {
    res = "彰化縣";
  }
  if (city == "yunlin_x5F_country") {
    res = "雲林縣";
  }
  if (city == "chiayi_x5F_country") {
    res = "嘉義縣";
  }
  if (city == "chiayi_x5F_city") {
    res = "嘉義市";
  }
  if (city == "tainan_x5F_city") {
    res = "臺南市";
  }
  if (city == "kaohsiung_x5F_city") {
    res = "高雄市";
  }
  if (city == "pingtung_x5F_country") {
    res = "屏東縣";
  }
  if (city == "taitung_x5F_country") {
    res = "臺東縣";
  }
  if (city == "hualien_x5F_country") {
    res = "花蓮縣";
  }
  if (city == "yilan_x5F_country") {
    res = "宜蘭縣";
  }
  if (city == "path2679") {
    res = "連江縣";
  }
  if (city == "path2651") {
    res = "金門縣";
  }
  if (city == "path2482") {
    res = "澎湖縣";
  }
  if (city == "path2525") {
    res = "臺東縣";
  }
  if (city == "path2527") {
    res = "臺東縣";
  }
  if (city == "path2462") {
    res = "高雄市";
  }
  return res;
}

const vm = Vue.createApp({
  data() {
    return {
      covidData: [],
      cityName: "",
    };
  },

  methods: {
    city(e) {
      this.cityName = e.path[0].id;
      axios
        .get("https://mark-proxy-server-php.herokuapp.com/covid19.php")
        .then((res) => {
          this.covidData = [];
          for (let i in res.data) {
            if (
              res.data[i].縣市 == cityIf(this.cityName) &&
              res.data[i].個案研判日.substring(0, 4) != "2020"
            ) {
              this.covidData.push(res.data[i]);
            }
          }
        }),
        (error) => {
          console.log(error);
        };
    },
  },
});

vm.component("row-component", {
  props: ["person"],
  template: "#testTemplate",
});

vm.mount("#app");

// let ref = {
//     url: 'https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json',
//     type: 'get',
//     dataType: 'json'
// };
// AjaxJson(ref, '', ddd);

// function ddd(da) {
//     cslog(da)
// }

// $.ajax({
//     type: "GET",
//     url: "https://od.cdc.gov.tw/eic/Weekly_Age_County_Gender_19CoV.json",
//     dataType: "json",
//     success: function(data) {
//         cslog(data)
//     },
//     error: function(da) {
//         cslog(da);
//         cslog('ddd')
//     }
// });s
