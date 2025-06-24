// 'use strict';


// const personalMovieDb = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDb.count = +prompt("How many movies have you watched so far?", "");

//         while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
//             personalMovieDb.count = +prompt("How many movies have you watched so far?", "");
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt("One of the last movies you watched?"),
//                 b = prompt("How would you rate this movie?");
//             if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//                 personalMovieDb.movies[a] = b;
//                 console.log("done");
//             } else {
//                 console.log("error");
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDb.count < 10) {
//             console.log("You've watched quite a few movies");
//         } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
//             console.log("You are a classic viewer");
//         } else if (personalMovieDb.count >= 30) {
//             console.log("You are a movie buff!");
//         } else {
//             console.log("En error has occured");
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDb.movies);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDb.privat) {
//             personalMovieDb.privat = false;
//         } else {
//             personalMovieDb.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Your faviorite genre is at number ${i}`);
//             if (genre == '' || genre == null) {
//                 console.log('You have entered incorrect data or not entered it at all');
//                 i--;
//             } else {
//                 personalMovieDb.genres[i - 1] = genre;
//             }
//         }

//         personalMovieDb.genres.forEach((item, i) => {
//             console.log(`You favorite genre ${i + 1} is ${item}`);
//         });
//     }

// };


