var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});

var products = [
    new Product({
        imagePath: 'https://www.shutterstock.com/category/nature',
        title:'Nature',
        descrition: 'Awesome Nature!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://www.shutterstock.com/category/nature',
        title:'Nature',
        descrition: 'Awe Nature!!!',
        price: 20
    }),
    new Product({
        imagePath: 'https://www.shutterstock.com/category/nature',
        title:'Nature',
        descrition: ' Nature!!!',
        price: 30
    }),
];

var done = 0;
for (var i=0; i<products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
