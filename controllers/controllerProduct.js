const uuid = require('uuid')
const { getProducts, getElementById } = require('../models/modelProduct');
const { writeData } = require('../utils/utils');

async function getAllProducts(req, res) {
    try {
        const products = await getProducts()
        res.send(products)
    } catch(error) {

    }
}
// get Product By Id
async function getProductById(req, res) {
    const {id} = req.params;
    const product = await getElementById(id)
    if (!product) {
        res.status(404).send({
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