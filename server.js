const express = require('express')

const app = express();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('./controllers/controllerProduct')

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true})) // if json come backend then it convert to obj in req.body

// Get all products
app.get('/api/products', getAllProducts)

// Get product by id
app.get('/api/products/:id', getProductById)

// Create product 
app.post('/api/products', createProduct)

// Update
app.put('/api/products/:id', updateProduct)

// Delete 
app.delete('/api/products/:id', deleteProduct)

app.listen(3000, () => console.log('Server is running on port 3000'))