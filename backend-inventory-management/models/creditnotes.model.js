const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CreditNotes = new Schema({
    cn_id: {
        type: String
    },
    cn_amt: {
        type: Number
    }
});

module.exports = mongoose.model('CreditNotes', CreditNotes);