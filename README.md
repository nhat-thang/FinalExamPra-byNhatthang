# Đề ôn thi cuối khoá – by Nhật Thăng

5 đề trắc nghiệm, mỗi đề 50 câu:

- **30 câu Phase 1 – AICB**: Day 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14
- **20 câu Phase 2 – Computer Vision & Robotics**: Day 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12

Tổng 250 câu, không câu nào lặp lại giữa các đề.

## Cách dùng

Mở `index.html` bằng trình duyệt (không cần cài gì). Bấm vào một đáp án để xem ngay:

- đáp án đúng,
- câu hỏi thuộc phase nào, ngày nào, kiến thức nào,
- vì sao đáp án đó đúng,
- vì sao từng phương án còn lại sai.

Có bộ lọc *Chưa làm / Câu sai / Phase 1 / Phase 2*, điểm theo từng đề và bảng điểm theo ngày khi làm xong. Tiến độ được lưu trong trình duyệt.

## Ghi chú về đáp án

Vị trí đáp án đúng được rải đều A/B/C/D trong mỗi đề, và độ dài phương án đã được cân bằng: chiến thuật "chọn câu dài nhất" hoặc "chọn câu ngắn nhất" đều chỉ đạt khoảng 20–25%.

## Cấu trúc

```
index.html                 # trang làm bài (dữ liệu nhúng sẵn)
source/questions/*.js      # ngân hàng câu hỏi
source/build/              # script kiểm tra và dựng lại index.html
```

Dựng lại sau khi sửa câu hỏi:

```
cd source/build
node check.js     # kiểm tra định dạng và phân bố độ dài đáp án
node build.js     # chia 5 đề và ghi index.html
```


