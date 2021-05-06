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