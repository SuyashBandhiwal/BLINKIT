const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    description: {
        type: String
    },
    unit: {
  type: String,
  default: '1 pc'
     },
     originalPrice: {
  type: Number
}  

}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)