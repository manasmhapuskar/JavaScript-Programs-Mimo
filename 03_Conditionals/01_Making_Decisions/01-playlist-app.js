/*
Let's use a variable to keep track of whether a song
is already in a playlist or not for a music-streaming website.


Task:
We'll use the variable 'included' to display a message
if the song is already in the playlist.
*/


var song = "Got me thinking";

console.log("New entry: " + song);

var isSongInPlaylist = "Got me thinking" === song;

if (isSongInPlaylist) {
    console.log("This song already exists in the Playlist");
}