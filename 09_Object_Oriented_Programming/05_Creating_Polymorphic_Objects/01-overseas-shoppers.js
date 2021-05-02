class USCustomer {
    constructor(amount) {
        this.amount = amount;
    }

    viewDetails() {
        console.log("You paid " + this.amount + " USD");
    }
}

class OverseasCustomer extends USCustomer {
    viewDetails() {
        var euros = this.amount * 0.82;
        console.log("You Paid " + euros + " EUR");
    }
}

var hanna = new USCustomer(50);
hanna.viewDetails();

var ana = new OverseasCustomer(50);
ana.viewDetails();