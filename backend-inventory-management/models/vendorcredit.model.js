const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VendorCredit = new Schema({
    vc_id: {
        type: String
    },
    vc_amt: {
        type: Number
    }
});

module.exports = mongoose.model('VendorCredit', VendorCredit);