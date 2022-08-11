const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DeliveryChallan = new Schema({
    dc_cust_email: {
        type: String
    },
    dc_date: {
        type: Date
    },
    dc_status: {
        type: String
    }
});

module.exports = mongoose.model('DeliveryChallan', DeliveryChallan);