"use strict";

// оператор и &&

// const hamburger = true;
// const friest = true;

// if (hamburger && friest){
//     console.log('я сыт')
// }

// const hamburger = 2;
// const friest = 1;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && friest === 1){
//      console.log('все сыты');
// } else {
//     console.log('мы уходим');
// }

// важно!!! как только перестанет выполняеться условие, вернется значение переменной той, на которой перестало выполнться условие. Например conslole.log((hamburger === 3 && cola === 1 && friest === 1)) будет 0. Потому что cole присвоено значение 0. Другими словами оператор && всегда возвращает первое ложное значение.

// Если все аргументы верны и код дошел доконца, то возвращается значение последнего аргумента.

// console.log(1 && 0); // 0
// console.log(1 && 5); // 5
// console.log(null && 5); // null  
// console.log(0 && 'asdasfd'); // 0

// оператор или ||

// const hamburger = 3;
// const friest = 0;
// const cola = 0;

// if (hamburger || cola || friest ){
//      console.log('все довольны');
// } else {
//     console.log('мы уходим');
// }

// как только оператор или находит правду, он перестает работать. Если все неправда, возвращается последнее ложное значение

let jonhReport, alexReport, samReport, mariaReport = 'done';
console.log(jonhReport || alexReport || samReport || mariaReport); // done

const hamburger = 3;
const friest = 3;
const cola = 0;
const nuggest = 2;

if (hamburger === 3 && cola === 1 || hamburger === 3 && nuggest ){
     console.log('все довольны');
} else {
    console.log('мы уходим');
}

// оператор отрицание !. Возвращает противоположное значение.

console.log(!0) // true. 0 является false


// задачки

console.log( NaN || 2 || undefined); // 2 
console.log( NaN && 2 && undefined); // NaN
console.log( 1 && 2 && 3 ); // 3
console.log( !1 && 2 || 3); // 3
console.log( 25 || null && !3) // 25
console.log( NaN || null || !3 || undefined || 5); // 5
console.log( NaN || null && !3 && undefined || 5); // 5
console.log( 5 === 5 && 3 > 1 || 5); // true

const a = 3;
const b = 3;
const c = 0;
const d = 2;

if (a === 3 && c || b === 3 && d){
    console.log('Done');
}