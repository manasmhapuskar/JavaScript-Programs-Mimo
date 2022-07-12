/*
Problem:
Let's code part of a video game that uses 
number comparisons to decide which power-up to award.


Task:
We'll store gathered coins in a variable,
then create two other variables to save the comparisons
*/


var coins = 11;
var mushroom = coins >= 10;
var speed = coins >= 20;
console.log("Mushroom: " + mushroom);
console.log("Speed: " + speed);