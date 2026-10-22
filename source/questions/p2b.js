// Phase 2 · CV & Robotics · Day 6 – 12
// ---------- Day 6 ----------
Q(2,6,"Đặc điểm đám mây điểm",
"Xe con ở 10 m và ở 70 m trong đám mây điểm LiDAR khác nhau chủ yếu ở điểm nào?",
["Hộp của xe ở xa nhỏ hơn hộp xe ở gần","Ít điểm hơn trên vật ở xa","Toạ độ ở xa được đổi sang đơn vị pixel","Góc yaw của xe ở xa bị đảo chiều"],1,
"LiDAR đo bằng mét thật nên kích thước vật không đổi theo khoảng cách; chỉ mật độ điểm giảm mạnh.",
["Khác ảnh camera, LiDAR không làm vật co lại ở xa.","","Toạ độ LiDAR luôn là mét.","Hướng vật không đổi theo khoảng cách."]);

Q(2,6,"PointNet",
"PointNet xử lý vấn đề 'điểm không có thứ tự' bằng cách nào?",
["Sắp xếp điểm theo khoảng cách trước khi đưa vào","MLP trên từng điểm rồi max-pool","Chia không gian thành voxel","Chiếu lên ảnh rồi dùng CNN"],1,
"Max-pool là phép đối xứng: đổi thứ tự điểm thì kết quả không đổi.",
["Sắp xếp dễ vỡ khi có nhiễu và không phải cách PointNet làm.","","Voxel là một cách biểu diễn khác (VoxelNet).","Chiếu lên ảnh là range-view hoặc fusion, không phải PointNet."]);

Q(2,6,"Chọn biểu diễn",
"Dự án mới cần baseline 3D nhanh, dễ triển khai trên GPU nhúng. Lựa chọn hợp lý?",
["PointNet trên toàn cảnh","PointPillars","Voxel 2 cm với sparse conv","Ensemble ba mô hình"],1,
"PointPillars gom điểm thành cột, tạo ảnh BEV giả rồi dùng CNN 2D: nhanh, đơn giản, là baseline đầu tiên hợp lý.",
["PointNet trên hàng trăm nghìn điểm chậm và thiếu ngữ cảnh.","","Voxel rất nhỏ rất tốn bộ nhớ và tính toán.","Ensemble nhân chi phí, không hợp baseline."]);

Q(2,6,"Pillar",
"Biểu diễn nào mất thông tin chiều cao sớm nhất?",
["Voxel","Point","Pillar","Range view"],2,
"Pillar gom mọi điểm trong một cột đứng thành một vector rồi đưa về ảnh 2D nhìn từ trên.",
["Voxel giữ ô theo cả ba chiều.","Point giữ nguyên toạ độ từng điểm.","","Range view giữ góc ngẩng của tia nên vẫn có thông tin cao."]);

Q(2,6,"Quy ước hộp 3D",
"Hộp dự đoán trông gần đúng khi vẽ, nhưng AP3D gần 0. Kiểm tra gì trước?",
["Tăng số epoch vì mô hình chưa hội tụ","Quy ước chiều yaw và gốc z","Đổi sang backbone voxel mạnh hơn","Tăng augmentation xoay và lật ngang"],1,
"Nhầm chiều quay yaw hoặc gốc z (đáy hay tâm) làm IoU 3D tụt mạnh dù hình vẽ trông gần đúng.",
["Mô hình có vẻ đã học (hộp đúng chỗ); vấn đề là quy ước.","","Đổi backbone không sửa lỗi quy ước.","Augmentation không liên quan quy ước toạ độ."]);

Q(2,6,"Chiếu LiDAR lên ảnh",
"Để chiếu một điểm LiDAR lên ảnh camera cần những gì?",
["Chỉ ma trận K","R, t, K và căn thời gian","Chỉ R và t","Chỉ timestamp"],1,
"R, t (ngoại tại) đưa điểm về hệ camera, K (nội tại) chiếu lên mặt ảnh, căn thời gian khi xe hoặc vật chuyển động.",
["K không biết vị trí camera so với LiDAR.","","Thiếu K thì không ra được pixel.","Timestamp không cho biết hình học."]);

Q(2,6,"Kiểu fusion",
"BEVFusion ghép camera và LiDAR ở mức nào?",
["Sớm: tô điểm bằng nhãn ảnh","Giữa: trộn đặc trưng trên BEV chung","Muộn: gộp hộp kết quả","Theo track bằng Kalman"],1,
"Cả hai cảm biến được đưa về bản đồ đặc trưng nhìn từ trên rồi trộn: fusion mức giữa.",
["Tô điểm bằng nhãn ảnh là PointPainting.","","Gộp hộp là fusion muộn.","Fusion theo track là ở tầng tracking, không phải BEVFusion."]);

