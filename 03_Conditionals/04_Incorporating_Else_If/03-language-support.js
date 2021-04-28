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