'use strict';

const PROMPT_NUMBER = 'Введите число: ';
const ERROR_WRONG_MESSAGE = 'Было введено не число, попробуйте еще раз';

let input;
let total = 0;

console.log('========================= Task 6 =========================');

while (true) {
  input = prompt(PROMPT_NUMBER);
  if (input === null) {
    break;
  } else {
    input = Number(input);
    if (Number.isNaN(input)) {
      console.log(ERROR_WRONG_MESSAGE);
    } else {
      total = total + input;
    }
  }
}

console.log(`Общая сумма чисел равна ${total}`);