Q(2,6,"Baseline chỉ LiDAR",
"Vì sao luôn giữ baseline chỉ LiDAR khi làm fusion?",
["Vì fusion luôn kém hơn LiDAR đơn lẻ","Để biết fusion giúp hay hại theo lát","Vì camera không hoạt động tốt ban ngày","Vì KITTI bắt buộc nộp kèm kết quả này"],1,
"Fusion có thể làm hại khi calib trôi, timestamp lệch, camera chói. So theo lát với baseline mới biết giá trị thật.",
["Fusion thường giúp, nhưng không tự động giúp.","","Camera dùng tốt ban ngày.","Không có quy định như vậy."]);

Q(2,6,"Kích thước voxel",
"Giảm kích thước voxel từ 10 cm xuống 5 cm. Đánh đổi chính?",
["Nhanh hơn nhưng kém chi tiết","Chi tiết hơn, tính toán tăng mạnh","Không đổi gì đáng kể nhờ dùng sparse conv","Mất thông tin vận tốc"],1,
"Voxel nhỏ giữ chi tiết hình học, nhưng số ô tăng theo lập phương nên tốn bộ nhớ và thời gian.",
["Ngược chiều: voxel nhỏ thì chậm hơn.","","Sparse conv giảm phí cho ô trống, không xoá đánh đổi.","Voxel không mang thông tin vận tốc."]);

// ---------- Day 7 ----------
Q(2,7,"Vì sao cần tracking",
"Bài học từ vụ Tempe 2018 (NTSB) với tracking là gì?",
["Detector không thấy người đi bộ","Đổi nhãn liên tục làm mất lịch sử chuyển động","Radar bị hỏng","Camera bị chói đèn"],1,
"Hệ thống phát hiện từ 5,2 giây trước nhưng mỗi lần đổi nhãn lại xoá lịch sử, nên không dự đoán được người đang băng ngang.",
["Báo cáo cho thấy vật đã được phát hiện nhiều giây trước.","","Không phải lỗi phần cứng radar.","Không phải vấn đề chói đèn."]);

Q(2,7,"Vòng đời track",
"Người bị che 22 khung, track_buffer = 30. Khi hiện lại và ghép thành công, điều gì xảy ra?",
["Nhận ID mới","Giữ ID cũ","Track bị xoá","Track quay về trạng thái tạm"],1,
"Track ở trạng thái 'mất' được giữ tối đa 30 khung; 22 < 30 nên ghép lại được với ID cũ.",
["Chỉ nhận ID mới khi đã quá hạn chờ.","","Chưa quá hạn nên chưa xoá.","Track đã xác nhận không quay về tạm khi ghép lại."]);

Q(2,7,"Chi phí IoU",
"Video 5 fps, xe chạy nhanh. Chi phí ghép 1 − IoU gặp vấn đề gì?",
["IoU luôn bằng 1 vì hai hộp cùng kích thước","Hộp không chồng nhau nên IoU = 0","IoU âm khiến chi phí ghép bị đảo dấu","IoU tính quá chậm với nhiều hộp lớn"],1,
"Giữa hai khung xa nhau, hộp không giao nhau nên IoU không phân biệt được gần hay xa; nên dùng Mahalanobis hoặc khoảng cách tâm.",
["IoU = 1 chỉ khi hai hộp trùng khít.","","IoU không bao giờ âm.","Tính IoU rất rẻ."]);

Q(2,7,"Gating DeepSORT",
"Ngưỡng 9,4877 trong DeepSORT ứng với gì?",
["Chi-square 2 bậc tự do, 95%","Chi-square 4 bậc tự do, 95%","3σ của phân phối chuẩn","IoU tối thiểu 0,5"],1,
"Phép đo 4 chiều (tâm x, y, tỉ lệ, chiều cao); mức 95% của chi-square 4 bậc tự do là 9,4877. Với 2 bậc tự do là 5,99.",
["2 bậc tự do cho 5,99.","","3σ là cách làm 1D của Day 5.","Không phải ngưỡng IoU."]);

Q(2,7,"Hungarian",
"Hungarian khác ghép tham lam ở điểm nào?",
["Luôn nhanh hơn tham lam","Tối ưu tổng chi phí toàn cục","Không cần xây ma trận chi phí trước","Chỉ dùng cho Re-ID"],1,
"Hungarian tìm phân công tổng chi phí nhỏ nhất (O(n³)); tham lam khoá cặp tốt cục bộ có thể làm cặp khác ghép sai.",
["Tham lam thường nhanh hơn.","","Hungarian hoạt động trên ma trận chi phí.","Dùng cho bất kỳ chi phí nào: IoU, Mahalanobis, Re-ID."]);

Q(2,7,"ByteTrack",
"ByteTrack dùng hộp điểm thấp như thế nào?",
["Bỏ hoàn toàn để tránh nhiễu từ hộp kém","Ghép vòng 2, không tạo track mới","Dùng chúng để khởi tạo thêm track mới","Coi như hộp điểm cao ngay ở vòng đầu"],1,
"Hộp điểm thấp thường là vật bị che một phần; ghép vòng 2 cứu track, nhưng không sinh track mới để tránh track giả.",
["Bỏ hết là cách của SORT với ngưỡng cố định.","","Tạo track từ hộp điểm thấp sinh nhiều track giả.","Chúng được xử lý ở vòng riêng sau hộp điểm cao."]);

