class movies {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;    
    }
   
    getPG(moviearray){

        let printRating = moviearray.filter((element) => element.rating == "PG" )
        return printRating;
    } 
}

let movie1 = new movies ("Ponniyin Selvan","AVM Studio","PG15");
let movie2 = new movies ("Gargi","DV Studio");
let movie3 = new movies ("Kanam","AH studio","PG4");
let movie4 = new movies ("Iravin Nizhal","Sab studio","PG13");
let movie5 = new movies ("Sardar","GK studio");

let moviearray = [movie1, movie2, movie3, movie4, movie5]

console.log(movie1.getPG(moviearray));
console.log(movie2.getPG(moviearray));