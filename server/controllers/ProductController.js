const Product = require('../models/Product')

// All Products
const getProducts = async (req, res) => {

    try {

        const products = await Product.find()

        res.json(products)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}

// Single Product
const getProductById = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id)

        if (!product) {

            return res.status(404).json({
                message: 'Product not found'
            })
        }

        res.json(product)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}

// Create Product
const createProduct = async (req, res) => {

    try {

        const {
            name,
            price,
            category,
            image,
            stock,
            description
        } = req.body

        const product = await Product.create({
            name,
            price,
            category,
            image,
            stock,
            description
        })

        res.status(201).json(product)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}

// Category Products
const getProductsByCategory = async (req, res) => {

    try {

        const products = await Product.find({
            category: req.params.category
        })

        res.json(products)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}

// Update Product
const updateProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id)

        if (!product) {

            return res.status(404).json({
                message: 'Product not found'
            })
        }

        product.name =
            req.body.name || product.name

        product.price =
            req.body.price || product.price

        product.category =
            req.body.category || product.category

        product.image =
            req.body.image || product.image

        product.stock =
            req.body.stock || product.stock

        product.description =
            req.body.description || product.description

        const updatedProduct = await product.save()

        res.json(updatedProduct)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}

// Delete Product
const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id)

        if (!product) {

            return res.status(404).json({
                message: 'Product not found'
            })
        }

        await product.deleteOne()

        res.json({
            message: 'Product deleted'
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
    getProductsByCategory
}