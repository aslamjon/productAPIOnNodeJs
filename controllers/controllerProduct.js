const uuid = require('uuid')
const { getProducts, getElementById } = require('../models/modelProduct');
const { writeData } = require('../utils/utils');

function getAllProducts(req, res) {
    res.send(getProducts())
}
// get Product By Id
function getProductById(req, res, id) {
    const product = getElementById(id)
    if (!product) {
        res.send({
            message: "Product not found"
        })
    } else {
        res.send(product);
    }
}

// create product
function createProduct(req, res) {
    const {name, description, price} = req.body;
    const products = getProducts();
    const product = {
        id: uuid.v4(),
        name, // name: name
        description,
        price
    }
    
    products.push(product);
    writeData(res, products, "Product has been createed", "Error")
}

// update
function updateProduct(req, res, id) {
    const {name, description, price} = req.body;
    const products = getProducts()
    const product = products.find(p => p.id === id)

    if (!product) {
        res.send({
            message: 'Product not found'
        })
    } else {
        const newProduct = {
            name: name || product.name, 
            description: description || product.description,
            price: price || product.price
        }

        const index = products.findIndex(p => p.id === id)
        products[index] = {
            id: id,
            ...newProduct
        }
        writeData(res, products, 'Product has been updated', "Error")
    }
}

// delete
function deleteProduct(req, res, id) {
    const delProduct = getProducts().filter(p => p.id !== id)
    writeData(res, delProduct, "Product has been deleted", "Error")
}
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}