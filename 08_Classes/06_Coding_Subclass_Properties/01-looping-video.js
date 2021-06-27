/*
Problem:
Time to practice our knowledge of Subclass Properties.
We'll work on a social media app that shares photos and videos.


Task:
The team is working on a new feature that allows looping videos.
We'll help them by making a 'Loop' subclass of a superclass called 'Video'.
Then we'll add properties for start and end times.
*/


class Video {
    constructor(length) {
        this.length = length;
    }
}
class Loop extends Video {
    constructor(length, start, end) {
        super(length);
        this.start = start;
        this.end = end;
    }
}

var loop = new Loop(10, 4, 8);
console.log(loop);