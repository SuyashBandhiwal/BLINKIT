const mongoose = require('mongoose')
// Order ke andar kaunsa data save hoga
const orderSchema = new mongoose.Schema({
    // Ye order kis user ne place kiya
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Order me kitne products hain
    items: [
        {
            // Kaunsa product order hua
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            // Product ka quantity
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'delivered', 'cancelled'],
        default: 'pending'
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true })
// createdAt: "2026-06-12T10:00:00.000Z"
// updatedAt: "2026-06-12T10:30:00.000Z"
// { timestamps: true }) - Tune order place kiya — createdAt save ho gaya Order status delivered hua — updatedAt update ho gaya (Automatically)

module.exports = mongoose.model('Order', orderSchema)