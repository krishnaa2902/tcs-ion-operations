const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Items = new Schema({
    item_group_name: {
        type: String
    },
    item_name: {
        type: String
    },
    item_quantity: {
        type: Number
    },
    item_dimensions: {
        type: String
    },
    item_weight: {
        type: Number
    },
    item_manufacturer: {
        type: String
    },
    item_brand: {
        type: String
    },
    item_selling_price: {
        type: Number
    },
    item_cost_price: {
        type: Number
    },
    item_opening_stock: {
        type: Number
    },
    item_reorder_point: {
        type: Number
    },
    item_vendor: {
        type: String
    }
});

module.exports = mongoose.model('Items', Items);