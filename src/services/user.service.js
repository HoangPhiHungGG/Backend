const User = require("../models/User.model");
const { generateTokens } = require("./jwt.service");

const register = async (userData) => {
  const { email } = userData;
  if (await User.findOne({ email })) {
    throw new Error("Email already exists");
  }
  const user = await User.create(userData);
  // Hide password from the returned object
  user.password = undefined;
  return user;
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error("Incorrect email or password");
  }
  const payload = { id: user._id, isAdmin: user.isAdmin };
  const tokens = generateTokens(payload);

  // Data to return to the user (without sensitive info)
  const user_data = {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    avatar: user.avatar,
  };
  return { ...tokens, user: user_data };
};

const updateUser = async (userId, updateData, file) => {
  if (file) {
    // file.path contains path like 'uploads\\avatar-16298123.jpg', normalize it
    updateData.avatar = file.path.replace(/\\/g, "/");
  }
  const user = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  }).select("-password");
  if (!user) throw new Error("User not found");
  return user;
};

const getAllUsers = async (queryParams) => {
  const { page = 1, limit = 10, sort, search } = queryParams;

  const findQuery = {};
  if (search) {
    findQuery.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ];
  }

  const sortOptions = {};
  if (sort) {
    const [field, order] = sort.split(":");
    sortOptions[field] = order === "desc" ? -1 : 1;
  } else {
    sortOptions.createdAt = -1;
  }

  const users = await User.find(findQuery)
    .select("-password")
    .sort(sortOptions)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await User.countDocuments(findQuery);

  return {
    data: users,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

const getUserById = async (userId) => {
  const user = await User.findById(userId).select("-password");
  if (!user) throw new Error("User not found");
  return user;
};

const deleteUser = async (userId) => {
  const user = await User.findByIdAndDelete(userId);
  if (!user) throw new Error("User not found");
  return { message: "User deleted successfully" };
};

module.exports = {
  register,
  login,
  updateUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
