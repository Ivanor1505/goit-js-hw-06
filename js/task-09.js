function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeСolorBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeСolorBtn.addEventListener('click', changeBcgColor);

function changeBcgColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
};