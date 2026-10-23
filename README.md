# Đề ôn thi cuối khoá – by Nhật Thăng

5 đề trắc nghiệm, mỗi đề 50 câu:

- **30 câu Phase 1 – AICB**: Day 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14
- **20 câu Phase 2 – Computer Vision & Robotics**: Day 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12

Tổng 250 câu, không câu nào lặp lại giữa các đề.

## Cách dùng

Mở `index.html` bằng trình duyệt (không cần cài gì). Câu hỏi trong mỗi đề được xáo trộn, không ghi tên bài trước câu. Bấm vào một đáp án để xem ngay:

- đáp án đúng,
- câu hỏi thuộc phase nào, ngày nào, kiến thức nào,
- vì sao đáp án đó đúng,
- vì sao từng phương án còn lại sai.

Có bộ lọc *Chưa làm / Câu sai*, điểm theo từng đề và bảng điểm theo ngày khi làm xong. Tiến độ được lưu trong trình duyệt.

## Ghi chú về đáp án

Vị trí đáp án đúng được rải đều A/B/C/D trong mỗi đề, và độ dài phương án đã được cân bằng: chiến thuật "chọn câu dài nhất" hoặc "chọn câu ngắn nhất" đều chỉ đạt khoảng 20–25%.

## Bộ đề trọng tâm (dễ – trung bình): `de-trong-tam.html`

5 đề × 50 câu (30 Phase 1 + 20 Phase 2), mức dễ–trung bình, tập trung vào kiến thức hay ra thi nhất:

- **50 kiến thức trọng tâm** (30 Phase 1, 20 Phase 2), mỗi kiến thức viết thành 3 câu hỏi khác nhau và xuất hiện ở 3 trong 5 đề. Mỗi đề có 30 câu trọng tâm (18 P1 + 12 P2) và 20 câu riêng.
- Sau khi trả lời, câu trọng tâm hiện dấu ★ cùng danh sách các đề có hỏi lại kiến thức đó. Bộ lọc *Câu trọng tâm đã làm* gom các câu này lại để ôn.
- Cùng cách hoạt động như bộ đề chính: xáo trộn câu, ẩn tên bài cho tới khi trả lời, giải thích vì sao đúng/sai, cân bằng vị trí và độ dài đáp án.

Nguồn: `source-trong-tam/q/` (p1core, p2core, p1uniq, p2uniq, fix), dựng lại bằng `node source-trong-tam/build/build.js`.

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