Q(2,7,"Chọn tracker",
"Camera gắn trên xe đang rẽ gấp, mọi track lệch theo cùng hướng. Tracker nào nhắm đúng vấn đề?",
["SORT","ByteTrack","BoT-SORT","Tracktor"],2,
"BoT-SORT có bù chuyển động camera (GMC): ước lượng chuyển động của cả khung trước khi dự đoán từng track.",
["SORT giả định camera đứng yên.","ByteTrack mạnh với che khuất, không bù chuyển động camera.","","Tracktor dùng detector hồi quy hộp, không có GMC."]);

Q(2,7,"IDF1",
"IDTP = 9, IDFN = 3, IDFP = 3. IDF1 bằng bao nhiêu?",
["67%","75%","80%","90%"],1,
"IDF1 = 2·IDTP/(2·IDTP + IDFN + IDFP) = 18/24 = 75%.",
["67% là 2/3, quên nhân đôi IDTP.","","80% sai phép chia.","90% gần với một MOTA cao, không phải IDF1 ở đây."]);

Q(2,7,"Chọn chỉ số",
"Bài toán đếm khách đi qua cửa, lỗi lớn nhất là một người bị đếm nhiều lần. Chỉ số nào nên ưu tiên?",
["MOTP","MOTA","IDF1 hoặc HOTA","FPS"],2,
"Đếm trùng đến từ đổi ID; IDF1 và HOTA đo khả năng giữ đúng ID. MOTA bị chi phối bởi lỗi phát hiện.",
["MOTP đo độ chính xác định vị.","MOTA chủ yếu phản ánh FN, FP.","","FPS là tốc độ, không đo chất lượng."]);

// ---------- Day 8 ----------
Q(2,8,"Pinhole",
"Từ một pixel (u, v) và ma trận K đã biết, ta xác định được gì?",
["Vị trí 3D chính xác","Hướng của tia nhìn","Độ sâu tuyệt đối","Kích thước vật"],1,
"K⁻¹·(u, v, 1) chỉ cho hướng tia; mọi điểm trên tia đó đều chiếu về cùng pixel nên độ sâu bị mất.",
["Thiếu độ sâu thì không ra điểm 3D.","","Độ sâu chính là thứ bị mất.","Kích thước cần biết khoảng cách."]);

Q(2,8,"Giả định mặt đất phẳng",
"Camera cao 1,5 m, f = 900, chân xe thấp hơn đường chân trời 45 px. Khoảng cách xấp xỉ?",
["20 m","30 m","45 m","60 m"],1,
"Z = f·h/(v − c_y) = 900 × 1,5/45 = 30 m. Càng xa, v − c_y càng nhỏ nên 1 px lệch thành nhiều mét.",
["20 m sai phép tính.","","45 m nhầm số pixel thành mét.","60 m gấp đôi kết quả đúng."]);

Q(2,8,"Lật ảnh khi train mono 3D",
"Lật ảnh ngang khi huấn luyện mono 3D, nhãn phải sửa thế nào?",
["Không cần sửa","Đổi dấu x và yaw","Chỉ đổi dấu z","Đổi chiều dài và rộng"],1,
"Vật chuyển sang phía đối diện và hướng bị phản chiếu, nên toạ độ ngang và góc yaw phải đổi dấu.",
["Giữ nhãn cũ là dạy mô hình sai.","","Độ sâu z không đổi khi lật ngang.","Kích thước vật không đổi."]);

Q(2,8,"NDS",
"Trong NDS của nuScenes, mAP chiếm bao nhiêu trọng số?",
["1/10","1/6","1/2","Toàn bộ"],2,
"NDS = 1/10·[5·mAP + Σ(1 − min(1, mTP)) của 5 lỗi]. mAP có hệ số 5/10.",
["1/10 là hệ số mỗi lỗi TP.","1/6 là chia đều 6 thành phần, không đúng công thức.","","Nửa còn lại dành cho 5 lỗi TP."]);

Q(2,8,"Hai họ BEV",
"LSS và BEVDepth thuộc họ BEV nào?",
["Từ trên xuống: truy vấn 3D chiếu xuống ảnh","Từ dưới lên: nâng pixel theo độ sâu","Chỉ dùng LiDAR để dựng bản đồ BEV","Hợp nhất muộn ở mức hộp kết quả cuối"],1,
"Mỗi pixel dự đoán phân phối độ sâu, đặc trưng được 'nhấc' lên 3D rồi ép xuống lưới BEV.",
["Đó là họ DETR3D, BEVFormer, PETR.","","Đây là phương pháp chỉ dùng camera.","Chúng tạo đặc trưng BEV, không gộp hộp kết quả."]);

