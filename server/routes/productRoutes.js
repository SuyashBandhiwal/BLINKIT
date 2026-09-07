const express = require('express')

const router = express.Router()

const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductsByCategory
} = require('../controllers/ProductController')

const { protect } = require('../middleware/authMiddleware')

const { adminOnly } = require('../middleware/adminMiddleware')

// Ye Product Routes hain. Inka kaam sirf URL ko controller functions se connect karna hai

// Saare products lao
router.get('/', getProducts)
// :category ke products lao
router.get('/category/:category', getProductsByCategory)
// :ID ke products lao
router.get('/:id', getProductById)

router.post('/', protect, adminOnly, createProduct)

router.put('/:id', protect, adminOnly, updateProduct)

router.delete('/:id', protect, adminOnly, deleteProduct)

module.exports = router