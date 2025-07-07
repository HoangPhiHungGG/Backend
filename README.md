🛒 Backend Ecommerce API
Đây là dự án backend cho một hệ thống thương mại điện tử đơn giản, được xây dựng bằng Node.js, Express, và MongoDB. API hỗ trợ đầy đủ các chức năng quản lý người dùng, sản phẩm, xác thực người dùng với JWT, phân quyền (Admin/User), upload hình ảnh, và phân trang.

🚀 Tính năng chính
✅ Xác thực người dùng:

Đăng ký / Đăng nhập / Đăng xuất

Làm mới token bằng refresh token qua HTTPOnly cookie

👤 Quản lý người dùng:

Admin: xem, sửa, xóa bất kỳ user nào

User: xem/sửa thông tin cá nhân

📦 Quản lý sản phẩm:

Thêm, sửa, xóa, xem chi tiết

Tìm kiếm, lọc theo danh mục, phân trang

🔐 Phân quyền truy cập:

Admin: toàn quyền CRUD sản phẩm và người dùng

User: chỉ được thao tác cá nhân

🖼️ Upload ảnh:

Avatar người dùng

Hình ảnh sản phẩm

🔒 Bảo mật:

JWT cho xác thực người dùng

Refresh token lưu trong cookie an toàn (HTTPOnly)

⚠️ Xử lý lỗi tập trung:

Trả về thông báo lỗi chi tiết, dễ debug

🛠️ Công nghệ sử dụng
Node.js, Express

MongoDB, Mongoose

JWT (jsonwebtoken)

Multer (upload ảnh)

Bcrypt.js (mã hóa mật khẩu)

Dotenv, CORS, Body-parser, Cookie-parser

📁 Cấu trúc thư mục
bash
Sao chép
Chỉnh sửa
backend/
│
├── models/         # Schema cho User và Product
├── controllers/    # Xử lý logic API
├── services/       # Tầng thao tác database
├── routes/         # Định nghĩa các API endpoint
├── middleware/     # Auth, role, upload file, xử lý lỗi
├── uploads/        # Lưu trữ ảnh upload
├── config/         # Cấu hình MongoDB và biến môi trường
└── index.js        # Điểm khởi động server
⚙️ Khởi động dự án
1. Cài đặt package
bash
Sao chép
Chỉnh sửa
npm install
2. Tạo file .env
Tạo file .env trong thư mục backend/ với nội dung:

env
Sao chép
Chỉnh sửa
PORT=8080
MONGODB_URI=mongodb+srv://...
TOKEN_SECRET_KEY=your_secret
FRONTEND_URL=http://localhost:3000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
3. Chạy server
bash
Sao chép
Chỉnh sửa
npm start
📬 Liên hệ
Tác giả: Hoàng Phi Hùng
GitHub: HoangPhiHungGG

