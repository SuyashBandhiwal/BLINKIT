const express = require('express')
const mongoose = require('mongoose')
//Frontend backend se baat kar sakta ha
const cors = require('cors')
//.env file ke variables load karta hai
require('dotenv').config()

console.log('RAZORPAY KEY:', process.env.RAZORPAY_KEY_ID)

// Jaao routes folder me
// authRoutes.js file uthao
// aur authRoutes variable me store kar do

const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const orderRoutes = require('./routes/orderRoutes')

const app = express()

// Middleware
app.use(cors({
    origin: [
        'http://localhost:5173',
        process.env.CLIENT_URL   // deploy hone ke baad Vercel URL yahan aayega
    ]
}))

app.use(express.json())

// Routes
// authRoutes file ke saare routes ko /api/auth ke andar chala do
app.use('/api/auth', authRoutes)

app.use('/api/products', productRoutes)

app.use('/api/payment', paymentRoutes)

app.use('/api/orders', orderRoutes)

// MongoDB Connection
// MongoDB Atlas se connection banata hai
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

// Test Route
app.get('/', (req, res) => {
  res.send('API Running')
})

// Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
