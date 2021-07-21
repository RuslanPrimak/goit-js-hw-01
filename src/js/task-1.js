'use strict';

const name = 'Генератор защитного поля';
let price = 1000;

function getMessage() {
  return `Выбран «${name}», цена за штуку ${price} кредитов`;
}

console.log(getMessage());

price = 2000;

console.log(getMessage());
