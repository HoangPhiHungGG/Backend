const Product = require("../models/Product.model");

const createProduct = async (productData, file) => {
  if (!file) throw new Error("Product image is required");
  productData.image = file.path.replace(/\\/g, "/");

  if (await Product.findOne({ name: productData.name })) {
    throw new Error("Product name already exists");
  }
  const product = await Product.create(productData);
  return product;
};

const getAllProducts = async (queryParams) => {
  const { page = 1, limit = 10, sort, search, filter } = queryParams;

  let findQuery = {};
  if (search) {
    findQuery.name = { $regex: search, $options: "i" };
  }
  if (filter) {
    const [field, value] = filter.split(":");
    if (field && value) findQuery[field] = value;
  }

  let sortOptions = {};
  if (sort) {
    const [field, order] = sort.split(":");
    sortOptions[field] = order === "desc" ? -1 : 1;
  } else {
    sortOptions.createdAt = -1;
  }

  const products = await Product.find(findQuery)
    .sort(sortOptions)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Product.countDocuments(findQuery);

  return {
    data: products,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getProductById = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");
  return product;
};

const updateProduct = async (productId, updateData, file) => {
  if (file) {
    updateData.image = file.path.replace(/\\/g, "/");
  }
  const product = await Product.findByIdAndUpdate(productId, updateData, {
    new: true,
  });
  if (!product) throw new Error("Product not found");
  return product;
};

const deleteProduct = async (productId) => {
  const product = await Product.findByIdAndDelete(productId);
  if (!product) throw new Error("Product not found");
  return { message: "Product deleted successfully" };
};

const deleteManyProducts = async (productIds) => {
  const result = await Product.deleteMany({ _id: { $in: productIds } });
  if (result.deletedCount === 0) {
    throw new Error("No products found with the given IDs");
  }
  return { message: `Successfully deleted ${result.deletedCount} products.` };
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  deleteManyProducts,
};
