const fs = require('fs');
const products = require('../data/data.json')
// Get all products
function getProducts() {
    return products;
}

// get product by id
function getElementById(id) {
    return getProducts().find((p) => p.id == id);
}


module.exports = {
    getProducts,
    getElementById,
    
}
