const Cart = require("../models/Cart");
const Product = require("../models/Product");

// ADD to cart
const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Check product exists
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        const cartItem = await Cart.create({
            productId,
            quantity,
        });

        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// UPDATE cart quantity
const updateCart = async (req, res) => {
    try {
        const cartItem = await Cart.findById(req.params.id);

        if (!cartItem) {
            return res.status(404).json({
                message: "Cart item not found",
            });
        }

        cartItem.quantity = req.body.quantity;

        const updatedCart = await cartItem.save();

        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// DELETE cart item
const deleteCart = async (req, res) => {
    try {
        const cartItem = await Cart.findById(req.params.id);

        if (!cartItem) {
            return res.status(404).json({
                message: "Cart item not found",
            });
        }

        await cartItem.deleteOne();

        res.status(200).json({
            message: "Cart item removed",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    addToCart,
    updateCart,
    deleteCart,
};