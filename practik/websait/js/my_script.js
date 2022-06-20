/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимостьaa",
        "Скотт Пилигрим против...",
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

const promoAdv = document.querySelector('.promo__adv'); // получаем элементы блока с классом promo__adv
const imgAdv = promoAdv.getElementsByTagName('img'); // получаем псевдомассив всех тегов img блока класса promo__adv

for(let i = 0; i < imgAdv.length; i++){
    imgAdv[i].remove();
    i--;
 }


 // 2) Изменить жанр фильма, поменять "комедия" на "драма"

const genre = document.getElementsByClassName('promo__genre');
genre[0].textContent = 'Драма';


// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS

const bg = document.getElementsByClassName('promo__bg');
bg[0].style.cssText = 'background: url(img/bg.jpg); background-position: top;';


// 4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
// 5) Добавить нумерацию выведенных фильмов

const moviesList = document.getElementsByClassName('promo__interactive-item'); // получаем весь список со странице

movieDB.movies.sort(); // сортирует в алфавитном порядке элемменты в массиве

for (let i = 0; i < moviesList.length; i++){
    moviesList[i].innerText = `${[i + 1]}: ${movieDB.movies[i]}`;
};