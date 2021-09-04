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

function update(id, product) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex(p => p.id === id)
        products[index] = { id, ...product }
        writeData('data/data.json', products)
        resolve()
    })
}

function deleteProduct (id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id == id)
        if (!product) resolve(0)
        else {
            const delProduct = products.filter(p => p.id !== id)
            console.log(delProduct);
            writeData("data/data.json", delProduct)
            resolve(1)
        }
    })
}
module.exports = {
    getProducts,
    getElementById,
    create,
    update,
    deleteElem: deleteProduct
}
