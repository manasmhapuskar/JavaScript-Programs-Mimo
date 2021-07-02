/*
Problem:
Early calculators could only perform one operation: addition.
To compute 7 times 3, for example, users had to add repeatedly.


Task:
Let's improve this calculator by coding 'multiply()' method
that abstracts away these repeated 'add()' calls.

 
Available Code:

class Calculator {
    constructor(value) {
        this.value = value;
    }
    
    add(num) {
        this.value += num;
    }
}

var calculator = new Calculator(7);
calculator.add(7);
calculator.add(7);
console.log(calculator);
*/


class Calculator {
    constructor(value) {
        this.value = value;
    }

    add(num) {
        this.value += num;
    }

    multiply(num) {
        var value = this.value;
        for(var i = 1; i < num; i++) {
            this.add(value);
        }
    }
}

var calculator = new Calculator(5);
calculator.multiply(7);
console.log(calculator);