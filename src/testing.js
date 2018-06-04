
function giffyAPICall(key){
    let giffyAddress = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=";
    giffyAddress +  giffyKey + "&limit=5";
}

var xhr = $.get(giffyAPICall(key));
xhr.done(function(data) { console.log("success got data", data); });
