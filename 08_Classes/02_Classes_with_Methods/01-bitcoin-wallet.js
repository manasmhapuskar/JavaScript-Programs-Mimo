/*
Problem:
Let's use our knowledge of Classes with Methods
to code a Bitcoin wallet.


Task:
We'll create a 'BitcoinWallet' class 
that keeps track of the number of bitcoins inside.

We'll use a class method to handle updating
the number of bitcoins when they get added.
*/


class BitcoinWallet {
    constructor(bitcoin) {
        this.bitcoin = bitcoin;
    }

    addBitcoin(bitcoins) {
        bitcoins += this.bitcoin;
        console.log(bitcoins + " bitcoins added");
    }
}

var wallet = new BitcoinWallet(10);
wallet.addBitcoin(10);