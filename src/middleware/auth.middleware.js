const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({
        success: false,
        message: "Authentication invalid: No token provided",
      });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = { id: payload.id, isAdmin: payload.isAdmin };
    next();
  } catch (error) {
    return res
      .status(401)
      .json({
        success: false,
        message: "Authentication invalid: Token is invalid or expired",
      });
  }
};

const authAdmin = (req, res, next) => {
  auth(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res
        .status(403)
        .json({ success: false, message: "Forbidden: Admin access required" });
    }
  });
};

const authUserOrAdmin = (req, res, next) => {
  auth(req, res, () => {
    if (req.user.isAdmin || req.user.id === req.params.id) {
      next();
    } else {
      res
        .status(403)
        .json({ success: false, message: "Forbidden: You are not authorized" });
    }
  });
};

module.exports = { auth, authAdmin, authUserOrAdmin };
