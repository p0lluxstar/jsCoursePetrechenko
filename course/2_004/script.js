'use strict';

// Живые коллекции. Метод mathces и closest

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery[0].remove();
boxesGet[0].remove();

console.log(boxesQuery); // статичная коллекция, не живая, она отображает отпечаток, document.querySelectorAll('.box');  а не то что на самом деле, а на самом деле у нас был удален один элемент, но здесь это не будет отображаться

console.log(boxesGet); // здесь мы получим результат который называется живыми коллекциями, т.е. в этом результате будут учтены две команды удаления элементов, которые выше. Текущее состояние dom дерева

//console.log(document.body.children); // получаем значение всех дочерних элемнтов body

console.log(Array.from(boxesGet)); // превращение псевдомассива в массив, но это мудет не живой элемент

// метод mathes. С помьщью этого метода можно получить значение нужно элемента. В примере ниже, получим значение элеметна с классом .this 

boxesQuery.forEach(box => {
    if(box.matches('.this'))
    console.log(box);
});

// метод closest. Этот метод ищет по всей цепочки тегов тот блок у которого есть селектор например class='wrapper'. 

console.log(boxesQuery[0].closest('.wrapper'));

