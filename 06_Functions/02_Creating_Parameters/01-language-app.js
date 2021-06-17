/*
Problem:
Let's use functions to code a part of a language app.

The language app will take a verb like "run" and
display helpful information on using it in the English language.


Task:
For that, we'll create a function that takes a verb as a parameter.
Then we'll call the function with different verbs
*/


function display(verb) {
    console.log("Verb: " + verb);
    console.log("I " + verb);
    console.log("She " + verb + "s");
}

display("play");
display("dance");