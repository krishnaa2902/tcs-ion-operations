const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalesInvoice = new Schema({
    inv_id: {
        type: String
    },
    inv_email: {
        type: String
    },
    inv_add: {
        type: String
    },
    inv_amt: {
        type: Number
    }
});

module.exports = mongoose.model('SalesInvoice', SalesInvoice);