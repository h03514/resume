// let ref = {
//     url:
//         'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-A22679D3-2DC9-4E95-B492-739D8FF79C1E&format=JSON',
//     type: 'get',
// };
// AjaxJson(ref, '', weatherHandler);

// fetch(
//     'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-A22679D3-2DC9-4E95-B492-739D8FF79C1E&format=JSON'
// )
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         console.log(myJson);
//     });

window.onload = function() {
    const name = 'oxxo';
    const age = 18;
    // 有興趣的可以使用下方的網址測試
    // const uri = `https://script.google.com/macros/s/AKfycbw5PnzwybI_VoZaHz65TpA5DYuLkxIF-HUGjJ6jRTOje0E6bVo/exec?name=${name}&age=${age}`;
    const uri = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-A22679D3-2DC9-4E95-B492-739D8FF79C1E&format=JSON`;

    let aaa;
    fetch(uri, { method: 'GET' })
        .then(res => {
            return res.json(); // 使用 text() 可以得到純文字 String
        })
        .then(result => {
            weatherHandler(result);
        })
        .catch(err => {
            console.log(err);
        });
};
