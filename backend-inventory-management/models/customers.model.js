const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customers = new Schema({
    cust_name: {
        type: String
    },
    cust_email: {
        type: String
    },
    cust_add: {
        type: String
    }
});

module.exports = mongoose.model('customers', Customers);