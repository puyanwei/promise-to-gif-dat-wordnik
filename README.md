# Promise to Gif Dat Wordnik!

I wanna get better with using promises and async, so I'm doing this project to grab data from APIs and send that to the giffy API to get back a result.

![d210c922919de7c48f2f91ce396c8bf7](https://user-images.githubusercontent.com/14803518/41194925-9ae19f68-6c1b-11e8-81a2-8ddfdd9347e2.gif)

### Tech Stack

- Javascript
- HTML
- Jquery
- Wordnik and Giffy API

### Installation

```
git clone git@github.com:puyanwei/promise-to-gif-dat-wordnik.git
cd promise-to-gif-dat-wordnik
```

You must have a [wordnik](https://developer.wordnik.com/) and [giffy](https://developers.giphy.com/) API key by signing up. Once you have them create a new file in the src folder called api-keys.js.
Inside this file write the following;

```
const wordnikAPI = "[YOUR_WORDNIK_API_KEY]"
const giffyAPI = "[YOUR_GIFFY_API_KEY]"
```

Save the file. This file will be hidden via the .gitignore file.

```
open index.html
```

### My Process Steps

1.  Grab Wordnik API, load it into console.
2.  Create super basic interface.
3.  Parse data onto page.
4.  Refactor and style page.

### $(get)/fetch() vs Async/Await

I had a real insight into using both Jquery's get and vanilla Javascript's fetch(). With these handing the promise returned and then applying .json() to it which returns another promise can make it quite confusing especially considering it uses multiple callbacks and the new syntax of the arrow functions.

The use of functional programming where we can chain together functions makes it clear of its synchronous nature. However, I had difficulty in applying my final data to a variable, as the promises would not finish fast enough and my variable would end up running before that could happen.

Async/Await is an interesting approach where we change the "type" of function itself to allow the keyword await to be used inside it to force it to be synchronous.

Although it lacks the chaining slickness of the callback style, I find that it is more readable in a way for a user to work it out, without needing prior knowledge.

I kept randomWord() to have a mix of callbacks and await/async and getGiffy() to only use await/async.
