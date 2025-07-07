const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const {
  auth,
  authAdmin,
  authUserOrAdmin,
} = require("../middleware/auth.middleware");
const upload = require("../middleware/upload.middleware");

// Public routes
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/refresh-token", userController.refreshToken);

// Private routes (requires authentication)
router.post("/logout", auth, userController.logout);
router.get("/details/:id", authUserOrAdmin, userController.getDetailsUser);
router.put(
  "/update/:id",
  authUserOrAdmin,
  upload.single("avatar"),
  userController.updateUser
);

// Admin routes
router.get("/all", authAdmin, userController.getAllUsers);
router.delete("/delete/:id", authAdmin, userController.deleteUser);

module.exports = router;
