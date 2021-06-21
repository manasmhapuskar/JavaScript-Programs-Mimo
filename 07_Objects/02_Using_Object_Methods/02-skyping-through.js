/*
Problem:
Feeling a little bit of Skype fatigue?
Let's fix that with a brand new video chat platform, "Skype".


Available Code:
var chatPlatform = {
    name: "Skype"
};
*/


var chatPlatform = {
    name: "Skype",
    chat: function(userName) {
        console.log("Chatting with: " + userName);
    } 
};

chatPlatform.chat("The Boss");