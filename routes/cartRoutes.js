const express = require("express");

const {
    addToCart,
    updateCart,
    deleteCart,
} = require("../controllers/cartController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addToCart);
router.put("/:id", protect, updateCart);
router.delete("/:id", protect, deleteCart);

module.exports = router;