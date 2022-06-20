"use strict";

/*
Когда мы работаем с примитивными типами данных, то они передеются по значению a = 5. b = a + 5 = 10. Не примитивные передеются по ссылке. 

Копирование объектов. Есть глубокая и поверхностная копия. При поверхностном скопируются толко свойства на первом уровне. А что будет глубже будет передаваться через ссылку. Поверхностное копирование через метод Object.assign.

Копирование массивов. Поверхностное копирование массива через метод slice и оператор разворота spread (...)

Копирование объекта с помощью оператора разворота spread (...) 
*/

const obj = {
    a: 10,
    b: 20
}

const obj2 = obj;

obj2.a = 12.2;

console.log(obj); // { a: 12.2, b: 20 }
console.log(obj2); // { a: 12.2, b: 20 }

// obj поменялся, потому что объектры передеются по ссылке

// Поверхностная копия объекта через цикл. Копирут только свойства 1-го уровня

function copy(mainObj){
    let copyObj = {};

    let key;

    for (key in mainObj){
        copyObj[key] = mainObj[key];
    }

    return copyObj;

};

const numbers = {
    a: 10,
    b: 30,
    c: {
        x: 40,
        y: 50
    }
};

const newNubers = copy(numbers);

numbers.a = 10.55;

console.log(numbers); // { a: 10.55, b: 30, c: { x: 40, y: 50 } }
console.log(newNubers); // { a: 10, b: 30, c: { x: 40, y: 50 } }


// Поверхностное копирование оъекта через Object.assign

const obj3 = {
    a: 10,
    b: 20
}

const cloneObj3 = Object.assign({}, obj3);

cloneObj3.b = 20.55;

console.log(obj3); // { a: 10, b: 20 }
console.log(cloneObj3); // { a: 10, b: 20.55 }


// Поверхностная копия массива через .slice

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();

oldArr[0] = 'aaa';

console.log(oldArr); // [ 'aaa', 'b', 'c' ]
console.log(newArr); // [ 'a', 'b', 'c' ]


// Оператор разворота spread (...) для копирования массива. Появлся в ES6. А для массивов появился в ES8

const video = ['youtube', 'rutube'];
const blogs = ['wordpress', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook']; // [ 'youtube', 'rutube', 'wordpress', 'blogger', 'vk', 'facebook' ]

console.log(internet);

// еще пример разворат через функцию

function log(a, b, c){
    console.log(a); // 2
    console.log(b); // 5
    console.log(c); // 7
};

const logArr = [2, 5, 7];

log(...logArr);


// Оператор разворота для копирования объекта

const obj4 = {
    one: 1,
    two: 2
}

const newObj4 = {...obj4};

obj4.one = 'a';

console.log(obj4); // { one: 'a', two: 2 }
console.log(newObj4); // { one: 1, two: 2 }