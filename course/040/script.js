"use strict";

// Разные методы получения элементов (первых, поледний, элементы соседий, родителей, детей)

// console.log(document.body); // получение элемента тега body
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild); // получение первого дочернего элемента, тега body
// console.log(document.body.lastChild); // получение последнего дочернего элемента, тега body
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement); // получение родительского элемента #current
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // получение элемента с атрибутом data-current="3". 

// перебераем элементы псевдомассива c нодами(свойствами)

for (let node of document.body.childNodes){
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}

