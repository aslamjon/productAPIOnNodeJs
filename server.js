const express = require('express')

const app = express();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('./controllers/controllerProduct')

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true})) // if json come backend then it convert to obj in req.body

// Get all products
app.get('/api/products', (req, res) => {
    res.send(getAllProducts(req, res))
})

// Get product by id
app.get('/api/products/:productId', (req, res) => {
    const {productId} = req.params;
    getProductById(req, res, productId)
})

// Create product 
app.post('/api/products', (req, res) => {
    createProduct(req, res);    
})

// Update
app.put('/api/products/:productId', (req,res) => {
    const {productId} = req.params;
    updateProduct(req, res, productId)
    
})

// Delete 
app.delete('/api/products/:productId', (req, res) => {
    const {productId} = req.params;
    deleteProduct(req, res, productId)
})
app.listen(3000, () => console.log('Server is running on port 3000'))