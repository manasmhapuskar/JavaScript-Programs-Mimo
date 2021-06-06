/*
Problem:
Let's write a program that takes 'verb', 'adjective' and 'noun' variables
to build funny sentences using the '+=' operator.


Available:
var verb = "marry";
var adjective = "green";
var noun = "cat";

var sentence = "I wish to ";

console.log(sentence);
*/


var verb = "marry ";
var adjective = "green ";
var noun = "cat ";

var sentence = "I wish to ";

sentence += verb;
sentence += "a" + " ";
sentence += adjective;
sentence += noun;

console.log(sentence);