Q(2,8,"DETR3D",
"Vì sao DETR3D không cần NMS?",
["Vì mỗi ảnh chỉ chứa đúng một vật","Ghép một-một bằng Hungarian khi train","Vì dùng anchor xoay theo nhiều hướng","Vì dùng LiDAR để lọc bỏ hộp trùng lặp"],1,
"Mỗi nhãn chỉ khớp đúng một truy vấn khi huấn luyện, nên mô hình học cách không ra hộp trùng.",
["Cảnh có nhiều vật.","","DETR3D không dùng anchor.","DETR3D chỉ dùng camera."]);

Q(2,8,"Radar và vật cắt ngang",
"Xe tải chạy ngang qua phía trước ở xa. Vì sao radar dễ bỏ sót?",
["Vì xe tải quá lớn làm radar bị bão hoà","Vận tốc hướng tâm gần 0","Vì radar không hoạt động được khi mưa","Vì thùng xe tải màu trắng phản xạ kém"],1,
"Doppler chỉ đo thành phần vận tốc dọc tia nhìn; vật đi ngang gần như không đổi khoảng cách.",
["Vật lớn phản xạ radar tốt.","","Radar xuyên mưa tốt.","Màu sắc không ảnh hưởng radar."]);

Q(2,8,"Lỗi góc ngoại tại",
"Lệch góc ngoại tại 1° giữa camera và LiDAR. Tính ra mét thì lỗi thế nào?",
["Như nhau ở mọi khoảng cách","Lớn dần theo khoảng cách","Chỉ ảnh hưởng vật đứng yên","Chỉ ảnh hưởng vật chuyển động"],1,
"Cùng một góc lệch cho cùng số pixel, nhưng ở xa mỗi độ tương ứng nhiều mét hơn (≈ d·tanθ).",
["Đơn vị pixel thì như nhau, đơn vị mét thì không.","","Lỗi góc ảnh hưởng mọi vật.","Lỗi chỉ ở vật chuyển động là dấu hiệu sai thời gian."]);

Q(2,8,"Gating 2 chiều",
"Ghép đa cảm biến với phép đo (x, y) ở mức 95% dùng ngưỡng d² bao nhiêu?",
["3,84","5,99","9,49","11,07"],1,
"Chi-square 2 bậc tự do, 95% = 5,99. 3,84 là 1 bậc; 9,49 là 4 bậc (DeepSORT).",
["3,84 là 1 bậc tự do.","","9,49 là 4 bậc tự do.","11,07 là 5 bậc tự do."]);

// ---------- Day 9 ----------
Q(2,9,"Chia tập",
"Tập dữ liệu chia ngẫu nhiên theo khung cho điểm test rất cao nhưng chạy thật kém. Nguyên nhân khả dĩ nhất?",
["Mô hình quá nhỏ","Khung gần trùng rò rỉ sang test","Nhãn của tập test được gán quá khó","Thiếu augmentation"],1,
"Khung liên tiếp gần giống hệt; chia theo khung làm test chứa 'anh em sinh đôi' của train. Phải chia theo cảnh, chuyến, địa điểm.",
["Mô hình nhỏ không tạo điểm test cao giả tạo.","","Nhãn khó sẽ làm điểm test thấp.","Thiếu augmentation không giải thích chênh lệch test/thật."]);

Q(2,9,"Thời gian sự kiện",
"Ghép camera với LiDAR trong lakehouse nên dựa trên thời điểm nào?",
["Thời điểm nạp vào hệ thống","Thời điểm sự kiện (lúc đo)","Thời điểm gán nhãn","Thời điểm train"],1,
"Xe có thể upload muộn hàng giờ; chỉ thời điểm đo phản ánh đúng đồng bộ.",
["Giờ nạp phụ thuộc mạng và lịch upload.","","Giờ gán nhãn không liên quan hiện trường.","Giờ train không liên quan."]);

Q(2,9,"Định dạng hộp",
"Hộp COCO [x, y, w, h] = [40, 20, 60, 30]. Chuyển sang [x1, y1, x2, y2] là gì?",
["[40, 20, 100, 50]","[10, 5, 70, 35]","[40, 20, 60, 30]","[70, 35, 100, 50]"],0,
"COCO dùng góc trên trái + rộng, cao: x2 = 40 + 60, y2 = 20 + 30.",
["","Hiểu nhầm [x, y] là tâm.","Giữ nguyên là nhầm sang định dạng hai góc.","Cộng nhầm nửa kích thước."]);

Q(2,9,"Phiên bản dữ liệu",
"Một phiên bản tập dữ liệu tái tạo được cần những gì?",
["Chỉ cần commit của dữ liệu thô","Dữ liệu, split, code tiền xử lý","Danh sách file kèm checksum của từng file","Trọng số mô hình và file cấu hình train"],1,
"Thiếu split hay code tiền xử lý thì cùng dữ liệu thô vẫn ra tập khác. Công cụ: DVC, lakeFS.",
["Thiếu split và tiền xử lý.","","Danh sách file chưa đủ để tái tạo nhãn và split.","Trọng số là kết quả, không phải phiên bản dữ liệu."]);

