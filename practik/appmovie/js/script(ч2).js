/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять (к любой строке можно обратиться как str.length и получить ее длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else{
    console.log('Произошла ошибка');
}

// присваеваем объекту свойтва и значение и проверка условий заполнения полей. в случае не выполнения условий вопрос повторяется

for ( let i = 0; i < 2; i++ ){

    const answerLastMovies = prompt('Один из последних просмотренных фильмов?', '');
    const estimationMovies = prompt('На сколько оцените его?', '');

    if (answerLastMovies === '' || estimationMovies === '' || answerLastMovies === null || estimationMovies === null || answerLastMovies.length > 50) {
        i--;
    } else {
        personalMovieDB.movies[answerLastMovies] = estimationMovies;
    }
}



console.log(personalMovieDB.movies);
