/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () =>{ // событие которое не дожидается полной загрузки всех элементов страницы, а только построение dom структуры. Т.е. это значит что ниже код сработает только тогда, когда будет загружена DOM структруа

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    // Удалить все рекламные блоки со страницы (правая часть сайта)
    
    const adv = document.querySelectorAll('.promo__adv img'); // получили все элементы img, блока с классом .promo__adv
    
    const deleteAdv = (arr) => {
        arr.forEach(item =>{
            item.remove(); // удаляем все элементы img в блоке с классом .promo__adv
        });
    };
    
    // Изменить жанр фильма, поменять "комедия" на "драма"
    // Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS

    const genre = document.querySelector('.promo__genre'); // получаем элемент div с классом .promo__genre
    const poster = document.querySelector('.promo__bg'); // получаем div с классом .promo__bg

    const makeChanges = () => {
        genre.textContent = 'Драма'; // мегяем текст "комедия" на "драма"
        poster.style.backgroundImage = 'url("img/bg.jpg")'; // меняем фоновую картинку блока div с классом .promo__bg
    };
    
    // Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
    // Добавить нумерацию выведенных фильмов
    
    const movieList = document.querySelector('.promo__interactive-list'); // получаем элемент с классом promo__interactive-list
    
    const sortArr = (arr) => {
        arr.sort(); // сортируем фильмы в алфавитном порядке
    };
    
/*
Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
*/

    const addForm = document.querySelector('form.add'); // получаем значение элемента c классом add
    const addInput = addForm.querySelector('.adding__input'); // получаем значение элемента с классом .adding__input
    const checkbox = addForm.querySelector('[type="checkbox"]'); // получаем значение чекбокса
    
    addForm.addEventListener('submit', (event) =>{ // назначаем обработчик событий на форму addForm, что бы отследить отправку формы используем обработчик события sumbit
        event.preventDefault(); // метод который отменяет дефолтное поведение браузера, т.е. при нажатии на кнопку Подтвердить, страницу не будет перезагружаться

        let newFilm = addInput.value; // получаем то, что ввел польователь в форму с помощью свойста value
        const favorite = checkbox.checked; // оброщаемся к чекбоксу, т.е. к галочки которая может быть отмечена а может нет, что бы получить это значение (булиново значение) используем совойство checked. True будет возвращаться кодгда отмечена галочка, false когда не отмечена

        if (newFilm) { // с помощью этой фукнции не будут добавляться пустые значения в список. Есл пользователь ничего не ввел будет возвращаться false, и ничего не добавится

            if (newFilm.length > 21) { // Если название фильма больше, чем 21 символ - обрезать его и добавить три точки 
                newFilm = `${newFilm.substring(0, 22)}...`; // метод substing обрезает строку
            }

            if (favorite) {
                console.log('Добавляем любимый фильм'); // в консоль выводится сообщение если поставлена галочка, что фильм любимый
            }

            movieDB.movies.push(newFilm); // с помощью метода push будет добавляться введеный пользователем в форму фильм в массив movieDB
            sortArr(movieDB.movies); // сортирует по алфавиту фильмы в массиве movieDb
    
            createMovieList(movieDB.movies, movieList); // функция которая добавляет фильм в массив
        }

        event.target.reset(); // очищает форму после добавелния фильма в список

    });

    function createMovieList(films, parent){
        parent.innerHTML = ''; // удаляем все что внутри элемента с классом .promo__interactive-list

        sortArr(films); // вызов функции отвечающая за сотрировку фильмов в списке

        films.forEach((film, i) => { // передаем два значения, это значение каждого свойства массива movies, и порядковый номер этого элемента
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film} 
                <div class="delete"></div>
            </li>`; // добавляем кусок кода с порядковм номером и названием фильма, т.е. добавляет новый фильм в список 
        });

        // При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

        document.querySelectorAll('.delete').forEach((btn, i) => { // получаем значение кнопки
            btn.addEventListener('click', () => { 
                btn.parentElement.remove(); // добавляем событие при клике, удаление элемента       
                movieDB.movies.splice(i, 1); // метод splice удаляет элемент в массиве, i это номер с которого будет удаляться элемент в массиве, 1 это означает сколько элементов удалится

                createMovieList(films, parent); // заново присваивается нумерация фильмам в списке
            });
        });

    }


    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList); //вызываем функции
})

