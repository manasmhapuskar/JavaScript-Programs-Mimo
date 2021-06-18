/*
Problem:
Let's use 'return values' to code a function that speeds up 
the process of displaying likes on a photo on social media.


Task:
We'll create a 'likedBy()' function that takes a parameter
and use its return value for an activity feed.
*/


function likedBy(person) {
    return "Liked By: " + person;
}

var result = likedBy("Rebecca");
console.log(result);