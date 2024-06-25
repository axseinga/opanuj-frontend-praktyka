import { validateValue, clearValueInput } from './validation/functions.js';

function init() {
  const input = document.getElementById('input');
  const submitButton = document.getElementById('submitButton');
  const clearButton = document.getElementById('clearButton');
  const result = document.getElementById('result');

  submitButton.addEventListener('click', () =>
    validateValue(input.value, result)
  );
  clearButton.addEventListener('click', () => clearValueInput(input, result));
}

init();
