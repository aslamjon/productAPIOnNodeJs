const express = require('express')

const app = express();
const { productRouter } = require('./routes/productRouter')
const {authRouter} = require('./routes/authRouter');
const { checkUser } = require('./middlewares/authMiddleware');
const { userRouter } = require('./routes/userRouter');
const { checkPermission } = require('./middlewares/checkPermission');

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true})) // if json come backend then it convert to obj in req.body

app.use('/api/products', checkUser, checkPermission, productRouter)
app.use('/auth', authRouter)
app.use('/api/user', checkUser, checkPermission, userRouter)

app.listen(3000, () => console.log('Server is running on port 3000'))