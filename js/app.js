const textArea = document.querySelector('textarea');
const button = document.querySelector('button');
const kebabTextDisplay = document.querySelector('#kebab-case-display');

button.addEventListener('click', function (e) {
  kebabTextDisplay.textContent = textArea.value
    .toLowerCase()
    .split(' ')
    .join('-');
});
