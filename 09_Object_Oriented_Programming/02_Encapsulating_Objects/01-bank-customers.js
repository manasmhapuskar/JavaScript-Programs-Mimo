/*
Problem:
In this project, we'll practice 'encapsulation' by creating an object
that contains a customer's information inside a banking app.
*/


var customer = {
    checking: 0,
    savings: 0,
    deposit: function(amount) {
        this.checking += amount;
    },
    transfer: function(amount) {
        this.checking -= amount;
        this.savings += amount;
    }
};

customer.deposit(200);

customer.transfer(100);
console.log(customer.savings);

console.log(customer.checking);