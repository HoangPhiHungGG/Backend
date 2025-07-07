🛒 Backend API cho Hệ thống Thương mại Điện tử
Đây là dự án backend cho một hệ thống thương mại điện tử đơn giản, được xây dựng bằng Node.js, Express, và MongoDB. API hỗ trợ đầy đủ các chức năng quản lý người dùng, sản phẩm, xác thực người dùng với JWT, phân quyền (Admin/User), upload hình ảnh, và phân trang.

🚀 Tính Năng Chính
✅ Xác thực Người dùng: Đăng ký, Đăng nhập, Đăng xuất, và làm mới token an toàn qua HTTPOnly cookie.

👤 Quản lý Người dùng: Phân quyền Admin (xem, sửa, xóa mọi user) và User (tự quản lý thông tin cá nhân).

📦 Quản lý Sản phẩm: CRUD sản phẩm, tìm kiếm, lọc theo danh mục, và phân trang.

🔐 Phân quyền Truy cập (Roles): Phân chia rõ ràng quyền hạn giữa Admin và User.

🖼️ Upload Ảnh: Hỗ trợ upload avatar cho người dùng và hình ảnh cho sản phẩm.

🔒 Bảo mật: Sử dụng JWT và Refresh Token để bảo vệ API.

⚠️ Xử lý Lỗi Tập trung: Middleware xử lý lỗi nhất quán, giúp debug dễ dàng.

🛠️ Công Nghệ Sử Dụng
Hạng mục

Công nghệ

Runtime & Framework

Node.js, Express.js

Cơ sở dữ liệu

MongoDB, Mongoose

Xác thực & Bảo mật

JSON Web Token, Bcrypt.js, Cookie-parser

Upload File

Multer

Công cụ khác

Dotenv, CORS, Body-parser

⚙️ Cài Đặt và Khởi Động
1. Clone repository
``
git clone https://github.com/HoangPhiHungGG/Web_Ban_Hang_AI.git
cd Web_Ban_Hang_AI/backend

3. Cài đặt các package cần thiết
``
npm install

4. Tệp Cấu hình Môi trường (.env)
Tạo một file .env ở thư mục gốc của backend/ và điền các thông tin cần thiết:
``
PORT=8080
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/your_db
TOKEN_SECRET_KEY=your_super_secret_key_for_jwt
FRONTEND_URL=http://localhost:3000
EMAIL_USER=your_email_for_sending_mail@gmail.com
EMAIL_PASS=your_google_app_password

4. Chạy server
Chế độ Development (tự động reload khi có thay đổi):
``
npm run dev

Chế độ Production:
``
npm start

📬 Liên Hệ
Tác giả: Hoàng Phi Hùng

GitHub: HoangPhiHungGG
