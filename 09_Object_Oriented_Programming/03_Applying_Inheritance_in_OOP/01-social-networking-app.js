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