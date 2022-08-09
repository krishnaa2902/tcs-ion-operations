const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalesOrders = new Schema({
    so_cust_email: {
        type: String
    },
    so_cust_add: {
        type: String
    },
    so_grp_name: {
        type: String
    },
    so_item_id: {
        type: String
    },
    so_qty: {
        type: Number
    }
});

module.exports = mongoose.model('SalesOrders', SalesOrders);