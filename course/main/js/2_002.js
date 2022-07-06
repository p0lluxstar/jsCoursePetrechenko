'use strict';

// Оператор нулевого слияния (нулишь). Он появился в ES 11. Обозначается как ??. реагирует не на все false значения а только на Null или undefind.

let userName;

console.log(userName); // undefined
console.log(userName ?? 'User'); // User