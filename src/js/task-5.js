'use strict';

const PROMPT_COUNTRY = 'Укажите страну отправления: ';
const MESSAGE_CANCELLED = 'Отменено пользователем!';
const MESSAGE_WRONG_COUNTRY = 'В вашей стране доставка не доступна';

console.log('========================= Task 5 =========================');

const userCountry = prompt(PROMPT_COUNTRY);
let country = null;
let price;

if (userCountry == null) {
  console.log(MESSAGE_CANCELLED);
} else {
  switch (userCountry.toUpperCase()) {
    case 'КИТАЙ':
      country = 'Китай';
      price = 100;
      break;

    case 'ЧИЛИ':
      country = 'Чили';
      price = 250;
      break;

    case 'АВСТРАЛИЯ':
      country = 'Австралия';
      price = 170;
      break;

    case 'ИНДИЯ':
      country = 'Индия';
      price = 80;
      break;

    case 'ЯМАЙКА':
      country = 'Ямайка';
      price = 120;
      break;

    default:
      break;
  }

  if (country == null) {
    console.log(MESSAGE_WRONG_COUNTRY);
  } else {
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
  }
}
