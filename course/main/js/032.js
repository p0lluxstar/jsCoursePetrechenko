"use strict";

/*
Динамическая типизация это возможность одного типа данных превращаться в другой.
0, '', null, underfined, Nan; - это всегда false, все осатльное true. Пустые массивы, объекты тоже true.
Примеры изменения типа данных.
*/

// to string

// 1 
console.log(typeof(String(null))); //string, преобразование null в строку
console.log(typeof(String(4))); //string, преобразование null в строку

// 2
console.log(typeof(null + '')); //string. Всегда все что складывается со строкой преващается в строку

const num = 5;
console.log('http://vk.com/catalog/' + num); // пример использования динамичесой типизации

// to number

// 1
console.log(typeof(Number('4'))); //number

// 2
console.log(typeof(+'5')); //number, унарный + меняет строку на цифру

// 3
console.log(typeof(parseInt('15px', 10))); //number, 10 это значит в десятичной системе

// to boolean

// 0, '', null, underfined, Nan; - это всегда false, все осатльное true. Пустые массивы, объекты тоже true

// 1 Нативное преобразование 
let a = null;

if (a){
    console.log('hi'); // это не сработает потому что в if приходит null, т.е. false
}

a = 1;

if (a){
    console.log('hi'); // hi
}

// 2
console.log(typeof(Boolean('4'))); //boolean

// 3
console.log(typeof(!!'hi')); //bollean