"use strict";

if (4 == 7){
    console.log('ok');
} else {
    console.log('error');
}


const num = 50;

if (num < 50){
    console.log('Error');
} else if (num > 50) {
    console.log('Много');
} else {
    console.log('ok');
}


// тенарная операция

(num === 50) ? console.log('ok') : console.log('error');


// swith

const num2 = 100;

switch (num2){
    case 50:
        console.log('не верно');
        break;
    case 100:
        console.log('верно');
        break;
    case 150:
        console.log('не верно');
        break;
    default:
        console.log('не в этот раз');
        break;   
}