const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const { authAdmin } = require("../middleware/auth.middleware");
const upload = require("../middleware/upload.middleware");

// Public routes
router.get("/all", productController.getAllProducts);
router.get("/details/:id", productController.getDetailsProduct);

// Admin routes
router.post(
  "/create",
  authAdmin,
  upload.single("image"),
  productController.createProduct
);
router.put(
  "/update/:id",
  authAdmin,
  upload.single("image"),
  productController.updateProduct
);
router.delete("/delete/:id", authAdmin, productController.deleteProduct);
router.post("/delete-many", authAdmin, productController.deleteMany);

module.exports = router;
