# 💗 Trang Web Lãng Mạn 20/10

Một trang web đầy cảm xúc được thiết kế đặc biệt cho ngày Phụ nữ Việt Nam 20/10.

## 🌸 Tính năng

### 🎨 Thiết kế
- **Phong cách**: Dễ thương, lãng mạn, nhẹ nhàng với màu sắc pastel
- **Màu sắc chủ đạo**: 
  - Hồng phấn (#FFC1CC) - Tình yêu và dịu dàng
  - Trắng kem (#FFF9F9) - Ấm áp, trong sáng
  - Tím lavender (#C6B8E9) - Hoài niệm và lãng mạn
  - Vàng nhạt (#FFF3B0) - Hy vọng

### 💌 Các phần trong trang web

1. **🏠 Trang mở đầu**
   - Hiệu ứng fade-in với hình ảnh đẹp
   - Lời chào ngọt ngào
   - Nút "Bắt đầu nhé 💗" để chuyển đến phần tiếp theo

2. **💭 Câu chuyện & lời xin lỗi**
   - Hiệu ứng parallax khi cuộn
   - Từng đoạn text xuất hiện chậm rãi
   - Chèn ảnh kỷ niệm với viền sáng pastel

3. **🌸 Hồi ức ngọt ngão**
   - Gallery ảnh trượt ngang tự động
   - Hiệu ứng hover phóng to
   - Lời chú thích ngọt ngào cho từng ảnh

4. **💞 Thư tình**
   - Hiệu ứng typewriter cho lá thư
   - Font chữ viết tay Dancing Script
   - Nút trái tim với hiệu ứng đập
   - Tin nhắn ẩn khi click vào trái tim

5. **🎁 Tương tác dễ thương**
   - Mini game nhấn vào hoa để hiện tin nhắn
   - Hiệu ứng sparkle và petals bay
   - 6 bông hoa với 6 tin nhắn khác nhau

6. **🌅 Phần kết**
   - Nền hoàng hôn gradient
   - Lời mời cuối cùng
   - Nút "Đồng ý nhé! 💬"

### 🎵 Âm thanh & Nhạc nền
- Phát nhạc tự động từ file `music/music.mp3`
- Hiển thị subtitle từ file `music/sub.srt`
- Nút điều khiển nhạc ở góc dưới bên phải
- Hiệu ứng âm thanh cho các tương tác

### ✨ Hiệu ứng đặc biệt
- **Trái tim bay**: Xuất hiện khắp màn hình
- **Parallax scroll**: Chuyển động mượt mà khi cuộn
- **Hover effects**: Phóng to, sáng lên khi di chuột
- **Floating hearts**: Trái tim bay nhẹ ở background
- **Mouse trail**: Vệt chuột lãng mạn
- **Touch ripples**: Hiệu ứng chạm trên mobile
- **Keyboard shortcuts**: 
  - Space: Tạm dừng/phát nhạc
  - ↓: Chuyển đến phần tiếp theo
  - ↑: Chuyển về phần trước

## 🚀 Cách chạy

### Phương pháp 1: Mở trực tiếp file
```bash
# Mở file index.html bằng trình duyệt
# Lưu ý: Một số tính năng có thể không hoạt động do CORS policy
```

### Phương pháp 2: Sử dụng HTTP Server (Khuyến nghị)
```bash
# Cài đặt Node.js trước (nếu chưa có)
# Sau đó chạy:
npm install
npm start

# Hoặc sử dụng live-server cho development:
npm run dev
```

### Phương pháp 3: Sử dụng Python (nếu có Python)
```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

### Phương pháp 4: Sử dụng VS Code Live Server
1. Cài đặt extension "Live Server" trong VS Code
2. Click chuột phải vào file `index.html`
3. Chọn "Open with Live Server"

## 📁 Cấu trúc thư mục

```
d:\Code\Code\20-10\
├── index.html          # File HTML chính
├── styles.css          # CSS nâng cao
├── script.js           # JavaScript tương tác
├── package.json        # Cấu hình Node.js
├── README.md          # Hướng dẫn này
├── mieu.md            # Mô tả requirements
├── hinhanh/           # Thư mục chứa ảnh
│   ├── IMG_0088(1).JPG
│   ├── IMG_0094.JPG
│   ├── IMG_0099.JPG
│   ├── IMG_0256.jpg
│   ├── IMG_0317.jpg
│   ├── IMG_0328.jpg
│   ├── z5026587538466_d59f6fc89300bd87dd8f8fede125f9e0.jpg
│   ├── z5026587735722_8b5e8d05c0733cf1d1c0ed23adfe038d.jpg
│   └── z5026640533542_a551e7a49e95e0f4091945f0b3c341bd.jpg
└── music/             # Thư mục chứa nhạc
    ├── music.mp3      # File nhạc nền
    └── sub.srt        # File subtitle
```

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và animations
- **JavaScript ES6+**: Tương tác và hiệu ứng
- **TailwindCSS**: Framework CSS utility-first
- **GSAP**: Thư viện animation mạnh mẽ
- **SwiperJS**: Carousel/slider cho gallery ảnh
- **Web Audio API**: Xử lý âm thanh và subtitle

## 🎯 Tương thích

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

Trang web được tối ưu cho:
- 📱 Mobile (320px - 768px)
- 📱 Tablet (768px - 1024px)  
- 💻 Desktop (1024px+)

## 🔧 Tùy chỉnh

### Thay đổi ảnh
- Thay thế ảnh trong thư mục `hinhanh/`
- Cập nhật đường dẫn trong file `index.html`

### Thay đổi nhạc
- Thay thế file `music/music.mp3`
- Cập nhật file subtitle `music/sub.srt` (tùy chọn)

### Thay đổi nội dung
- Chỉnh sửa text trong file `index.html`
- Cập nhật tin nhắn trong các bông hoa (section interaction)

### Thay đổi màu sắc
- Chỉnh sửa CSS variables trong `styles.css`
- Cập nhật TailwindCSS classes trong `index.html`

## 💡 Tips sử dụng

1. **Âm thanh**: Click vào bất kỳ đâu để bắt đầu phát nhạc (yêu cầu của trình duyệt)
2. **Mobile**: Chạm vào màn hình để tạo hiệu ứng ripple
3. **Desktop**: Di chuyển chuột để thấy mouse trail
4. **Hoa**: Click vào từng bông hoa để xem tin nhắn khác nhau
5. **Trái tim**: Click vào trái tim đỏ để xem hiệu ứng đặc biệt

## 🤝 Đóng góp

Nếu bạn muốn cải thiện trang web:
1. Fork repository này
2. Tạo branch mới cho tính năng của bạn
3. Commit các thay đổi
4. Tạo Pull Request

## 📄 License

MIT License - Bạn có thể sử dụng freely cho mục đích cá nhân.

---

💝 **Được tạo với tình yêu dành cho ngày 20/10** 💝