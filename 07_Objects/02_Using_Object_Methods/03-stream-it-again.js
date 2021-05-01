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