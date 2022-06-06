"use strict";

let num = 50;

// цикл while (пока что)

// while (num < 55){
//     console.log(num);
//     num++;
// }

// цикл do

// do{
//     console.log(num);
//     num++;
// }while (num < 55);

// цикл for

// for (let i = 1; i < 8; i++){
//     console.log(num);
//     num++;
// }

// цикл for с break. Цикл будет выполняться пока условие if не выполнится

for (let i = 1; i < 10; i++){
    if ( i === 7){
        break;
    }
    console.log(i);
}

// цикл for с continue позволять пропустить тот шаг который нам не нужен, но при этом продолжит дальше

for (let a = 1; a < 10; a++){
    if ( a === 7){
        continue;
    }
    console.log(a);
}
