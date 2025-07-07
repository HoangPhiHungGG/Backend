Backend Ecommerce API
Đây là dự án backend cho một hệ thống thương mại điện tử đơn giản, xây dựng bằng Node.js, Express và MongoDB. API hỗ trợ các chức năng quản lý người dùng, sản phẩm, xác thực JWT, phân quyền (admin/user), upload ảnh, và phân trang.

Tính năng chính
Đăng ký, đăng nhập, đăng xuất, làm mới token cho người dùng
Quản lý thông tin người dùng (admin có thể xem, sửa, xóa tất cả user)
Quản lý sản phẩm: tạo, sửa, xóa, xem chi tiết, tìm kiếm, lọc, phân trang
Phân quyền truy cập: chỉ admin mới được thao tác CRUD sản phẩm và quản lý user
Upload ảnh sản phẩm và avatar người dùng
Xác thực JWT, lưu refresh token bằng cookie HTTPOnly
Xử lý lỗi tập trung, trả về thông báo rõ ràng
Công nghệ sử dụng
Node.js, Express
MongoDB, Mongoose
JWT (jsonwebtoken)
Multer (upload file)
Bcryptjs (hash password)
Dotenv, CORS, Body-parser, Cookie-parser
Cấu trúc thư mục
models: Định nghĩa schema cho User và Product
controllers: Xử lý logic cho các route
services: Chứa các hàm thao tác với database
routes: Định nghĩa các endpoint API
middleware: Xác thực, phân quyền, upload file
uploads: Lưu trữ ảnh upload
Khởi động dự án
Cài đặt package:
Tạo file .env với các biến môi trường cần thiết (xem ví dụ trong mã nguồn)
Chạy server:
