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