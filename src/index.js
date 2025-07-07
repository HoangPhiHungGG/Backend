// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const path = require("path");
// const routes = require("./routes");

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3001;
// mongoose.set("strictQuery", true);

// // Middlewares
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Thay bằng domain frontend của bạn
//     credentials: true,
//   })
// );
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));

// // Serve static files (uploaded images)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // API Routes
// app.use("/api", routes);

// // Centralized Error Handling Middleware

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(statusCode).json({
//     success: false,
//     message: message,
//   });
// });

// //

// // Database Connection
// mongoose
//   .connect(process.env.MONGO_DB)
//   .then(() => console.log("✅ Connected to MongoDB successfully!"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// app.listen(port, () => {
//   console.log(`🚀 Server is running at http://localhost:${port}`);
// });

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const routes = require("./routes");
const User = require("./models/User.model"); // QUAN TRỌNG: Import User Model

// Load biến môi trường từ file .env
dotenv.config();

// Khởi tạo ứng dụng Express
const app = express();
const port = process.env.PORT || 3001;

// Cấu hình Mongoose để tương thích với phiên bản tương lai
mongoose.set("strictQuery", true);

// === MIDDLEWARES ===
// Kích hoạt CORS để cho phép frontend truy cập
app.use(
  cors({
    origin: "http://localhost:3000", // Thay bằng domain của frontend khi deploy
    credentials: true, // Cho phép gửi cookie
  })
);

// Phân tích (parse) body của request
app.use(bodyParser.json());
app.use(cookieParser()); // Để đọc cookie từ request (cần cho refresh token)
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Phục vụ các file tĩnh từ thư mục 'uploads' (để hiển thị ảnh)
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// === API ROUTES ===
app.use("/api", routes);

// === XỬ LÝ LỖI TẬP TRUNG ===
// Middleware này sẽ bắt tất cả các lỗi được 'next(error)' gửi đến
app.use((err, req, res, next) => {
  console.error(err.stack); // Ghi lại lỗi đầy đủ ra console để debug
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message: message,
  });
});

// === HÀM TIỆN ÍCH ===
// Hàm tự động tạo tài khoản Admin khi server khởi động
const createAdminAccount = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "adminpassword";

    const existingAdmin = await User.findOne({ email: adminEmail });

    if (!existingAdmin) {
      await User.create({
        name: "Admin",
        email: adminEmail,
        password: adminPassword, // Hook trong User.model.js sẽ tự động hash mật khẩu này
        isAdmin: true,
      });
      console.log("✅ Admin account created successfully.");
      console.log(`   Email: ${adminEmail}`);
      console.log(`   Password: ${adminPassword}`);
    } else {
      console.log("ℹ️ Admin account already exists.");
    }
  } catch (error) {
    console.error("❌ Error creating admin account:", error);
  }
};

// === KHỞI ĐỘNG SERVER ===
// Hàm chính để khởi động toàn bộ ứng dụng một cách tuần tự
const startServer = async () => {
  try {
    // 1. Kết nối đến MongoDB và chờ cho đến khi hoàn thành
    await mongoose.connect(process.env.MONGO_DB);
    console.log("✅ Connected to MongoDB successfully!");

    // 2. Sau khi kết nối thành công, kiểm tra và tạo tài khoản Admin
    await createAdminAccount();

    // 3. Cuối cùng, khởi động server Express để lắng nghe các request
    app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    // Nếu có lỗi trong quá trình kết nối DB, server sẽ không khởi động
    console.error("❌ Failed to connect to MongoDB or start server:", error);
    process.exit(1); // Thoát ứng dụng với mã lỗi
  }
};

// Gọi hàm để bắt đầu toàn bộ quá trình
startServer();
