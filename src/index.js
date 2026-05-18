import './styles.css';

const img = document.querySelector("img");
fetch("https://api.giphy.com/v1/gifs/translate?api_key=FCwY3qvOLtEkZ5jj6fKZ9wjGWtUeOMuo&s=cats")
  .then(function(response) {
    return (response.json());
  })
  .then(function(response) {
    const catImage = response.data.images.original.url;
    console.log(catImage);
    img.src = catImage;
  });
