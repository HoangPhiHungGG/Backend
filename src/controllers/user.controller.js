const UserService = require("../services/user.service");
const {
  verifyRefreshToken,
  generateTokens,
} = require("../services/jwt.service");

const register = async (req, res, next) => {
  try {
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }
    const user = await UserService.register(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await UserService.login(email, password);

    res.cookie("refreshToken", data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        accessToken: data.accessToken,
        user: data.user,
      },
    });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  res.clearCookie("refreshToken");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

const refreshToken = async (req, res, next) => {
  const token = req.cookies.refreshToken;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Refresh token not found" });

  try {
    const userData = await verifyRefreshToken(token);
    const payload = { id: userData.id, isAdmin: userData.isAdmin };
    const { accessToken } = generateTokens(payload);
    res.status(200).json({ success: true, data: { accessToken } });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await UserService.updateUser(
      req.params.id,
      req.body,
      req.file
    );
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserService.getAllUsers(req.query);
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

const getDetailsUser = async (req, res, next) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.status(200).json({
      success: true,
      message: "User details retrieved successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const result = await UserService.deleteUser(req.params.id);
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  refreshToken,
  updateUser,
  getAllUsers,
  getDetailsUser,
  deleteUser,
};
