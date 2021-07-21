'use strict';

const PROMPT_AMOUNT = 'Сколько дроидов купить?';
const MESSAGE_CANCELLED = 'Отменено пользователем!';
const MESSAGE_AMOUNT_ERROR = 'Указано неверное количество!';
const MESSAGE_INSUFFICIENT_FUNDS = 'Недостаточно средств на счету!';

function getOrderMessage(number, balance) {
  return `Вы купили ${number} дроидов, на счету осталось ${balance} кредитов.`;
}

console.log('========================= Task 4 =========================');

const credits = 23580;
const pricePerDroid = 3000;

const amount = prompt(PROMPT_AMOUNT);

if (amount === null) {
  console.log(MESSAGE_CANCELLED);
} else if (amount > 0) {
  let totalPrice = amount * pricePerDroid;
  if (totalPrice > credits) {
    console.log(MESSAGE_INSUFFICIENT_FUNDS);
  } else {
    console.log(getOrderMessage(amount, credits - totalPrice));
  }
} else {
  console.log(MESSAGE_AMOUNT_ERROR);
}
