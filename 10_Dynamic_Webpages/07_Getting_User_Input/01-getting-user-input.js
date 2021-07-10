/*
Problem:
Let's apply our knowledge of user input to build a signup page for Snapcat,
an app for sending disappearing pictures of cats.


Part II
With the Snapcat webpage in place, let's make it interactive by accessing
and updating the values through an included script.
*/


function signUp() {
    var username = document.getElementById("usernameInput").value;
    var email = document.getElementById("emailInput").value;
    document.getElementById("message").innerHTML = username + " " + email;
}

signUp();