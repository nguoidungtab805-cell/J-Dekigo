# 🇯🇵 J-Deki-Go (Web Learn Japan)

J-Deki-Go là một nền tảng web ứng dụng học tiếng Nhật toàn diện, hỗ trợ người dùng tự học, rèn luyện các kỹ năng tiếng Nhật và ôn thi chứng chỉ JLPT. Dự án được xây dựng với các công nghệ hiện đại, mang lại trải nghiệm học tập mượt mà và trực quan.

## 🚀 Công nghệ sử dụng (Tech Stack)

### Frontend
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Japanese Text Utility:** [Wanakana](https://wanakana.com/) (Hỗ trợ chuyển đổi Romaji, Hiragana, Katakana)

### Backend & Database
- **API:** Next.js API Routes
- **Database:** MongoDB
- **ORM/ODM:** [Mongoose](https://mongoosejs.com/)
- **Cloud Storage:** [Cloudinary](https://cloudinary.com/) (Lưu trữ hình ảnh, audio)

### Authentication & Security
- **Auth:** Custom authentication với JWT (`jsonwebtoken`)
- **Password Hashing:** `bcryptjs`
- **Validation:** `zod`

## 🌟 Tính năng chính (Features)

### 1. Học tập & Rèn luyện kỹ năng
Dự án cung cấp đầy đủ các module để cải thiện mọi khía cạnh của tiếng Nhật:
- **Ngữ pháp (Grammar):** Học cấu trúc, ví dụ minh họa và giải thích chi tiết.
- **Hán tự (Kanji):** Âm On, âm Kun, cách viết và từ vựng liên quan.
- **Từ vựng (Vocabulary):** Học từ vựng theo chủ đề, cấp độ.
- **Đọc hiểu (Reading):** Bài tập đọc hiểu với nhiều dạng câu hỏi.
- **Luyện nói & Shadowing:** Cung cấp audio và text để người dùng luyện phát âm và ngữ điệu chuẩn người bản xứ.
- **Video bài giảng:** Tích hợp video học tập trực quan.
- **Study Set (Bộ học tập):** Tạo và học theo các bộ thẻ flashcard/từ vựng tùy chỉnh.

### 2. Thi thử JLPT (Mock Tests)
- Hệ thống đề thi mô phỏng JLPT các cấp độ.
- Các dạng bài kiểm tra nhỏ (Mini tests) để rèn luyện kỹ năng giải đề.
- Tính điểm và xem lại đáp án chi tiết.

### 3. Tài khoản & Cá nhân hóa
- Đăng ký, đăng nhập an toàn.
- Quản lý thông tin hồ sơ (Profile).
- Theo dõi tiến độ học tập và kết quả thi.

### 4. Trang Quản trị (Admin Dashboard)
- Quản lý toàn bộ nội dung: Bài học, Từ vựng, Kanji, Ngữ pháp, Đề thi...
- Quản lý người dùng.
- Thống kê dữ liệu hệ thống.

## 📂 Cấu trúc thư mục (Folder Structure)

```text
├── app/                  # Chứa các pages, layouts, routing (Next.js App Router)
│   ├── admin/            # Trang quản trị (Dashboard, Quản lý dữ liệu)
│   ├── api/              # Backend API Routes
│   ├── grammar/          # Trang học ngữ pháp
│   ├── kanji/            # Trang học Kanji
│   ├── vocabulary/       # Trang học từ vựng
│   ├── mock-test/        # Trang thi thử JLPT
│   ├── reading/          # Trang luyện đọc hiểu
│   ├── speaking/         # Trang luyện nói
│   ├── shadowing/        # Trang luyện Shadowing
│   ├── study-set/        # Trang học theo bộ từ vựng
│   └── ...               # (Auth: login, register, profile, video...)
├── components/           # Chứa các UI components dùng chung (Buttons, Cards, Navbar...)
│   ├── admin/            # Components riêng cho Admin
│   ├── auth/             # Components cho xác thực
│   ├── feature/          # Components tính năng đặc thù (VD: MockTestExamRunner...)
│   ├── layout/           # Layout components
│   └── providers/        # Context Providers
├── server/               # Logic backend & Database
│   ├── models/           # Mongoose schemas (user, grammar, kanji, test, question...)
│   ├── lib/              # Database connection & configurations
│   ├── middlewares/      # API middlewares (Auth check...)
│   ├── modules/          # Core logic & Controllers cho API
│   └── utils/            # Helper functions cho backend
├── public/               # Tài nguyên tĩnh (Images, icons...)
├── scripts/              # Các script hỗ trợ (VD: Chạy dev server với port cố định)
└── ...                   # (Các file config: package.json, tailwind.config.js, next.config.js...)
```

## 🛠 Hướng dẫn cài đặt & Chạy dự án (Installation & Setup)

**1. Clone dự án**
```bash
git clone <repository_url>
cd Web-Learn-Japan
```

**2. Cài đặt thư viện**
```bash
npm install
```

**3. Cấu hình biến môi trường**
Tạo file `.env` ở thư mục gốc (tham khảo file `.env.example`) và điền các thông tin:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

**4. Chạy dự án ở chế độ phát triển (Development)**
```bash
npm run dev
# Hoặc chạy lệnh clean build trước
npm run predev
```
*Truy cập ứng dụng tại địa chỉ: `http://localhost:3000` (hoặc cổng được cấu hình trong scripts)*

**5. Build dự án (Production)**
```bash
npm run build
npm run start
```

---
*Được phát triển với mục tiêu mang tiếng Nhật đến gần hơn với mọi người.* 🎌