Q(2,9,"Sàn nhiễu nhãn",
"Hai người gán cùng ảnh chỉ đạt IoU 0,82 với nhau. Ý nghĩa?",
["Một người gán sai hoàn toàn","Đó là sàn nhiễu của nhãn","Cần mô hình lớn hơn","Ảnh bị hỏng"],1,
"Mô hình không đo chính xác hơn được mức nhất quán giữa người; chênh lệch dưới mức đó là nhiễu.",
["IoU 0,82 là mức nhất quán bình thường.","","Mô hình lớn không vượt được nhiễu nhãn.","Không có dấu hiệu ảnh hỏng."]);

Q(2,9,"Nhãn tự động offline",
"Vì sao gán nhãn tự động offline có thể chính xác hơn mô hình chạy trên xe?",
["Dùng ít tính toán hơn mô hình trên xe","Dùng được khung tương lai, mô hình lớn","Không cần dữ liệu huấn luyện ban đầu","Chạy được trên CPU nên lặp nhanh hơn"],1,
"Không bị ràng buộc thời gian thực: nhìn cả trước và sau, dùng TTA, ensemble, mô hình lớn.",
["Thường dùng nhiều tính toán hơn.","","Vẫn cần dữ liệu.","Thường chạy trên GPU lớn."]);

Q(2,9,"Định tuyến nhãn máy",
"Nhãn máy có độ tin 0,6. Quy trình hợp lý?",
["Chấp nhận ngay","Đưa người xem lại","Xoá khỏi tập","Dùng làm tập vàng"],1,
"Vùng 0,4–0,9 cần người xem lại; trên 0,9 chấp nhận kèm kiểm tra mẫu; dưới 0,4 gán lại. Ngưỡng hiệu chỉnh trên tập vàng.",
["Chấp nhận ngay chỉ dành cho độ tin rất cao.","","Xoá là lãng phí; nhãn vẫn hữu ích sau khi duyệt.","Tập vàng phải do chuyên gia gán."]);

Q(2,9,"Automation bias",
"Automation bias trong gán nhãn là gì?",
["Máy gán nhanh hơn người","Người duyệt dễ đồng ý theo máy","Máy thiên vị các lớp xuất hiện nhiều trong data","Nhãn tự động luôn đúng"],1,
"Gợi ý sẵn làm người kiểm tra lười phản biện, lỗi của máy lọt vào nhãn.",
["Đó là ưu điểm tốc độ, không phải bias.","","Đó là mất cân bằng lớp của mô hình.","Nhãn máy không luôn đúng."]);

Q(2,9,"Học chủ động",
"Một phương pháp active learning mới cần chứng minh điều gì trước khi dùng?",
["Chạy nhanh hơn","Thắng chọn ngẫu nhiên được chỉnh tốt","Tốn ít GPU hơn","Không cần người gán"],1,
"Chọn ngẫu nhiên là baseline mạnh bất ngờ; nhiều phương pháp không thắng được nó.",
["Tốc độ không chứng minh giá trị chọn mẫu.","","Chi phí GPU không phải tiêu chí chính.","Active learning vẫn cần người gán."]);

// ---------- Day 10 ----------
Q(2,10,"Số token ảnh",
"Qwen3-VL dùng 1 token cho mỗi ô 32×32 px. Ảnh 1024×512 tốn khoảng bao nhiêu token?",
["256","512","1.024","2.048"],1,
"(1024/32) × (512/32) = 32 × 16 = 512 token. Token tỉ lệ với diện tích ảnh.",
["256 nhầm chia thêm 2.","","1.024 nhầm theo patch 16 một chiều.","2.048 nhầm theo patch 16 cả hai chiều."]);

Q(2,10,"Vai trò projector",
"Projector trong VLM làm nhiệm vụ gì?",
["Nén ảnh thành JPEG trước khi đưa vào model","Đưa đặc trưng ảnh về không gian LLM","Sinh câu trả lời từ đặc trưng thị giác","Phát hiện vật thể trước khi vào LLM"],1,
"Thường là MLP ánh xạ vector của encoder ảnh sang dạng LLM đọc được như token chữ.",
["Không phải nén ảnh.","","LLM mới sinh câu trả lời.","Projector không phát hiện vật."]);

Q(2,10,"SFT",
"Giai đoạn SFT của VLM chủ yếu mang lại điều gì?",
["Kiến thức thị giác mới","Phong cách và định dạng trả lời","Khả năng đọc ảnh độ phân giải cao hơn","Giảm số token"],1,
"SFT dạy cách trả lời theo mẫu; kiến thức thị giác chủ yếu đến từ tiền huấn luyện.",
["Kiến thức mới cần dữ liệu tiền huấn luyện có nội dung đó.","","Độ phân giải do encoder quyết định.","Số token do cách chia patch quyết định."]);

