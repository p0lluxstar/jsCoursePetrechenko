'use strict';

const personalMovieDB = {
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function writeYourGenres(){

    for (let i = 1; i <= 3; i++){
    const answerGenres = prompt(`Ваш любимый жанр под номером ${i}?`, '');
    personalMovieDB.genres[i - 1] = answerGenres;
    } 
}

writeYourGenres();