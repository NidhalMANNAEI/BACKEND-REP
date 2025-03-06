class Transaction {
    constructor(transactionId, amount, method, status, dateCreated) {
        this.transactionId = transactionId;
        this.amount = amount;
        this.method = method;
        this.status = status;
        this.dateCreated = dateCreated;
    }

    process() {
        this.status = "COMPLETED";
        console.log(`Transaction ${this.transactionId} processed.`);
    }

    refund() {
        this.status = "REFUNDED";
        console.log(`Transaction ${this.transactionId} refunded.`);
    }
}

module.exports = Transaction;