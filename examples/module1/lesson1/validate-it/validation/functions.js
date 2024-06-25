import { ERROR_MESSAGE, SUCCESS_MESSAGE, CONDITIONS } from './consts.js';

export const validateValue = (value, result) => {
  const isValidationSuccess = CONDITIONS.every((condition) =>
    condition(value)
  );

  if (isValidationSuccess) {
    result.innerHTML = SUCCESS_MESSAGE;
  } else {
    result.innerHTML = ERROR_MESSAGE;
  }
};

export const clearValueInput = (input, result) => {
  input.value = '';
  result.innerHTML = '';
};
