/*
Problem:
Let's use 'if' and 'else' statements to create an app 
that keeps track of our financial saving goals.


Task:
We'll store our savings in 'saved', then use conditional statements
to check if we've saved enough.
*/


var savings = 110;
var savingGoal = 100;

var isGoalReached = savings >= savingGoal;

if (isGoalReached) {
    console.log("Savings goal reached!");
} else {
    console.log("Need more saving");
}