# 🛍️ BACKEND ECOMMERCE API

## 📌 Giới Thiệu

Dự án Backend cho hệ thống thương mại điện tử, được phát triển bằng **Node.js**, **Express** và **MongoDB**. Hệ thống hỗ trợ đầy đủ các tính năng từ quản lý người dùng, sản phẩm, xác thực JWT, phân quyền, upload ảnh đến phân trang và thống kê.

---

## 🚀 Tính Năng Chính

### 👤 Quản Lý Người Dùng

* **Đăng ký / Đăng nhập / Đăng xuất**
* Làm mới Token (JWT) qua HTTPOnly cookie
* Khôi phục mật khẩu
* Chỉnh sửa thông tin cá nhân
* Phân quyền (Admin/User)

### 📦 Quản Lý Sản Phẩm

* CRUD sản phẩm (Chỉ Admin)
* Tìm kiếm, lọc sản phẩm
* Phân trang sản phẩm
* Upload ảnh sản phẩm

### 🧑‍💼 Quản Trị (Admin)

* Quản lý user: xem, sửa, xóa, phân quyền
* Quản lý sản phẩm: thêm, sửa, xóa, cập nhật ảnh
* Thống kê sản phẩm, doanh thu

### 🔐 Bảo Mật

* Xác thực bằng JWT
* Lưu Refresh Token bằng Cookie HTTPOnly
* Bảo vệ API bằng middleware kiểm tra quyền truy cập

### 📩 Email & Thông Báo

* Gửi email xác nhận và khôi phục mật khẩu (SMTP)
* Gửi thông báo lỗi, phản hồi qua API

---

## 💡 Ưu Điểm Nổi Bật

* Cấu trúc RESTful API rõ ràng, dễ mở rộng
* Bảo mật cao với JWT, Cookie HTTPOnly
* Phân quyền theo vai trò người dùng
* Tối ưu hiệu năng với phân trang, truy vấn hiệu quả
* Dễ dàng tích hợp frontend qua CORS cấu hình động

---

## 🧱 Công Nghệ Sử Dụng

### Backend

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB, Mongoose
* **Xác thực:** JWT (jsonwebtoken)
* **Upload ảnh:** Multer
* **Mật khẩu:** Bcryptjs
* **Khác:** Dotenv, CORS, Cookie-parser, Nodemailer

---

## ⚙️ Cài Đặt & Khởi Chạy

### 1. Clone dự án

```bash
git clone https://github.com/HoangPhiHungGG/Backend.git
```

### 2. Cài đặt các package

```bash
cd Backend
npm install
```

### 3. Tạo file `.env`

```env
PORT=8080
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
FRONTEND_URL=https://web-ban-hang-ai.vercel.app
TOKEN_SECRET_KEY=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

### 4. Chạy server

```bash
npm start
```

---

## 📁 Cấu Trúc Dự Án

```
├── models/           # Định nghĩa schema cho MongoDB
├── controllers/      # Xử lý logic nghiệp vụ
├── routes/           # Định nghĩa endpoint API
├── services/         # Hàm tương tác với database
├── middleware/       # Auth, error handler, upload
├── uploads/          # Lưu ảnh sản phẩm/avatar
├── config/           # Cấu hình DB, môi trường
└── index.js          # Khởi động ứng dụng
```

---

## 📬 Liên hệ

**Hoàng Phi Hùng**
📧 Email: [hoangphihung072002@gmail.com](mailto:hoangphihung072002@gmail.com)
🔗 Dự án: [GitHub Backend](https://github.com/HoangPhiHungGG/Backend.git)
