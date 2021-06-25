/*
Problem:
Alex is developing a life simulation game and
wants to introduce a phone communication feature.


Task:
We'll help her by introducing a virtual phone device and
a smartphone so that the characters can communicate from a distance.
*/


class Phone {
    call(user) {
        console.log("Calling " + user);
    }
}
class Smartphone extends Phone {
    videoCall(user) {
        console.log("Facetiming " + user);
    }
}

var device = new Smartphone();
device.call("Mom");
device.videoCall("Danny");