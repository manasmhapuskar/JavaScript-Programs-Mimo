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