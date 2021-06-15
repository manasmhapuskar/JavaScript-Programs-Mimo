/*
Problem:
Let's practice using 'push()' and 'pop()'
to help a website keep track of their posts.


Task:
Once posts are reviewed, we'll use 'pop()' to remove them 
from the 'review' array and 'push()' to add them to the 'published' array.
*/


var review = ["comment", "news"];
var post = review.pop();
console.log("Under Review: " + review);

var published = [];
published.push(post);
console.log("Published: " + published);