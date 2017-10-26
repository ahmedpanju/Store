var Product = require('../models/product');

var mongoose = require('mongoose');

var promise = mongoose.connect('mongodb://localhost:27170/shopping', {
  useMongoClient: true,
  /* other options */
});

var products = [
    new Product({
    imagepath: '/images/sample_one.png',
    title: 'HUGGIES WIPES (320s - 432s), JUMBO',
    price: 11
    }),

    new Product({
    imagepath: '/images/sample_two.png',
    title: 'REST VIVID WHITESTRIPS (10s), ORAL-B.',
    price: 11
    }),

    new Product({
    imagepath: '/images/sample_three.png',
    title: 'SIMILAC INFANT FORMULA 638 g - 658 g Selected',
    price: 11
    })

];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, res){
        done++;
        if(done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
