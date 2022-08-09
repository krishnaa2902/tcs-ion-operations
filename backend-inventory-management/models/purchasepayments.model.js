const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PurchasePayments = new Schema({
    pp_id: {
        type: String
    },
    pp_amt: {
        type: Number
    }
});

module.exports = mongoose.model('PurchasePayments', PurchasePayments);