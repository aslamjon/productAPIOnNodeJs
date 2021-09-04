
const { getProducts, getElementById, create, update } = require('../models/modelProduct');


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
async function createProduct(req, res) {
    const {name, description, price} = req.body;
    const product = {
        name,
        description,
        price
    }
    try {
        const newProduct = await create(product)
        res.send(newProduct)
    } catch (error) {
        console.log(error);
    }
}

// update
async function updateProduct(req, res) {
    const {id} = req.params
    const {name, description, price} = req.body;
    try {
        const product = await getElementById(id)
        if (!product) {
            res.status(404).send({
                message: "Produc not found"
            })
        } else {
            const productData = {
                name: name || product.name,
                description: description || product.description,
                price: price || product.price,
            }
            const updatedProduct = await update(id, productData)
            res.send({
                message: "Product updated successfuly"
            })
        }
    } catch (error) {
        console.log(error);
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