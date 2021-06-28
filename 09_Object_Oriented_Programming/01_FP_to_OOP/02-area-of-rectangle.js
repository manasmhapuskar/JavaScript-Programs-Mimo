/*
Problem:
Let's convert this non-encapsulated FP code into OOP code.


Available Code:
var base = 3;
var height = 4;

function getArea(base, height) {
    return base * height;
}

var areaOfRectangle = getArea(base, height);
console.log(areaOfRectangle);
*/


var rectangle = {
    base: 3,
    height: 4,
    getArea: function() {
        return this.base * this.height;
    }
};

rectangle.base = 10;

var areaOfRectangle = rectangle.getArea();
console.log("Area of Rectangle: " + areaOfRectangle);