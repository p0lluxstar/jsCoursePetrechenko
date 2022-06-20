"use strict";

/*
JS Объективно-ориентированный язык программирования. Главным является объект. Любые конструкции прототипно наследуются от объектов. Прототипность это простыми словами способность наследовать свойства от главного объекта (прототипа).

JS можно назвать протатипно-ориентированным языком, это частный случай ООП, один из его стилей.
*/

let str = 'some';
let strObj = new String(str);

console.log(typeof(str)); // string
console.log(typeof(strObj)); // object



const car = {
    whell: 4,
}

const newCar = Object.create(car); 

// использование прототипа, старый способ, сейчас лучше не использовать

// newCar.__proto__ = car;

// console.log(newCar.whell); // 4

// новый способ

Object.setPrototypeOf(newCar, car); // установили протоип car для newCar, т.е. car передал все свои значения newCar
console.log(newCar.whell); //4

const cityes = {
    a: 'Moscow',
    b: 'Kaluga'
}

const newCityes = Object.create(cityes); // А эта команда сразу создает новый объект newCityes и устанавливает, что cityes будет его прототипом, который будет передавать все свои значения newCityes

console.log(cityes); // { a: 'Moscow', b: 'Kaluga' }