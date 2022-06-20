'use strict';

/*
DOM - docoment object modul - объектная модель документа. Методы которые позволяют взаимодействовать со страницей для того что бы получить элементы в js.
*/

// СТАРЫЕ МЕТОДЫ

// получить значение элемента по id

const box = document.getElementById('box');
console.log(box); // венется значение элемента с id box


// получить значение элемента по имени тега

// вариант 1
const btn = document.getElementsByTagName('button')[1]; 
console.log(btn); // вернется значение элемента с индексом 1 из коллекции элементов (псевдомассива) buttom. Если убрать [1], то вернется коллеция элементов всех button

// вариант 2 
const btn2 = document.getElementsByTagName('button');
console.log(btn2[3]);


//получни значение элементов по имени класса элементов

const cls = document.getElementsByClassName('circle');
console.log(cls); // вернется html коллекция элементов (псевдомассив) с классом circle. Что бы к конерктному элементу обратиться нужно указать индекс в квадратных скобках


// НОВЫЕ МЕТОДЫ

// получаем значение через селекторы

const hearts = document.querySelectorAll('.heart');
console.log(hearts); // получаем nodelist (это как и html коллекция, только лучше, в ней например можно использовать метод forEach) всех элементов с классом heart.

hearts.forEach(item => {
    console.log(item); // выведит все элементы находщиеся в nodelist
});


// получить значение первого элемента селектора

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);