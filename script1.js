// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
class movie{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(){
        return `This movie rating is ${this.rating}`
    }
}
let casino = new movie("Casino Royale","Eon Productions","PG13");
console.log(casino);
console.log(casino.getPG());
