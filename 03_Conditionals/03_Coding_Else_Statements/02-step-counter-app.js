/*
Problem:
Let's use an 'if/else' statement to write code for an app
that keeps track of your steps and compares them with your daily goal.


Task:
If the user's step count reaches their daily goal, we'll let them know.
Otherwise, we'll let them know how many steps they have left.
*/


var stepCount = 9222;
var dailyGoal = 8000;
var hasGoalReached = stepCount >= dailyGoal;
if (hasGoalReached) {
    console.log("Daily goal reached!");
} else {
    stepsLeft = dailyGoal - stepCount;
    console.log("Still need to walk more");
    console.log("Steps left: " + stepsLeft);
}