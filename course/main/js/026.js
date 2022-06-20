"use strict";

// Метод FOR IN. Как подсчитать количество свойств в объкте. Диструктуризация объекта - это т.е. как достучаться к свойствам внутренних объектов в объекте. Диструктуировать это значить разделить целое на более мелькие кусочки. 

const obj = new Object(); // пример создани объекта, но такой способ не рекомендуется использовать

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}

// console.log(options.color); 

// delete options.name; // удаляет свойства в объекте
// console.log(options);


// Цикл который перебирает все свойства и значения объекта. И подсчитывает количество свойств в объекте
let hmProperty = 0;
for (let key in options){ //for in работает только с объектами, есть еще for of который работает с массиваподбными сущностями
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            hmProperty++;
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        hmProperty++;
    }
    
}

console.log(hmProperty); // выводит количество свойств в объекте


// еще один способо определить количество свойств верхнего уровня у объекта

const options2 = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}

console.log(Object.keys(options2).length); // метод Object.keys возвращает массив со значениями свойств объекта

// функция в объекте

const options3 = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('test');
    }
}

options3.makeTest(); // выводит выполнение функции в объекте

// Диструктуризация объекта - это т.е. как достучаться к свойствам внутренних объектов в объекте. Диструктуировать это значить разедлить целое на более мелькие кусочки.

const{border, bg} = options3.colors; 
console.log(border); // black
