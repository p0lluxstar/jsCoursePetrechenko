"use strict";

// 021
// Внутри функции цикл и условие. Функция всегда что то возвращает. Если даже она ничего не выполняет, то возвращает undefind. Например conslot.log('11'). Это другими словами метод log функции console. Оно отоброизит 11, но вернет все равно undefind. Это легко проверить, набрать этот код в консоли браузера. И если в функции не прописано rerutn, она тоже возвращает undefind

const usdCurs = 28;
const discount = 0.9;

function convert(amoutn, curs){
    return amoutn * curs;
} 

function promotion (result){
    console.log(result * discount);
}

const res = convert(500, usdCurs);

promotion(res);


// внутри функции цикл, условие. Этот пример показывает что функцию можно закончить досрочно

function test(){
    for (let i = 0; i < 5; i++){
        console.log(i);
        if (i === 3) return
    }   
}

test();