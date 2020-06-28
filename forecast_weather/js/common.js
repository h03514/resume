function pa(data) {
    alert(data);
}

function cslog(arr) {
    console.log(JSON.stringify(arr));
}

function paUrl(da) {
    console.log(da);
}

function AjaxJson(ref, params, callback) {
    var Async = false;
    var ProDa = true;
    var ConType = true;
    if (ref.async !== undefined) {
        Async = ref.async;
    }
    if (ref.proda !== undefined) {
        ProDa = ref.proda;
    }
    if (ref.contype !== undefined) {
    }
    ConType = ref.contype;
    return $.ajax({
        url: ref.url,
        data: ref.data,
        type: ref.type,
        dataType: 'json',
        processData: ProDa,
        contentType: ConType,
        async: Async,
        error: function(xhr, ajaxOptions, thrownError) {
            pa(ref.url + '|' + xhr.responseText);
        },
        success: function(json) {
            callback({ params: params, json: json });
        },
        beforeSend: function() {
            $('.loader').show();
        },
        complete: function() {
            $('.loader').hide();
        },
    });
}

let authApi = 'http://test-common.qve.com.tw/auth.aspx';
