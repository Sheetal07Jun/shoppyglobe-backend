const express = require("express");

const {
    getProducts,
    getSingleProduct,
    addProduct,
} = require("../controllers/productController");

const router = express.Router();

// GET all products
router.get("/", getProducts);

// GET single product
router.get("/:id", getSingleProduct);

// ADD product
router.post("/", addProduct);

module.exports = router;