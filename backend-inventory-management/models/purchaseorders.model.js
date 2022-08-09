const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PurchaseOrders = new Schema({
    po_cust_email: {
        type: String
    },
    po_grp_name: {
        type: String
    },
    po_item_id: {
        type: String
    },
    po_qty: {
        type: Number
    }
});

module.exports = mongoose.model('PurchaseOrders', PurchaseOrders);