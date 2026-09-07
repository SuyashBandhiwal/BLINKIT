const express = require('express')
const router = express.Router()
const { createOrder, getMyOrders, getOrderById } = require('../controllers/orderController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', protect, createOrder)
router.get('/myorders', protect, getMyOrders)
// GET /order/123 - Pehle protect chalega - Order ID = 123 - getOrderById(id)
router.get('/:id', protect, getOrderById)

module.exports = router