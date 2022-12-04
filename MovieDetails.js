// Class - Movie
//The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided:

class movies {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        if(rating) {
        return this.rating 
        }
        else{
            return this.rating = "PG";
        }
    }
   
    getPG(){
        return(`The name of the film is ${this.title} with studio of film is ${this.studio} with rating is ${this.rating}`)
    }
}

let movie1 = new movies ("Ponniyin Selvan","AVM Studio","PG15");
let movie2 = new movies ("Gargi","DV Studio");
let movie3 = new movies ("Kanam","AH studio","PG4");
let movie4 = new movies ("Iravin Nizhal","Sab studio","PG13");
let movie5 = new movies ("Sardar","GK studio");


console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie4);
console.log(movie5);
console.log(movie5.title)
console.log(movie1.getPG());


