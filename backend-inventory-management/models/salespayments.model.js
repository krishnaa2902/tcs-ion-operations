const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalesPayments = new Schema({
    sp_id: {
        type: String
    },
    sp_amt: {
        type: Number
    }
});

module.exports = mongoose.model('SalesPayments', SalesPayments);