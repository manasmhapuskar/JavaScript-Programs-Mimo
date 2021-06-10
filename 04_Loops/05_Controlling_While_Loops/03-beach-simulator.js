/*
Problem:
A developer tried displaying an asterisk '*' and tildes '~'
to simulate a beach. The '*' for the sun and the '~' for the waves.


Task:
Unfortunately, they made a few mistakes using a 'while' loop
to display the waves, so we'll help them out.
JS Code ->
var line = "";

console.log("*");

while (counter > 5) {
    line -= "~";
    counter++;
}
*/


var line = "";
var counter = 1;

console.log("*");

while (counter <= 10) {
    line += "~" + " ";
    counter++;
    console.log(line);
}