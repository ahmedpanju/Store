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
    
    var product_name = req.params.name;
    
    var product_description = req.params.description;
    
    var product_image = req.params.image;

    var product_price = req.params.price;
    
    res.render('individual', {
        style: "individual_style.css",    
        logic: "individual_logic.js",
        products: products,
        title: "UHCP | " + product_name,
        name: product_name,
        description: product_description,
        image: product_image, 
        price: product_price
    });
}

exports.notFound = function(req, res) {
    res.send("This is not the page you are looking for!");
};