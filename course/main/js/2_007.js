"use strict";
/*
Итерируемый объектр этот тот объект, который можно использовать в for of. Массив, строк, map и дом коллекции итерируемый объектры, объект нет.
Первое приемущество перебора for of это строгое соответствие порядков в переборе, как оно было записано в оригинале так оно и будет выполняться.
Второе приемущество это исключение всех лишних свойств, которые могут быть унаследованы.

Дословно итератор это метод который возвращает объект с методом next.
*/

const objNew = {
    name: 'Jonh',
    age: 31
};

//for in

for (const key in objNew){
    console.log(objNew[key]); // перебераются все свойства объектра
}

const arrNew = ['a', 'b', 'c'];

for (const key in arrNew){
    console.log(arrNew[key]) // перебераются все свойства массива
}

// for of

for (const key of arrNew){ // переберает значния массива
    console.log(key);
}


// перебераем объект с помощью for of

const aa = {
    jonh: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function(){
        console.log('hello');
    }
};

aa[Symbol.iterator] = function(){
    return {
        current: this.jonh,
        last: this.ann,

        next(){
            if (this.current < this.last){
                this.current = this.current + 500;
                return {done: false, value: this.current};
            }
            else {
                return {done: true};
            }

        }
    }
}

for (let res of aa){
    console.log(res);
}





