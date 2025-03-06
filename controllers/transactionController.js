const Transaction = require('../models/Transaction');

exports.processTransaction = (req, res) => {
    const { transactionId, amount, method } = req.body;
    const transaction = new Transaction(transactionId, amount, method, 'PENDING', new Date());
    transaction.process();
    res.send({ message: 'Transaction processed successfully.', transaction });
};

exports.refundTransaction = (req, res) => {
    const { transactionId, amount, method } = req.body;
    const transaction = new Transaction(transactionId, amount, method, 'COMPLETED', new Date());
    transaction.refund();
    res.send({ message: 'Transaction refunded successfully.', transaction });
};