'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
const MESSAGE_CANCELLED = 'Отменено пользователем!';
const MESSAGE_WELCOME = 'Добро пожаловать!';
const MESSAGE_ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';

let message;
const password = prompt('Введите пароль:');

if (password === null) {
  message = MESSAGE_CANCELLED;
} else if (password === ADMIN_PASSWORD) {
  message = MESSAGE_WELCOME;
} else {
  message = MESSAGE_ACCESS_DENIED;
}

alert(message);
