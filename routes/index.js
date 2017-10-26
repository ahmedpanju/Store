var productsJSON = require('../products.json');


exports.home = function(req, res) {
    
    var products = productsJSON.products;
    
    res.render('home', {
        title: "Online Store",
        style: "home_style.css",
        logic: "home_logic.js",
        products: products
    });
};

exports.category = function(req, res) {
    
    var number = req.params.number;
    
    var category = req.params.category;
    
    var products = productsJSON.products;
    
    var header = products[category].category;
    
    res.render('category', {
        title: "bob",
        style: "category_style.css",
        logic: "category_logic.js",
        products: products,
        header: header,
        number: number
        
    });
}

exports.individual = function(req, res) {
    var products = productsJSON.products;
    
    var category = req.params.category;
    
    var product = req.params.name;

    
    res.render('individual', {
        style: "individual_style.css",    
        logic: "individual_logic.js",
        products: products,
        title: "Fick this",
        bob: product
    });
}

exports.notFound = function(req, res) {
    res.send("This is not the page you are looking for!");
};