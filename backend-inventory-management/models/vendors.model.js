const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vendors = new Schema({
    ven_name: {
        type: String
    },
    ven_email: {
        type: String
    }
});

module.exports = mongoose.model('Vendors', Vendors);