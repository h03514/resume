function cityIf(city) {
    let res = '';
    if (city == 'new_x5F_taipei_x5F_city') {
        res = '新北市';
    }
    if (city == 'path3635') {
        res = '基隆市';
    }
    if (city == 'taipei_x5F_city') {
        res = '臺北市';
    }
    if (city == 'taoyuan_x5F_country') {
        res = '桃園市';
    }
    if (city == 'hsinchu_x5F_country') {
        res = '新竹縣';
    }
    if (city == 'hsinchu_x5F_city') {
        res = '新竹市';
    }
    if (city == 'miaoli_x5F_country') {
        res = '苗栗縣';
    }
    if (city == 'taichung_x5F_city') {
        res = '臺中市';
    }
    if (city == 'nantou_x5F_country') {
        res = '南投縣';
    }
    if (city == 'changhua_x5F_country') {
        res = '彰化縣';
    }
    if (city == 'yunlin_x5F_country') {
        res = '雲林縣';
    }
    if (city == 'chiayi_x5F_country') {
        res = '嘉義縣';
    }
    if (city == 'chiayi_x5F_city') {
        res = '嘉義市';
    }
    if (city == 'tainan_x5F_city') {
        res = '臺南市';
    }
    if (city == 'kaohsiung_x5F_city') {
        res = '高雄市';
    }
    if (city == 'pingtung_x5F_country') {
        res = '屏東縣';
    }
    if (city == 'taitung_x5F_country') {
        res = '臺東縣';
    }
    if (city == 'hualien_x5F_country') {
        res = '花蓮縣';
    }
    if (city == 'yilan_x5F_country') {
        res = '宜蘭縣';
    }
    if (city == 'path2679') {
        res = '連江縣';
    }
    if (city == 'path2651') {
        res = '金門縣';
    }
    if (city == 'path2482') {
        res = '澎湖縣';
    }
    if (city == 'path2525') {
        res = '臺東縣';
    }
    if (city == 'path2527') {
        res = '臺東縣';
    }
    if (city == 'path2462') {
        res = '高雄市';
    }
    return res;
}

function subStringTime(time) {
    return time.substr(0, 10);
}

function weatherHandler(da) {
    let data = da.records;
    // console.log(data);
    $('header h1').html(data.datasetDescription);

    $('body').on('mouseover', 'path', function() {
        $('.area').html('');
        $('.temperature').html('');
        $('.temperature_text').html('');
        let cityName = $(this).attr('id');
        for (let i in data.location) {
            if (cityIf(cityName) == data.location[i].locationName) {
                console.log(data.location[i]);
                $('.area').html(data.location[i].locationName);
                $('.date').html(subStringTime(data.location[i].weatherElement[0].time[0].startTime));
                $('.temperature').html(
                    `${data.location[i].weatherElement[2].time[0].parameter.parameterName}°C - ${data.location[i].weatherElement[4].time[1].parameter.parameterName}°C`
                );
                $('.temperature_text').html(data.location[i].weatherElement[0].time[0].parameter.parameterName);
            }
        }
    });
}
