const container = document.querySelector('.container');
const unsplashURL = `http://source.unsplash.com/random/`;
const row = 10;

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}

// return ex: 302x303
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

for(let i = 0; i < row * 4; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}
