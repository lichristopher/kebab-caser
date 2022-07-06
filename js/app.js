const textArea = document.querySelector('textarea');
const kebabTextDisplay = document.querySelector('#kebab-case-display');

textArea.addEventListener('input', function (e) {
  kebabTextDisplay.textContent =
    textArea.value.toLowerCase().split(' ').join('-') + '.js';
});
