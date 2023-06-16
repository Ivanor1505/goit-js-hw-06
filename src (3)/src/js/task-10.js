function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const selectors = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes')
}

selectors.createBtn.addEventListener('click', createBoxes);
selectors.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = selectors.input.value;
  const boxes = [];

  for (let i = 0; i < amount; i+=1){
    const size = 30 + i * 10;
    const div = document.createElement('div');

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.push(div);
    console.log(boxes);
  }
  selectors.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  selectors.boxesContainer.innerHTML = '';
}