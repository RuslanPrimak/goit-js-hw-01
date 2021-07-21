'use strict';

const PROMPT_NUMBER = 'Введите число: ';
const ERROR_WRONG_MESSAGE = 'Было введено не число, попробуйте еще раз';

let input;
let total = 0;

while (true) {
  input = prompt(PROMPT_NUMBER);
  if (input === null) {
    break;
  } else {
    input = Number(input);
    if (Number.isNaN(input)) {
      alert(ERROR_WRONG_MESSAGE);
    } else {
      total = total + input;
    }
  }
}

alert(`Общая сумма чисел равна ${total}`);
