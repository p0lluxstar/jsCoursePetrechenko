/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        } 
    }, // проверка заполняемого поля на то, что было введено число, inNaN проверят число или не число

    rememberMyFilms: function (){
        for ( let i = 0; i < 2; i++ ){ // цикл потому что задаются два раза вопросы
    
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
    }, // свойству-объектру movies создаем свойства и значения и проверка условий заполнения полей. в случае не выполнения условий вопрос повторяется

    detectPersonalLevel: function (){
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else{
            console.log('Произошла ошибка');
        }
    }, // определяет уровень киномана      

    showMyDB: function (resPrivat){
        if (resPrivat === false)
        console.log(personalMovieDB);
    }, // функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект - personalMovieDB

    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }, // метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB. 

    writeYourGenres: function (){
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
                if (genre === '' ||  genre === null){
                    console.log('Вы ввели некорректные данные или не ввели их вовсе');
                    i--;
                } else {personalMovieDB.genres[i - 1] = genre;
        }; 
    }; // метод writeYourGenres запрещает пользователю нажать кнопку "отмена" или оставлять пустую строку. Если он это сделал - возвращать его к этому же вопросу

    personalMovieDB.genres.forEach(function(nameGenres, numGenres){
        console.log(`Любимый жанр ${numGenres + 1} - это ${nameGenres}`);
    });
    } // метод forEach выводит в консоль сообщения в таком виде: "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)
    

};



// writeYourGenres: function (){
//     for (let i = 1; i <= 3; i++){
//         for(let a = 1; a < 2; a++){
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, '');
//             if (personalMovieDB.genres[i - 1] === '' || personalMovieDB.genres[i - 1] === null){
//                 a--;
//             };
//     }; 
// };
// personalMovieDB.genres.forEach(function(nameGenres, numGenres){
//     console.log(`Любимый жанр ${numGenres + 1} - это ${nameGenres}`);
// });
// }