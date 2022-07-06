'use strict';

document.addEventListener('DOMContentLoaded', () =>{

    const movieDB = {
        movies: [
        ]
    };

const addForm = document.querySelector('.add'); 
const addInput = document.querySelector('.adding__input'); 
const movieList = document.querySelector('.promo__interactive-list'); // получаем элемент с классом promo__interactive-list

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newFilm = addInput.value; // value свойство с помощью которого возвращается введеное пользователем значение

    if (newFilm.length > 20){
        newFilm = `${newFilm.substring(0, 21)}...`;
    }

    if (newFilm){ // если значение пустое будет выходить сообщение
        movieDB.movies.push(newFilm); // добавляется фильм в массив
        movieDB.movies.sort(); // сортирует фильмы в алфовитном порядке
        event.target.reset(); // очищает форму после добавелния фильма в список
        addNewFilm(movieDB.movies, movieList); // добавляет фильм в список
    } else {
        alert('Вы не ввели название фильма');
    }
    console.log(movieDB.movies)
});

const addNewFilm = function(films, parent){
    
    movieList.innerHTML = ''; // очищает контент

    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film} 
                <div class="delete"></div>
            </li>`;
    });

    const delMovie = document.querySelectorAll('.delete');
    delMovie.forEach((divDelete, i) => {
        divDelete.addEventListener('click', () =>{
            divDelete.parentElement.remove();
            movieDB.movies.splice(i, 1);

            addNewFilm(films, parent);
        });
    });
 

};





addNewFilm(movieDB.movies, movieList); 

});

