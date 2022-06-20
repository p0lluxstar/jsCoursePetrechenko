'use strict';

const bx = document.getElementById('box');
const btn = document.getElementsByTagName('button'); 
const cls = document.getElementsByClassName('circle');
const oneHeart = document.querySelector('.heart');
const wrp = document.querySelector('.wrapper');
const hearts = document.querySelectorAll('.heart');
// const hearts = wrp.querySelectorAll('.heart'); // еще способ получения элемента со странице, здсеь мы указываем более кокретное место откуда будем брать элемент


// меняем inline стили элементам

// вариант 1
// bx.style.backgroundColor = 'blue';
// bx.style.width = '500px';

// вариант 2
bx.style.cssText = 'background-color: blue; width: 500px;'

btn[1].style.borderRadius = '100%';
cls[0].style.backgroundColor = 'red';

// что бы сразу поменять группе элементов стили, можно использовать циклы
// вариант 1

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

// вариант 2

hearts.forEach (item => {
    item.style.backgroundColor = 'blue';
});


// Основные методы для работы с элементами страницы

// создание нового элемента

const divEl = document.createElement('div'); // метод createElement создает элемент div, но пока только внутри js и на странице его пока нет

const text = document.createTextNode('Тут был я'); // создание текстового узлы, это элементы без оболочки тега, но такой метод используется редко

divEl.classList.add('black'); // метод add присваивает класс элементу, тоже пока что только внутри js

//document.body.append(divEl); // метод apped добовляет элемент div в конец элемента body и теперь после этого элемент отобразится на странице с классом 'black', т.е.  <div class="black"></div>

//document.querySelector('.wrapper').append(divEl); // добавит элемент div в конеце элемента wrapper

wrp.append(divEl); // добавили элемент div в конец элемента wrapper

// wrp.prepend(divEl); // добавили элемент div в начало элемента wrapper

// hearts[0].before(divEl); // Тоже добавляет элемент div перед первым элементом блока heart

// hearts[0].after(divEl); // Добавляет элемент div после первого элементa блока heart

// cls[0].remove(); // удалит первый элемент блока circles

// hearts[0].replaceWith(cls[0]); // первый элемент блока heart заменится на первый элемент блока circles


// Старые методы

// wrp.appendChild(divEl); // добавили элемент div в конец элемента wrapper

// wrp.insertBefore(divEl, hearts[0]); // добавит div перед первым элементов блок heart

// wrp.removeChild(hearts[1]); // удалит второй элемент блока heart родительского элемента wrapper

// wrp.replaceChild(cls[0], hearts[0]); // первый элемент блока heart заменится на первый элемент блока circles


// Редактирование элемента

divEl.innerHTML = '<h1>Hello world</h1>'; // метод innerHTML добавить текст в блок div, позволяет добавлять html структуру, т.е. теги

// divEl.textContent = 'Hello'; // textContent может добавить только текст в элемент

divEl.insertAdjacentHTML('beforeend', '<h2>Привет</h2>'); //добавить в конец блока div, <h2>Привет</h2>