Q(2,10,"Toạ độ khác nhau",
"Code đọc hộp viết cho Qwen2.5-VL chạy sai với Qwen3-VL. Nguyên nhân?",
["Qwen3-VL không ra hộp","Khác hệ toạ độ: pixel tuyệt đối và thang 0–1000","Qwen3-VL ra hộp 3D","Khác thứ tự lớp"],1,
"Qwen2.5-VL dùng pixel tuyệt đối; Qwen3-VL, GLM dùng thang 0–1000. Bộ đọc không dùng chung được.",
["Qwen3-VL vẫn ra hộp.","","Đều là hộp 2D.","Vấn đề là toạ độ, không phải lớp."]);

Q(2,10,"MoE",
"Mô hình MoE 30B tổng, 3B hoạt động. VRAM cần xấp xỉ theo số nào?",
["3B","30B","33B","10B"],1,
"Mọi chuyên gia phải nằm trong bộ nhớ; chỉ phép tính mỗi token mới theo phần đang hoạt động.",
["3B quyết định tốc độ, không phải bộ nhớ.","","Không cộng thêm.","Không có cơ sở cho 10B."]);

Q(2,10,"DriveBench",
"GPT-4o đạt 59,5% khi đưa ảnh đen so với 59,0% với ảnh thật. Kết luận?",
["GPT-4o nhìn rất tốt kể cả trong bóng tối","Nhiều câu đoán được mà không cần ảnh","Ảnh đen vẫn chứa thông tin mà model đọc được","Benchmark tính điểm sai cho các ảnh đặc biệt"],1,
"Mô hình dựa vào thiên kiến ngôn ngữ; benchmark chưa đo được khả năng nhìn.",
["Ảnh đen không có gì để nhìn.","","Ảnh đen không chứa thông tin cảnh.","Điểm tính đúng; câu hỏi mới là vấn đề."]);

Q(2,10,"Structured output",
"Bắt VLM trả JSON có trường 'chiều dài xe'. Structured output đảm bảo được gì?",
["Giá trị luôn đúng","Đúng cấu trúc và kiểu dữ liệu","Không bao giờ null","Đúng đơn vị mét"],1,
"Schema đảm bảo cấu trúc, không đảm bảo giá trị hợp lý; vẫn phải kiểm bằng code, ví dụ 2,5 ≤ L ≤ 20 m.",
["Giá trị vẫn có thể vô lý.","","Schema có thể cho phép null.","Đơn vị không được kiểm chứng."]);

Q(2,10,"VLA và benchmark",
"Qwen-Drive-1.0 đạt PDMS 90,7 nhưng là best-of-6 oracle. Vì sao cần dè dặt?",
["PDMS hoàn toàn không đo yếu tố an toàn","Oracle chọn bằng đáp án, không có khi chạy thật","Mô hình dùng thêm LiDAR khi được chấm điểm","Mô hình chạy quá chậm để vào được NAVSIM"],1,
"Lúc chạy thật không có đáp án để chọn trong 6 phương án; đó là trần lạc quan. Tỉ lệ áp sát 41,0% còn tệ hơn Alpamayo-R1 19,0%.",
["PDMS có phạt va chạm và vi phạm.","","Mô hình dùng camera và VLM.","Bài không báo độ trễ; đó không phải lý do chính."]);

Q(2,10,"Vai trò VLM trong pipeline",
"Kiểm tra chéo VLM với detector: recall tăng 0,814 → 0,932 nhưng precision ≈ 0,71. Cách dùng hợp lý?",
["Tự động chấp nhận mọi vật VLM thêm","Đưa vật mới cho người xác nhận","Bỏ detector","Bỏ VLM"],1,
"Máy gieo ứng viên và kiểm chéo, người quyết định: tận dụng recall mà vẫn chặn khoảng 29% vật sai.",
["Precision 0,71 nghĩa là gần 1/3 vật thêm vào là sai.","","Detector vẫn cần làm nền.","Bỏ VLM là mất phần recall tăng thêm."]);

// ---------- Day 11 ----------
Q(2,11,"Nguyên tắc dữ liệu tổng hợp",
"Nguyên tắc nào về dữ liệu tổng hợp là đúng?",
["Thay hoàn toàn dữ liệu thật","Train trên hỗn hợp, kết luận trên test thật độc lập","Test trên dữ liệu tổng hợp là đủ","Chỉ dùng khi thiếu GPU"],1,
"Tổng hợp giúp học ca hiếm; chỉ dữ liệu thật độc lập mới xác nhận mô hình chạy được ngoài đời.",
["Có khoảng cách sim2real.","","Test tổng hợp không đo khoảng cách miền.","Không liên quan GPU."]);

