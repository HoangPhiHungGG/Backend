const ProductService = require("../services/product.service");

const createProduct = async (req, res, next) => {
  try {
    const product = await ProductService.createProduct(req.body, req.file);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const result = await ProductService.getAllProducts(req.query);
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

const getDetailsProduct = async (req, res, next) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product details retrieved successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = await ProductService.updateProduct(
      req.params.id,
      req.body,
      req.file
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const result = await ProductService.deleteProduct(req.params.id);
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMany = async (req, res, next) => {
  try {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids)) {
      return res
        .status(400)
        .json({
          success: false,
          message: "`ids` must be an array of product IDs",
        });
    }
    const result = await ProductService.deleteManyProducts(ids);
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getDetailsProduct,
  updateProduct,
  deleteProduct,
  deleteMany,
};
