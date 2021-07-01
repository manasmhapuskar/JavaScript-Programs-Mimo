/*
Problem:
Let's practice our knowledge of inheritance by fixing some code.


Available Code:
Take a look at this code for a social networking app 
that lets users post their current status.
function createUser(name) {
    var user = {
        name: name,
        status: '',
        updateStatus: function(status) {
            user.status = status;
        }
    };
    
    return user;
}

var user1 = createUser("Matt");
var user2 = createUser("Mary");
var user3 = createUser("John");

user1.updateStatus("Out fishing");

console.log(user1);
console.log(user2);
console.log(user3);


Task:
A developer wrote a 'createUser()' function to create new user objects.
The problem is that each user has its own 'updateStatus()' method.

If too many users sign up, the server could crash.
Let's fix that by making the code use classes.
*/


class User {
    constructor(name) {
        this.name = name;
        this.status = "";
    }

    updateStatus(status) {
        this.status = status;
    }
}

var user1 = new User("Manny");
user1.updateStatus("Writing JS code!")
console.log(user1.name + " is " + user1.status);

var user2 = new User("Danny");
user2.updateStatus("Writing Matlab code!");
console.log(user2.name + " is " + user2.status);