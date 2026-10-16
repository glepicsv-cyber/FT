# Logistics Từ Số 0 — H5

Khoá tự học Logistics dạng web mobile (H5), build bằng [Vite](https://vitejs.dev).
Tiến độ học được lưu trong `localStorage` của trình duyệt.

## Cấu trúc

```
index.html               # trang chính (meta mobile, PWA manifest, font)
src/main.js              # nội dung bài học + logic (render, quiz, bài thi)
src/style.css            # giao diện
public/manifest.webmanifest, public/icon.svg
Logistics Từ Số 0.html   # bản gốc 1 file (giữ để tham khảo)
```

## Chạy

Yêu cầu Node.js ≥ 18.

```bash
npm install
```

```bash
npm run dev
```

Mở `http://localhost:5173`. Lệnh dev chạy với `--host`, nên điện thoại cùng mạng Wi‑Fi
có thể mở bằng địa chỉ `Network` mà Vite in ra (vd. `http://192.168.1.10:5173`).

## Build để deploy

```bash
npm run build
```

Kết quả nằm trong `dist/` — toàn bộ là file tĩnh, đường dẫn tương đối, nên có thể
đưa lên bất kỳ host tĩnh nào (Nginx, Netlify, Vercel, GitHub Pages, CDN) hoặc nhúng
vào WebView của app. Xem thử bản build:

```bash
npm run preview
```
