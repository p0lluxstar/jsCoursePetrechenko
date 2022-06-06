"use strict";

for (let i = 0; i < 3; i++){
    console.log(i);
    for (let j = 0; j < 3; j++){
        console.log(j);
    }
}

// Задача пирамидка

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 6;

for (let a = 1; a <= 6; a++){
    
    for (let b = 0; b < a; b++){
        result = result + '*';
    }
    
    result = result + '\n' // это перенос строки
}

console.log(result);

// еще пример вложенного цикла c меткой XXX

XXX: for (let x = 1; x < 4; x++){
    console.log(`XXX level: ${x}`);
    for (let y = 1; y < 4; y++){
        console.log(`YYY level: ${y}`);
    } for (let z = 1; z < 4; z++){
        if (z === 2) continue XXX; // как условие выполнится цикл сразу перескочет на начало и продолжит. если вместо contunue break, то цикл остановится
        console.log(`ZZZ level: ${z}`);
    }
}