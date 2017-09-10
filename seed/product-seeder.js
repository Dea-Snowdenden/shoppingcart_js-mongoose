var Product = require('../models/products');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
    imagePath: 'https://d2bvpivebkb899.cloudfront.net/sarahraven/product/7ca351e.261006_2.jpg/320x320.crop.261006_2.jpg',
    title: 'Tulips',
    description: 'Flowers',
    price: 10
}),

new Product({
    imagePath: 'https://garden.org/pics/2016-10-18/Rebekah/e5f6ad.jpg',
    title: 'Roses',
    description: 'Flowers',
    price: 10
}),

new Product({
    imagePath: 'https://usercontent2.hubstatic.com/7825535_f520.jpg',
    title: 'Stargazer',
    description: 'Flowers',
    price: 10
}),

new Product({
    imagePath: 'https://www.plantopedia.com/wp-content/uploads/2017/04/petunia-n9.jpg',
    title: 'Petunia',
    description: 'Flowers',
    price: 10
}),

new Product({
    imagePath: 'http://www.stephenmorrisauthor.com/wp-content/uploads/2017/03/Daisy.jpg',
    title: 'Daisy',
    description: 'Flowers',
    price: 10
})
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products(i).save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
mongoose.disconnect();
}