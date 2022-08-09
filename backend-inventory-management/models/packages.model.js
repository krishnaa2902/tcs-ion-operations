const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Packages = new Schema({
    pac_id: {
        type: String
    },
    pac_add: {
        type: String
    }
});

module.exports = mongoose.model('Packages', Packages);