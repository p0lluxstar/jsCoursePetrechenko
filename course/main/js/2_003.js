'use strict';

// Оператор опциоанльной цепочки. Обозначается как ?. Позволяет выполнять код если была выялена ошибка 

const  userData = {
    name: 'Ivan',
    age: null,
    say: function(){
        console.log('hello')
    }
};

userData.say();
userData.hey?.(); //ничего не будет выведено, если бы не ? была бы вывидена ошибка, в итоге код будет выполняться дальше

console.log(userData?.skills?.js); // undefined

