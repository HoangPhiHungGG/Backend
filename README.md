🛒 Backend API cho Hệ thống Thương mại Điện tử
Đây là dự án backend cho một hệ thống thương mại điện tử đơn giản, được xây dựng bằng Node.js, Express, và MongoDB. API hỗ trợ đầy đủ các chức năng quản lý người dùng, sản phẩm, xác thực người dùng với JWT, phân quyền (Admin/User), upload hình ảnh, và phân trang.

🚀 Tính Năng Chính
✅ Xác thực Người dùng:

Đăng ký / Đăng nhập / Đăng xuất.

Làm mới token (refresh token) qua HTTPOnly cookie an toàn.

👤 Quản lý Người dùng:

Admin: Xem, sửa, xóa bất kỳ người dùng nào.

User: Tự xem và cập nhật thông tin cá nhân.

📦 Quản lý Sản phẩm:

Thêm, sửa, xóa, xem chi tiết sản phẩm.

Tìm kiếm, lọc theo danh mục, và phân trang.

🔐 Phân quyền Truy cập (Roles):

Admin: Toàn quyền trên hệ thống.

User: Giới hạn quyền thao tác trên dữ liệu cá nhân.

🖼️ Upload Ảnh:

Avatar cho người dùng.

Hình ảnh cho sản phẩm.

🔒 Bảo mật:

Sử dụng JSON Web Tokens (JWT) cho xác thực API.

Refresh token được lưu trong cookie với cờ HTTPOnly để tăng cường bảo mật.

⚠️ Xử lý Lỗi Tập trung:

Sử dụng middleware để bắt và xử lý lỗi một cách nhất quán, trả về thông báo lỗi chi tiết và dễ debug.

🛠️ Công Nghệ Sử Dụng
Runtime: Node.js

Framework: Express.js

Cơ sở dữ liệu: MongoDB với Mongoose ODM

Xác thực: JSON Web Token (jsonwebtoken)

Upload file: Multer

Mã hóa mật khẩu: Bcrypt.js

Quản lý biến môi trường: Dotenv

Khác: CORS, Body-parser, Cookie-parser

📁 Cấu Trúc Thư Mục
backend/
│
├── controllers/  # Xử lý logic cho các API endpoint
├── middleware/   # Middleware (xác thực, phân quyền, upload, xử lý lỗi)
├── models/       # Định nghĩa Schema cho User và Product với Mongoose
├── routes/       # Định nghĩa các routes của API
├── services/     # Tầng xử lý logic nghiệp vụ và tương tác với database
├── uploads/      # Thư mục lưu trữ ảnh đã upload
├── config/       # Cấu hình kết nối MongoDB và biến môi trường
└── index.js      # Điểm khởi động của server

⚙️ Cài Đặt và Khởi Động
1. Clone repository
git clone <URL-repository-cua-ban>
cd backend

2. Cài đặt các package cần thiết
npm install

3. Tạo file .env
Tạo một file .env ở thư mục gốc của backend/ với các biến môi trường sau:

PORT=8080
MONGODB_URI=mongodb+srv://...
TOKEN_SECRET_KEY=your_super_secret_key
FRONTEND_URL=http://localhost:3000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password

4. Chạy server
Chế độ development (tự động reload khi có thay đổi):

npm run dev

Chế độ production:

npm start

📬 Liên Hệ
Tác giả: Hoàng Phi Hùng

GitHub: HoangPhiHungGG
