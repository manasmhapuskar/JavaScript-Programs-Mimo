/*
Problem:
WAP that simulates how we could use functions 
to control parts of a music playing app.
*/


function playlistPicker(genre) {
    var play = "Current playlist: ";
    console.log(play + genre);
}

function shuffleSongs(setting) {
    var shuffle = "Shuffle songs: ";
    console.log(shuffle + setting);
}

playlistPicker("Liquid DnB");
shuffleSongs(true);