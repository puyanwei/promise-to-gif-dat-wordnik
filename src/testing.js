let giffyKey = "eUE4x88RaPqfRC2AN3ryVBIeZu4cr24F"
let giffyAddress = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key="

let giffyAPICall = (giffyAddress +  giffyKey + "&limit=5");

var xhr = $.get(giffyAPICall);
xhr.done(function(data) { console.log("success got data", data); });
