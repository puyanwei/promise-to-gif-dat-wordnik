function getGiffy(){
  const query = getRandomWord() //wordnikAPI
  const url = `http://api.giphy.com/v1/gifs/search?q=random+${query}&api_key=${giffyAPI}`;
  const xhr = $.get(url + "&limit=50");
  xhr.done((data) => outputImgSrc(data));
}

function outputImgSrc(data){
  let randomiser = Math.floor(Math.random() * 50)
  let id = data.data[randomiser].id;
  let imgSrc = `<img src="https://media.giphy.com/media/${id}/giphy.gif" width="350">`
  $("section").append($(imgSrc))
}

async function getRandomWord(){
  let randomWord;
  const url = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${wordnikAPI}`

  await fetch(url)
    .then(response => response.json())
    .then(data => randomWord = data.word)
    .then(word => outputWord(word))
    .catch(err => console.log(err));
  return randomWord;
}

function outputWord(query) {
  $("section").append($(`<p>${query}</p>`))
}
