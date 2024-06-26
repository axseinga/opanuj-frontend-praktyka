export const add = (a: number, b: number): number => {
  return a + b;
};

export const substract = (a: number, b: number): number => {
  return a - b;
};

export const multiply = (a: number, b: number): number => {
  return a * b;
};

export const divide = (a: number, b: number): number | string => {
  if (b === 0) {
    return 'Error. You cannot divide by 0.';
  } else return a / b;
};

type OperationT = 'ADD' | 'SUBSTRACT' | 'MULTIPLY' | 'DIVIDE';

export const calculate = (a: number, b: number, operation: OperationT) => {
  switch (operation) {
    case 'ADD':
      return add(a, b);
    case 'SUBSTRACT':
      return substract(a, b);
    case 'MULTIPLY':
      return multiply(a, b);
    case 'DIVIDE':
      return divide(a, b);
    default:
      return;
  }
};
