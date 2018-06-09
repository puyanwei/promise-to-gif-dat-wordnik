async function controller() {
  const word = await getRandomWord();
  const giffyId = await getGiffy(word);
  outputWord(word);
  outputImgSrc(giffyId);
}

async function getGiffy(query) {
  const randomiser = Math.floor(Math.random() * 50);
  const url = `http://api.giphy.com/v1/gifs/search?q=random+${query}&api_key=${giffyAPI}&limit=50`;
  const response = await fetch(url);
  const giffyData = await response.json();
  const giffyId = await giffyData.data[randomiser].id;
  return giffyId;
}

async function getRandomWord() {
  let randomWord;
  const url = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${wordnikAPI}`;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => (randomWord = data.word))
    .catch((err) => console.log(err));
  return randomWord;
}

function outputWord(query) {
  $('section').prepend($(`<h3>${query}</h3>`));
}

function outputImgSrc(id) {
  let imgSrc = `<img src="https://media.giphy.com/media/${id}/giphy.gif" width="350">`;
  $('section').prepend($(imgSrc));
}
