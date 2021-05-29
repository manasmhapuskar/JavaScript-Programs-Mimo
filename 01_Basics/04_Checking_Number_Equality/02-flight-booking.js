/*
Problem:
Let's help a flight booking website decide 
if a flight is fully booked.

 
Task:
We'll save the maximum number of bookings and 
the current bookings and then compare them.
*/


var maximum = 59;
var seatsBooked = 60;
var full = maximum === seatsBooked;

console.log("Booked out?: " + full);