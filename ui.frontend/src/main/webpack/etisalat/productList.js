
var payload = {categoryId: "cat580028", navigationState: "", No: "0", Nrpp: "100"}
function resultItemTemplateList(resultData) {
    var items = [];
    var listItems = [];

    items = resultData;
    if (items != null) {

        $.each(items, function (key, val) {
            if (val != null) {

             console.log(val);
            }
        });
        return listItems;
        
    }
}
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
function getProductList(payload) {
    var dataObjJSON = JSON.stringify(payload, null, 2);  
    $.ajax({
        type: 'POST',
        datatype: 'json',
        crossDomain: true,
        url: "https://www.etisalat.ae/b2c/eshop/getProductsByCategory?locale=en",

        headers: {
            "Content-Type": "application/json",
            "x-calling-application": "cms"
        },
        encode: true,
        data: JSON.stringify(dataObjJSON),
       
        error: function (response) {
            console.log(response);
        }
    })
        .done(function (json) {
          
            storesLoaded = true;
            $(".loader-disable-screen").hide();
            storeLocatorData = (isJson(json) === false) ? json : JSON.parse(json); // enable this for cms
            
            resultItemTemplateList(storeLocatorData)


            return true;
        });


}

getProductList(payload);