var mode = "light";

var label;
var color;
var image;


if (mode === "light") {

    label = "Light Mode";
    color = "White";
    image = "Mimo-White";

} else if (mode === "dark") {

    label = "Dark Mode";
    color = "Dark Blue";
    image = "Mimo-Dark";

} else {

    label = "Ninja Mode";
    color = "Dark Gray";
    image = "Mimo-Ninja"; 
    
}

console.log(label);
console.log(color);
console.log(image);