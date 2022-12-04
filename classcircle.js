//CLASS - CIRCLE

class circle{
    constructor(radius,color){
      this.radius = radius;
      this.color = color;
    }

getRadius(){

    return (`Radius of the ciecle is ${this.radius}`)
}

setRadius(radi){
    this.radius = radi;

}

getColour(){
    return (`Colour of the circle is ${this.color}`)
}

setColor(color1){
    this.color = color1;
}

getString(){
    return (`Circle[radius = ${this.radius} , color = ${this.color}]`)
}

getArea(){
    return (`Area of the circle is ${(2*Math.PI*this.radius).toFixed(2)}`)
}

getCircumference(){
    return (`Circumference of the circle is ${(Math.PI*this.radius*this.radius).toFixed(2)}`)
}
}

let Circle1 = new circle (1.0,"red");
Circle1.setRadius(3.4);
Circle1.setColor("Black");

console.log(Circle1);
console.log(Circle1.radius);
console.log(Circle1.radius, Circle1.color);
console.log(Circle1.getRadius());
console.log(Circle1.getColour());
console.log(Circle1.getString());
console.log(Circle1.getArea());
console.log(Circle1.getCircumference());