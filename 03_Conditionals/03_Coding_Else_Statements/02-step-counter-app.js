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