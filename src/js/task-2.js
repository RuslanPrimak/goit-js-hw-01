'use strict';
const MESSAGE_ORDER_DECLINED = 'На складе недостаточно товаров!';
const MESSAGE_ORDER_CONFIRMED = 'Заказ оформлен, с вами свяжется менеджер';
const MESSAGE_ORDER_FAILED = 'Указано неверное количество товара!';

const total = 100;
const ordered = 20;

console.log('========================= Task 2 =========================');

if (!(ordered > 0)) {
  console.log(MESSAGE_ORDER_FAILED);
} else if (ordered > total) {
  console.log(MESSAGE_ORDER_DECLINED);
} else {
  console.log(MESSAGE_ORDER_CONFIRMED);
}
