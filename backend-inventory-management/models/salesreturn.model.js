const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalesReturn = new Schema({
    sr_id: {
        type: String
    },
    sr_reason: {
        type: String
    }
});

module.exports = mongoose.model('SalesReturn', SalesReturn);