/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

// проверка заполняемого поля на то, что было введено число

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
    // inNaN проверят число или не число 
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// присваеваем объекту свойтва и значение и проверка условий заполнения полей. в случае не выполнения условий вопрос повторяется

function rememberMyFilms(){
    for ( let i = 0; i < 2; i++ ){

        const answerLastMovies = prompt('Один из последних просмотренных фильмов?', '').trim(); // trim() Удаляет пробельные сивмолы с начала и конца строки.
        const estimationMovies = prompt('На сколько оцените его?', '');
    
        if (answerLastMovies === '' || estimationMovies === '' || answerLastMovies === null || estimationMovies === null || answerLastMovies.length > 50) {
            console.log('error');
            i--;
        } else {
            personalMovieDB.movies[answerLastMovies] = estimationMovies;
            console.log('done');
        }
    }
}

rememberMyFilms();

// определяет уровень киномана

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else{
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

// функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы

function showMyDB(resPrivat){
    if (resPrivat === false)
    console.log(personalMovieDB);
}

showMyDB(personalMovieDB.privat);

// второй вариант как это сделать, более просто

// function showMyDB(){
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);
//     }
// }
//  showMyDB();

// Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres

function writeYourGenres(){

    for (let i = 1; i <= 3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, '');
    } 
}

writeYourGenres();