Q(2,11,"Domain randomization",
"Ảnh domain randomization trông rất giả nhưng thắng VKITTI trông giống thật. Vì sao?",
["DR có số lượng ảnh nhiều hơn VKITTI rất nhiều","Đa dạng nên không bám vào bề ngoài","VKITTI có nhiều nhãn sai hơn DR","DR được trộn sẵn một phần ảnh thật"],1,
"Đổi ngẫu nhiên màu, đèn, vân rất mạnh khiến thế giới thật chỉ là một biến thể nữa.",
["Không phải do số lượng.","","Nhãn VKITTI chính xác vì là mô phỏng.","DR thuần là tổng hợp."]);

Q(2,11,"Ba khoảng cách sim2real",
"Ba khoảng cách sim2real gồm gì?",
["Màu, kích thước, tốc độ","Ngoại hình, nội dung, cảm biến","Train, val, test","Ngày, đêm, mưa"],1,
"Ngoại hình (ánh sáng, vân), nội dung (phân bố vật, hành vi), cảm biến (nhiễu, mất điểm, méo).",
["Không phải cách phân loại của bài.","","Đó là chia tập.","Đó là điều kiện môi trường."]);

Q(2,11,"3DGS",
"So với NeRF, 3D Gaussian Splatting có ưu điểm chính gì?",
["Chất lượng ảnh cao hơn hẳn so với NeRF","Render và train nhanh hơn rất nhiều","Không cần ảnh đầu vào để tái dựng cảnh","Mọi góc nhìn mới đều không bị lỗi"],1,
"~134 FPS, train ~41 phút so với 0,06 FPS, ~48 giờ; đổi lại kém khoảng 0,5 dB.",
["Chất lượng gần ngang, kém nhẹ.","","Vẫn cần ảnh để tái dựng.","Rời xa quỹ đạo đã ghi thì vẫn vỡ."]);

Q(2,11,"Kiểm tra ảnh sinh",
"Ảnh diffusion sinh theo hộp điều kiện cần kiểm tra gì trước khi dùng train?",
["Chỉ FID thấp","Phát hiện lại và lọc theo IoU với hộp","Kích thước file","Độ sáng trung bình"],1,
"Mô hình sinh có thể không vẽ đúng vật ở đúng chỗ; FID đo ảnh đẹp, không đo khớp nhãn.",
["FID không chạm tới nhãn.","","Kích thước file vô nghĩa.","Độ sáng không kiểm nhãn."]);

Q(2,11,"Đạo hàm quỹ đạo nhiễu",
"Vị trí có nhiễu σ = 10 cm, Δt = 0,1 s. Sai phân hai lần cho nhiễu gia tốc khoảng bao nhiêu?",
["~1 m/s²","~2,4 m/s²","~24,5 m/s²","~245 m/s²"],2,
"√6·σ/Δt² = 2,45 × 0,1/0,01 ≈ 24,5 m/s² ≈ 2,5g, lớn hơn rất nhiều gia tốc chuyển làn thật (~1 m/s²). Phải làm mượt trước.",
["Quá nhỏ so với công thức.","Thiếu chia Δt² đúng.","","Nhầm thêm một bậc 10."]);

Q(2,11,"Khả thi vật lý",
"Xe 20 m/s đi đường cong κ = 0,04 m⁻¹. Gia tốc ngang?",
["0,8 m/s²","8 m/s²","16 m/s²","32 m/s²"],2,
"a = v²κ = 400 × 0,04 = 16 m/s², vượt μg ≈ 7–9 m/s²: quỹ đạo không khả thi, phải loại.",
["Nhầm v thay vì v².","Nhầm chia đôi.","","Nhầm nhân đôi."]);

Q(2,11,"Kịch bản độc",
"Kịch bản xe khác dịch ngang 5 m trong 0,1 s để 'thử thách' planner. Đánh giá?",
["Kịch bản khó rất có giá trị","Dữ liệu độc vì không khả thi vật lý","Chỉ cần tăng số lần chạy","Phù hợp để kiểm độ bền"],1,
"Nguy hiểm nhưng không thể xảy ra dạy mô hình phòng thủ vô lý và làm sai số liệu đánh giá.",
["Khó phải đi kèm khả thi.","","Chạy nhiều lần không sửa tính phi lý.","Không đo được độ bền thật."]);

Q(2,11,"Quy tắc 3/n",
"Chạy 1.500 kịch bản không va chạm lần nào. Cận trên 95% của tỉ lệ va chạm?",
["0%","0,2%","0,5%","3%"],1,
"Quy tắc 3/n: 3/1500 = 0,2%. Không va chạm chưa có nghĩa tỉ lệ bằng 0.",
["0 lần quan sát không chứng minh tỉ lệ bằng 0.","","0,5% là 3/600.","3% nhầm bỏ chia n."]);

// ---------- Day 12 ----------
Q(2,12,"Bậc thang kiểm thử",
"Thứ tự kiểm thử từ rẻ tới đắt nào hợp lý?",
["Chạy thật → kịch bản → log replay","Log replay → closed loop → kịch bản → chạy thật","Kịch bản → chạy thật → closed loop","Closed loop → log replay → chạy thật"],1,
"Tầng sớm rẻ, nhanh, bắt lỗi trước khi tốn chi phí và rủi ro ở tầng sau.",
["Đảo ngược: chạy thật đắt và rủi ro nhất.","","Chạy thật không đứng trước closed loop.","Log replay rẻ hơn closed loop nên đi trước."]);

