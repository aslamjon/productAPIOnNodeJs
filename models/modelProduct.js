const products = require('../data/data.json')
// Get all products
function getProducts() {
    return new Promise((resolve, reject) => {
        resolve(products)
    });
}

// get product by id
function getElementById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id == id)
        if (product) resolve(product);
        else resolve(0)
    });
}


module.exports = {
    getProducts,
    getElementById,
    
}
