/*
Problem:
We'll use comparisons to build an app that tracks
the 100-meter sprint world record. Ready, set, go!


Task:
We'll compare the variables 'record' and 'time'
to check if the record is broken.
*/


var record = 9.69;
var time = 9.58;

if (time < record) {
    record = time;
    console.log("Record Broken!!");
    console.log("New Record is " + record);
}