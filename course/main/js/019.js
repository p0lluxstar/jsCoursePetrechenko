"use strict";

// функция declaration. Ее можно вызвать до ее написания (объявления), т.е. выше по коду.

function calc(a, b){ 
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(7, 9));


function ret(){
    let num = 50;

    return num;
}

const newNum = ret();
console.log(newNum);

// функция expression. Можно вызвать только после объявления.

const logger = function(){
    console.log('Hello');
};

logger();

// стрелочная функция. Она была добавлена es6

const calc2 = (a, b) => {
    return a + b;
}
