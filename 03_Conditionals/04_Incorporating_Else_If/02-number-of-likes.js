/*
Problem:
Let's build a social media program that displays different messages 
based on the number of likes a post gets.
*/


var likes = 1;
if (likes === 0) {
    console.log("No likes yet");
} else if (likes === 1) {
    console.log(likes + " like");
} else {
    console.log(likes + " likes")
}