const Product = require("../models/Product");

// GET all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.json(products);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET single product
const getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        res.json(product);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// ADD product
const addProduct = async (req, res) => {
    try {

        const { name, price, description, stock, image } = req.body;

        const product = await Product.create({
            name,
            price,
            description,
            stock,
            image,
        });

        res.status(201).json(product);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

module.exports = {
    getProducts,
    getSingleProduct,
    addProduct,
};