/*
Problem:
Let's build a program that displays a triangle in the console.


Task:
We'll code a while loop that adds an asterisk to the 'line' variable
and displays the line of asterisks each time the code block runs.
*/


var line = "";
var counter = 1;

while (counter < 5) {
    line += "*" + " ";
    console.log(line);
    counter++;
}