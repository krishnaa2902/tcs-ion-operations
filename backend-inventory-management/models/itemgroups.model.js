const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Itemgroups = new Schema({
    grp_name: {
        type: String
    }
});

module.exports = mongoose.model('Itemgroups', Itemgroups);