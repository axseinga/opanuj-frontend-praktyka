import {
  isNotEmpty,
  isInteger,
  isMoreThan,
  isLessThan,
  isEven,
} from './utils.js';

export const ERROR_MESSAGE = 'Invalid';
export const SUCCESS_MESSAGE = 'Valid';

export const CONDITIONS = [
  isNotEmpty(),
  isInteger(),
  isMoreThan(0),
  isLessThan(100),
  isEven(),
];
