let color = null;

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);

function onStart() {
  color = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  start.setAttribute('disabled', '');
  stop.removeAttribute('disabled');
}

function onStop() {
  clearInterval(color);

  stop.setAttribute('disabled', '');
  start.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}