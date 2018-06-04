
function getGiffy(){
    let key = $("input").val();
    let giffyAddress = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=";
    var xhr = $.get(giffyAddress +  key + "&limit=5");
    xhr.done(function(data) { console.log("success got data", data); });
}

// http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
