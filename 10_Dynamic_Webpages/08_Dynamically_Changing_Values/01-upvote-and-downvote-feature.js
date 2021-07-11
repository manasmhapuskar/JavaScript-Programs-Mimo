/*
Problem:
In this project, we'll code a webpage with upvote and downvote buttons
to increase and decrease the number of votes on a photos.


Task:
Part II
You've got the structure down for your webpage.
Now it's time to put your JavaScript skills to the test.
You'll code a button that calls the 'upvote()' function when it's clicked.

Part III
Your upvoting feature works great.
But for those who disagree, you'll need to build a downvote button.
*/


var counter = 3;

function upVote() {
    counter++;
    var upvote = document.getElementById("vote-counter-p");
    upvote.innerHTML = counter + " votes";
}

function downVote() {
    counter--;
    var downvote = document.getElementById("vote-counter-p");
    downvote.innerHTML = counter + " votes";
}