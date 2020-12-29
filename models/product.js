var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, requires: true},
    title: {type: String, requires: true},
    description: {type: String, requires: true},
    price: {type: Number, requires: true},
});

module.exports = mongoose.model('Product', schema);
