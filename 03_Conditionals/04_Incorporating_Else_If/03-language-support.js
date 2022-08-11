/*
Problem:
A major greeting card company wants to provide support
for different languages on their website.


Task:
Let's help them out by updating the 'message' variable to
different messages depending on the 'language' a user requests.
*/


var message = "";
var language = "Hindi";
console.log("Language chosen: " + language);
if (language === "English") {
    message = "Thank you";
} else if (language === "Spanish") {
    message = "Gracias";
} else if (language === "German") {
    message = "Danke";
} else if (language === "Hindi") {
    message = "Dhanyawaad";
} else if (language === "Japanese") {
    message = "Arigato";
}
console.log("Message: " + message);