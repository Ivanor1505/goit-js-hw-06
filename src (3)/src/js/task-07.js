const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', onInput)

function onInput() {
    const fontSize = fontSizeControl.value + 'px';
    text.style.fontSize = fontSize;
}
  
console.dir(fontSizeControl);