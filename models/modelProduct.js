const products = require('../data/data.json')
const uuid = require('uuid')
const { writeData } = require('../utils');
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

function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {
            id: uuid.v4(),
            ...product
        }
        
        products.push(newProduct);
        writeData('data/data.json', products)
        resolve(newProduct)
    })
}

module.exports = {
    getProducts,
    getElementById,
    create,
}
