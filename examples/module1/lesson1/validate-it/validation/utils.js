export const isNotEmpty = () => {
  return (value) => Boolean(value);
};

export const isInteger = () => {
  return (value) => Number.isInteger(Number(value));
};

export const isMoreThan = (condition) => {
  return (value) => Number(value) > condition;
};

export const isLessThan = (condition) => {
  return (value) => Number(value) < condition;
};

export const isEven = () => {
  return (value) => Number(value) % 2 === 0;
};
