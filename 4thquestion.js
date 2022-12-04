
//code for instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”:


class movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
   
    getPG(){
        return(`The name of the film is ${this.title} with studio of film is ${this.studio} with rating is ${this.rating}`)
    }
}

let movie1 = new movie ("Casino Royale","Eon Productions","PG13")

console.log(movie1);
console.log(movie1.getPG());
console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);
