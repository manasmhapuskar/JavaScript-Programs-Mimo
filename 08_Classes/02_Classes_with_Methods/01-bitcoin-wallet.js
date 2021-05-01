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