function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorValue = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', handlerBtn);

function handlerBtn(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}
