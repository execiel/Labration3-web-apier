function fetchNewest() {
  fetch("/api/getNewest")
    .then((data) => {
      return data.json();
    })
    .then((spritesData) => {
      console.log(spritesData);
      displayPreviews(spritesData.sprites);
    });
}

function fetchOldest() {
  fetch("/api/getOldest")
    .then((data) => {
      return data.json();
    })
    .then((spritesData) => {
      console.log(spritesData);
      displayPreviews(spritesData.sprites);
    });
}