Q(2,12,"Giới hạn log replay",
"Vì sao log replay không đánh giá được planner mới phanh sớm hơn xe cũ?",
["Log không lưu dữ liệu ảnh camera","Log không phản ứng với hành động mới","Planner không đọc được định dạng của log","Log quá ngắn để thấy được hệ quả"],1,
"Xe khác vẫn đi như log ghi; hệ quả của hành động mới không có trong log.",
["Log có thể chứa cảm biến thô.","","Định dạng không phải vấn đề.","Độ dài không phải vấn đề."]);

Q(2,12,"Không tất định",
"Chạy replay hai lần cùng đầu vào, kết quả lệch ở chữ số thứ 15. Nguyên nhân hợp lý?",
["Lỗi nghiêm trọng của code","Thứ tự phép cộng số thực khác nhau","Log bị hỏng","Mô hình quá khớp"],1,
"(0,1 + 0,2) + 0,3 ≠ 0,1 + (0,2 + 0,3) trong số thực; luồng, GPU đổi thứ tự. So sánh phải có dung sai.",
["Lệch ở chữ số 15 là bình thường.","","Log hỏng gây lỗi lớn hoặc crash.","Quá khớp không gây lệch giữa hai lần chạy."]);

Q(2,12,"Open loop",
"Ego-MLP không dùng camera mà có L2 tốt hơn VAD trên nuScenes. Vì sao?",
["Ego-MLP được dùng thêm dữ liệu LiDAR","Đa số đoạn đi thẳng nên rất dễ đoán","VAD bị lỗi code khi đánh giá open loop","L2 thực chất đo tỉ lệ va chạm"],1,
"73,9% đoạn đi thẳng; L2 open loop không đo được perception, cần đánh giá closed loop.",
["Ego-MLP chỉ dùng trạng thái xe.","","Không có lỗi; vấn đề là thước đo.","L2 đo khoảng cách quỹ đạo, không đo va chạm."]);

Q(2,12,"TTC",
"Khoảng cách 18 m, tốc độ tiến lại 6 m/s. TTC bằng bao nhiêu?",
["2 s","3 s","6 s","12 s"],1,
"TTC = khoảng cách / tốc độ tiến lại = 18/6 = 3 s.",
["Sai phép chia.","","6 là tốc độ.","12 = 18 − 6, không phải TTC."]);

Q(2,12,"Giảm tốc cần thiết",
"Xe 15 m/s cần dừng trong 25 m. Giảm tốc cần thiết?",
["3 m/s²","4,5 m/s²","6 m/s²","9 m/s²"],1,
"a = v²/(2d) = 225/50 = 4,5 m/s².",
["Sai phép tính.","","Dùng nhầm d = 18,75 m.","Quên chia 2."]);

Q(2,12,"Agent phản ứng",
"Ego mới phanh sớm hơn log, xe phía sau phát lại theo log đâm vào ego. Lỗi thuộc về đâu?",
["Ego phanh sai thời điểm so với tình huống","Agent không phản ứng của mô phỏng","Perception bỏ sót xe phía sau","Hiệu chuẩn camera sau bị lệch"],1,
"Xe sau không phản ứng với hành động mới; cần agent phản ứng như IDM hoặc agent học được.",
["Phanh sớm hơn là hợp lý.","","Không liên quan perception.","Không liên quan hiệu chuẩn."]);

Q(2,12,"Đọc bảng lab",
"IDM có L2 tệ nhất (1,51 m) nhưng va chạm thấp nhất (0,1%). Bài học?",
["L2 là chỉ số tốt nhất để xếp hạng planner","Giống người ≠ lái an toàn","IDM bị lỗi khi tính L2 open loop","Tỉ lệ va chạm không quan trọng bằng L2"],1,
"Hai bảng xếp hạng ngược nhau; phải đánh giá kín vòng và luôn so với baseline luật đơn giản.",
["L2 có thể xếp hạng sai.","","IDM chạy đúng thiết kế.","Va chạm là chỉ số an toàn quan trọng nhất."]);

Q(2,12,"Cổng phát hành",
"Mô hình mới cải thiện nhiều chỉ số nhưng trượt một kịch bản bắt buộc. Quyết định?",
["Phát hành vì cải thiện trung bình","Chưa phát hành","Bỏ kịch bản đó","Chỉ test thêm open loop"],1,
"Một kịch bản bắt buộc trượt là chặn phát hành; cải thiện trung bình không bù được lỗi an toàn cụ thể.",
["Trung bình che được lỗi nghiêm trọng.","","Bỏ kịch bản là gian lận cổng kiểm tra.","Open loop không thay closed loop."]);
