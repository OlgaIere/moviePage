let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies have you watched so far?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you watched so far?", "");
    }
}

start();

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("One of the last movies you watched?"),
            b = prompt("How would you rate this movie?");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
        console.log("You've watched quite a few movies");
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        console.log("You are a classic viewer");
    } else if (personalMovieDb.count >= 30) {
        console.log("You are a movie buff!");
    } else {
        console.log("En error has occured");
    }
}

detectPersonalLevel();
function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDb.movies);
    }
}

showMyDB(personalMovieDb.privat);

function writeYourGenres(){
    for (let i = 1; i <=3; i++){
        personalMovieDb.genres[i - 1] = prompt(`Your faviorite genre isat number ${i}`);
    }
}

writeYourGenres();
