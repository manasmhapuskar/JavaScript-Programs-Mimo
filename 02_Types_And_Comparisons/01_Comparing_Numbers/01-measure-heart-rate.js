/*
Problem:
Let's create a program that analyzes a patient's heart rate.


Task:
We'll use comparisons to check if the heart rate is too low or
too high and tell the patient if they should worry about their health.
*/


var heartRate = 77;

var tooLow = heartRate < 60;
var tooHigh = heartRate > 100;

console.log("Heart rate low: " + tooLow);
console.log("Heart rate high: " + tooHigh);