var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagepath: {type: string, required: true},
    title: {type: string, required: true},
    price: {type: string, required: true}
});

module.exports = mongoose.model('Product', schema);
