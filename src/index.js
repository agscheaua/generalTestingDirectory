import './styles.css';


const button = document.querySelector("button");
const img = document.querySelector("img");
const gifTheme = document.getElementById("gifTheme");

const gifsContainer = [];

let topicName;
function fetchGif(topic) {
  for (let i = 0; i <= 8; i++) {
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=4LsvwfUDVa22JwbgNJrHzI7dPfY14rfT&s=" + String(topic))
      .then(function(response) {
        if (response.ok) {
          return (response.json());
        } else {
          console.log("Response problems.");
        };
      })
      .then(function(response) {
          const imageReturned = response.data.images.original.url;
          gifsContainer[i] = imageReturned;
          img.src = gifsContainer[0];
          console.log(gifsContainer);
      });
  };
  topicName = topic;
};

let gifIndexInArray;
function randomNr() {
  let createRandomNr = Math.random();
  let randomNrGiven = Math.floor((createRandomNr * 8));
  if (randomNrGiven === 0) {
    gifIndexInArray = randomNrGiven;
    return;
  } else {
    let initalNr = Math.floor((createRandomNr * 8) + 1);
    gifIndexInArray = initalNr;
  };
};

function searchForNewGifs() {
  button.addEventListener("click", (eve) => {
    eve.preventDefault();
    console.log(gifTheme.value);
    if (gifTheme.value === "") {
      console.log("Invalid search value.");
    } else if (gifTheme.value === topicName) {
      console.log("The search value was not changed.");
      randomNr();
      img.src = gifsContainer[gifIndexInArray];
    } else {
      fetchGif(gifTheme.value);
      randomNr();
    };
  });
};
searchForNewGifs();



