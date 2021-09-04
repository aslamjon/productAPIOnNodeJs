const express = require('express')

const app = express();
const { productRouter } = require('./routes/productRouter')
app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true})) // if json come backend then it convert to obj in req.body
app.use('/api/products', productRouter)

app.listen(3000, () => console.log('Server is running on port 3000'))