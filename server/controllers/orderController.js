const Order = require('../models/Order')

// Order place karo
const createOrder = async (req, res) => {
    try {
        const { items, totalAmount, address } = req.body

        const order = await Order.create({
            user: req.user._id,
            items,
            totalAmount,
            address
        })

        res.status(201).json(order)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// User ki orders lo
const getMyOrders = async (req, res) => {
    try {
        // Jo user login hai, uske saare orders lao
        const orders = await Order.find({ user: req.user._id })
         // Product ID ko name, price, image se replace karo
        .populate('items.product', 'name price image')

        res.json(orders)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Single order lo
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('items.product', 'name price image')

        if (!order) {
            return res.status(404).json({ message: 'Order not found' })
        }

        res.json(order)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { createOrder, getMyOrders, getOrderById }