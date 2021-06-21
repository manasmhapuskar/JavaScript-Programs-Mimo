/*
Problem:
Our streaming service is producing its own show.
Let's add some methods to start streaming and get those "views" up.


Available Code:
var show = {
    name: "Pick and Shorty",
    views: 10
};
*/


var show = {
    name: "Rick and Morty",
    views: 10,
    play: function() {
        var showName = this.name;
        console.log("Now Playing: " + showName);
    },
    addViews: function(numberOfViews) {
        this.views += numberOfViews;
        return this.views
    }
};

show.play();
console.log(show.addViews(1)); 