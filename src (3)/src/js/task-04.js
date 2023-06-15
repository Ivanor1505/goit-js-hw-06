const counter = document.querySelector('#counter');
const decrementButton = counter.firstElementChild;
const incrementButton = counter.lastElementChild;
const counterValue = document.querySelector('#value');

let currentValue = 0;

decrementButton.addEventListener('click', () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementButton.addEventListener('click', () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});

// console.dir(counter);