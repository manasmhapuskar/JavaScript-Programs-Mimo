/*
Problem:
Let's use if, else if and else statements to create a smart chatbot.


Task:
The program will take user's answer to "Are you hungry?" and 
use it to give a response to the user.
*/


console.log("Are you hungry?");

var answer = "Yes";

console.log(answer);

if (answer === "No") {
    console.log("Me neither");
} else if (answer === "Yes") {
    console.log("Ordering Pizza");
} else {
    console.log("I don't understand what you said");
}