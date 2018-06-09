function getGiffy(){
    const query = $("input:nth(0)").val(); //wordnikAPI
    const url = `http://api.giphy.com/v1/gifs/search?q=random+${query}&api_key=${giffyAPI}`;
    const xhr = $.get(url + "&limit=50");
    xhr.done(function(data) { outputImgSrc(data); });
}

function outputImgSrc(data){
    console.log(data);
    let randomiser = Math.floor(Math.random() * 50)
    let id = data.data[randomiser].id;
    let imgSrc = `<img src="https://media.giphy.com/media/${id}/giphy.gif" width="350">`
    $("section").append($(imgSrc))
}