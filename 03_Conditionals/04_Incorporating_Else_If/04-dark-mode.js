/*
Problem:
Let's use our knowledge of conditionals to build a webpage
with buttons that switch between light, dark and ninja modes.

 
Task:
Part I
Coding the brain of the program by coding the JavaScript code.

Part II
With your JavaScript program in place,
let's move on to HTML to create the webpage for the theme picker.

Part III
Let's add CSS to give this website style.
When you're finished, we'll link the JavaScript to put the buttons into action.
*/


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