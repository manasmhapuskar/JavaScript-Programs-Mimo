/*
Problem:
Let's use the interacting with Webpages 
to create a button that generates a user for a user.


Task:
We'll make a webpage with some user details and space for the username.
Then we'll add the function to generate the username.
*/


function generate() {
    var name = document.getElementById("name").innerHTML;
    var age = document.getElementById("age").innerHTML;
    var username = name + age;
    document.getElementById("username").innerHTML = username;
}