"use strict";

/*
Set. Особый вид коллекций где каждое значение может повторяться только один раз. Set предствляет из себя массив. Перебор элементов set.
*/

const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr); // создаем новый сет(набор)
console.log(set); // Set(5) { 1, 2, 4, 5, 6 }

const newArr = ['Alex', 'Jonh', 'Anna', 'Alex'];
const setNewArr = new Set(newArr);

// методы set

setNewArr.add('Ivan'); // добавляет значение

console.log(setNewArr);

// //базовые команды
// setNewArr.delete(value);
// setNewArr.has(value);
// set.clear();
// set.size;

// перебор set
// первый вариант
// for (let value of setNewArr)
// console.log(value);

// второй вариант
setNewArr.forEach((value, valueAgaing, setNewArr) => {
console.log(value, valueAgaing);
});

// филтрация массива с помощью set
const data = ['Evgeniy', 'Alex', 'Vika', 'Evgeniy']

function unique(arr) { 
    return Array.from(new Set(arr)); // с помощью сет можно удлаить из массива дублирующие элементы, вернется массив с уникальными значениями
}

console.log(unique(data)); // [ 'Evgeniy', 'Alex', 'Vika' ]