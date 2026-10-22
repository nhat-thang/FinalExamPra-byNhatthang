// Phase 2 · CV & Robotics · Day 1, 2, 4, 5
// Q(phase, day, topic, question, options[4], answerIndex, whyCorrect, whyWrong[4] ("" at the correct slot))
Q(2,1,"Hàm kích hoạt phi tuyến",
"Một MLP 6 lớp bị bỏ hết hàm kích hoạt giữa các lớp. Nhận định nào đúng về năng lực biểu diễn của nó?",
["Mạnh hơn mạng 1 lớp vì có nhiều tham số hơn","Chỉ là một phép tuyến tính","Tương đương mạng 3 lớp có ReLU xen giữa","Bị gradient biến mất nên không học được gì"],1,
"Tích các ma trận vẫn là một ma trận: W6(…(W1x+b1)…)+b6 gộp được thành Wx+b. Không có phi tuyến thì xếp bao nhiêu lớp cũng chỉ là một phép tuyến tính.",
["Nhiều tham số hơn không tạo thêm năng lực khi các lớp gộp được thành một.","","Mạng có ReLU biểu diễn được hàm cong; mạng tuyến tính thì không, nên không tương đương.","Gradient biến mất là chuyện của sigmoid xếp sâu; mạng tuyến tính vẫn học được, chỉ là học hàm tuyến tính."]);

Q(2,1,"Đếm tham số",
"Một lớp fully connected nhận 256 đầu vào, có 100 nơ-ron, có bias. Số tham số là bao nhiêu?",
["25.600","25.700","25.856","35.600"],1,
"Công thức n_ra × (n_vào + 1) = 100 × 257 = 25.700 (mỗi nơ-ron 256 trọng số + 1 bias).",
["Quên bias: 100 × 256.","","Cộng nhầm 256 bias thay vì 100 bias.","Tính sai phép nhân."]);

Q(2,1,"Loss ở bước 0",
"Bài phân loại 5 lớp, softmax + cross-entropy, khởi tạo đúng. Loss ở bước 0 nên xấp xỉ bao nhiêu?",
["0,20","1,61","2,30","5,00"],1,
"Chưa học gì thì xác suất gần đều p = 1/5, loss = −ln(1/5) = ln 5 ≈ 1,61. Đây là cách kiểm tra khởi tạo trước khi train lâu.",
["0,2 là xác suất 1/5, không phải loss.","","2,30 = ln 10, ứng với 10 lớp.","5 là số lớp, không phải loss."]);

Q(2,1,"Softmax + cross-entropy",
"Vì sao phân loại dùng cross-entropy sau softmax thay vì MSE sau sigmoid?",
["MSE không có đạo hàm nên không lan truyền ngược được","Gradient theo logit gọn là p − y, không bị bão hoà","Cross-entropy luôn cho giá trị loss nhỏ hơn MSE","Cross-entropy không cần chuẩn hoá đầu ra"],1,
"Softmax + CE cho gradient p − y: sai nhiều thì gradient lớn. MSE sau sigmoid bị nhân thêm ŷ(1−ŷ) ≤ 0,25, nơ-ron bão hoà ở phía sai thì gần như không học.",
["MSE vẫn khả vi; vấn đề là gradient nhỏ khi bão hoà, không phải thiếu đạo hàm.","","Độ lớn loss không quyết định; điều quan trọng là hình dạng gradient.","CE vẫn đi kèm softmax để biến logit thành xác suất."]);

Q(2,1,"Focal loss",
"Focal loss với γ = 2. Một ô nền dễ có p_t = 0,95 bị giảm trọng số bao nhiêu lần so với cross-entropy?",
["20 lần","40 lần","400 lần","4 lần"],2,
"Hệ số (1 − p_t)^γ = 0,05² = 0,0025, tức giảm 400 lần. Nhờ vậy hàng chục nghìn ô nền dễ không lấn át vật khó (RetinaNet).",
["20 = 1/0,05, quên bình phương.","40 không ứng với phép tính nào đúng.","","Giảm tối đa 4 lần chỉ xảy ra khi p_t ≤ 0,5."]);

Q(2,1,"Tốc độ học",
"Hạ gradient trên f(x) = x² cho x ← (1 − 2η)x. Giá trị η nào làm x dao động đổi dấu nhưng vẫn hội tụ?",
["η = 0,25","η = 0,75","η = 1,10","η = 0,05"],1,
"η = 0,75 → x ← −0,5x: đổi dấu mỗi bước nhưng biên độ giảm một nửa, nên vẫn hội tụ. Điều kiện hội tụ là 0 < η < 1.",
["η = 0,25 → x ← 0,5x: hội tụ một phía, không đổi dấu.","","η = 1,10 → x ← −1,2x: biên độ tăng, phân kỳ.","η = 0,05 → x ← 0,9x: hội tụ chậm, không đổi dấu."]);

Q(2,1,"AdamW",
"Điểm khác cốt lõi giữa AdamW và Adam(weight_decay=λ) trong PyTorch là gì?",
["AdamW tách weight decay khỏi gradient","AdamW không dùng trung bình trượt bậc hai","Adam(weight_decay) chỉ áp dụng cho bias","Hai cách tương đương về toán học"],0,
"AdamW trừ ηλw trực tiếp vào trọng số. Adam(weight_decay) cộng λw vào gradient rồi chia cho √v̂, nên mỗi tham số bị co một mức khác nhau (thực chất là L2).",
["","AdamW vẫn dùng đủ hai mômen như Adam.","weight_decay áp dụng cho mọi tham số được truyền vào, không riêng bias.","Không tương đương vì phép chia √v̂ làm decay không đều."]);

Q(2,1,"Chẩn đoán đường cong loss",
"Loss train giảm đều về gần 0, loss validation giảm rồi tăng dần từ epoch 15. Chẩn đoán và hướng xử lý hợp lý?",
["Chưa khớp; tăng kích thước mô hình và train lâu hơn","Tốc độ học quá cao; giảm 10 lần và thêm warmup","Quá khớp; thêm dữ liệu, regularization, dừng sớm","Lỗi nhãn; kiểm tra loss bước 0 có bằng ln C không"],2,
"Train thấp còn val tăng lại là quá khớp: mô hình học thuộc nhiễu. Thêm dữ liệu, weight decay, dropout, augmentation hoặc dừng ở epoch val tốt nhất.",
["Chưa khớp thì loss train cũng cao.","Tốc độ học quá cao làm loss dao động hoặc nổ, không giảm đều về 0.","","Lỗi nhãn thường khiến cả loss train không giảm nổi, và loss bước 0 kiểm khởi tạo chứ không chẩn đoán quá khớp."]);

Q(2,1,"Lan truyền ngược",
"Trong lan truyền ngược, gradient của trọng số nối nơ-ron gửi i tới nơ-ron nhận j bằng gì?",
["δ_i × đầu ra của j","δ_j × đầu ra của i","Đầu ra i × đầu ra j","δ_i + δ_j"],1,
"∂J/∂w_ij = δ_j (sai số ở nơ-ron nhận) × y_i (tín hiệu nơ-ron gửi đưa vào). Đây là lý do một lượt ngược cho gradient của mọi trọng số.",
["Đảo vai gửi và nhận.","","Thiếu thành phần sai số δ nên không phản ánh loss.","Gradient là tích, không phải tổng các δ."]);

Q(2,1,"Kiểm tra trước khi train",
"Mô hình không thể quá khớp một lô 8 mẫu dù đã tắt augmentation và regularization. Nghi ngờ đầu tiên là gì?",
["Mô hình quá nhỏ, cần thêm lớp ẩn và nơ-ron","Thiếu dữ liệu huấn luyện cho bài toán này","Lỗi code: nhãn lệch, loss sai, không cập nhật","Cần chuyển sang optimizer mạnh hơn như AdamW"],2,
"Gần như mọi mạng đều học thuộc được 8 mẫu. Không làm được thường do lỗi mã: nhãn không khớp ảnh, loss tính sai, quên optimizer.step() hoặc đóng băng nhầm.",
["Mạng rất nhỏ vẫn học thuộc được vài mẫu.","Bài test này cố ý dùng ít dữ liệu; thiếu dữ liệu không phải nguyên nhân.","","Đổi optimizer hiếm khi cứu được lỗi mã; SGD hay Adam đều học thuộc được 8 mẫu."]);

// ---------- Day 2 ----------
Q(2,2,"Tham số tích chập",
"Một lớp conv 3×3, 64 kênh vào, 128 kênh ra, có bias. Tăng ảnh từ 224×224 lên 448×448 thì số tham số lớp này thay đổi ra sao?",
["Tăng 4 lần","Tăng 2 lần","Không đổi","Giảm một nửa"],2,
"Tham số = C_ra(C_vào·k² + 1) = 128 × 577 = 73.856, không phụ thuộc kích thước ảnh vì bộ lọc dùng chung mọi vị trí. Chỉ số phép tính tăng khoảng 4 lần.",
["4 lần là mức tăng phép tính (theo diện tích), không phải tham số.","Không có đại lượng nào của lớp tăng đúng 2 lần.","","Tham số không giảm khi ảnh to ra."]);

Q(2,2,"Vùng nhìn",
"Xếp 4 lớp conv 3×3 stride 1. Vùng nhìn (receptive field) của một điểm đầu ra là bao nhiêu?",
["7×7","9×9","12×12","5×5"],1,
"r = 1 + L(k − 1) = 1 + 4×2 = 9. Nhiều lớp 3×3 nhìn rộng như một kernel lớn nhưng ít tham số hơn và thêm phi tuyến.",
["7×7 là của 3 lớp.","","12 = 4 × 3, cộng thẳng kích thước kernel là sai.","5×5 là của 2 lớp."]);

Q(2,2,"Residual",
"Mạng thường 56 lớp có sai số train cao hơn mạng 20 lớp. Kết nối tắt y = F(x) + x giúp gì?",
["Giảm quá khớp","Chỉ học phần chênh; gradient đi thẳng","Thay thế được BatchNorm trong các khối sâu","Tăng vùng nhìn"],1,
"Sai số train cao hơn là lỗi tối ưu (suy thoái), không phải quá khớp. Với y = F(x) + x, muốn giữ nguyên chỉ cần F = 0, và gradient chảy thẳng qua phép cộng.",
["Vấn đề không phải quá khớp, và residual không bớt tham số.","","ResNet vẫn dùng BatchNorm.","Phép cộng không thay đổi vùng nhìn."]);

Q(2,2,"BatchNorm khi suy luận",
"Accuracy lúc eval tụt mạnh dù chạy trên chính dữ liệu train; mô hình có BatchNorm. Nguyên nhân hay gặp nhất?",
["Tốc độ học quá cao làm trọng số dao động","Quên chuyển sang chế độ eval","Augmentation khi train quá mạnh so với eval","Batch size khi eval lớn hơn khi train"],1,
"BatchNorm dùng thống kê lô khi train và thống kê trượt khi eval. Quên model.eval() (hoặc ngược lại) làm phân bố đặc trưng lệch hẳn.",
["Tốc độ học ảnh hưởng quá trình train, không gây chênh lệch train/eval trên cùng dữ liệu.","","Augmentation mạnh làm train khó hơn, không làm eval trên dữ liệu train tụt.","Ở chế độ eval, batch size không đổi thống kê dùng."]);

Q(2,2,"LSTM",
"Thành phần nào giúp LSTM nhớ xa hơn RNN thường?",
["Ô nhớ cập nhật bằng phép cộng có cổng","Dùng ReLU thay tanh nên gradient không bão hoà","Chạy song song cả chuỗi giống như attention","Cắt gradient ở mỗi bước để tránh mất thông tin"],0,
"Ô nhớ c_t = f⊙c_{t−1} + i⊙g: gradient đi qua phép cộng có cổng, không bị nhân lặp cùng một ma trận như RNN.",
["","LSTM vẫn dùng sigmoid và tanh.","LSTM vẫn xử lý tuần tự; song song là ưu điểm của attention.","Cắt gradient chỉ chữa gradient nổ, không giúp nhớ xa."]);

Q(2,2,"Attention",
"Vì sao attention chia QKᵀ cho √d_k?",
["Để giảm chi phí tính toán từ O(n²) xuống O(n)","Để softmax không quá nhọn khi d_k lớn","Để mã hoá vị trí của token","Để chuẩn hoá ma trận Value"],1,
"Tích vô hướng có phương sai tăng theo d_k; không chia thì softmax dồn gần hết vào một vị trí, gradient gần 0.",
["Chi phí vẫn là O(n²·d).","","Vị trí cần positional encoding riêng.","Phép chia tác động lên điểm attention, không lên V."]);

Q(2,2,"ViT",
"Dataset chỉ có 8.000 ảnh, train từ đầu. Vì sao ViT thường thua ResNet?",
["ViT không nhận ảnh màu","ViT ít giả định cục bộ, cần nhiều dữ liệu","ViT có ít tham số hơn ResNet nên thiếu năng lực","ViT không dùng được augmentation"],1,
"CNN có sẵn giả định cục bộ và chia sẻ trọng số; ViT phải tự học các quy luật đó nên cần tiền huấn luyện lớn.",
["ViT nhận ảnh RGB bình thường qua patch embedding.","","ViT-B/16 có ~86M tham số, nhiều hơn ResNet-50.","ViT dùng được và rất cần augmentation (DeiT)."]);

Q(2,2,"FLOPs và độ trễ",
"Mô hình A có FLOPs bằng 1/8 mô hình B. Kết luận nào đúng?",
["A chắc chắn nhanh hơn B khoảng 8 lần","A chắc chắn nhanh hơn B","Phải đo độ trễ trên phần cứng đích","A chắc chắn tốn ít bộ nhớ hơn"],2,
"Tốc độ thật phụ thuộc truy cập bộ nhớ và mức song song. EfficientNet-B0 ít FLOPs hơn ResNet-50 ~10 lần nhưng chỉ nhanh ~2 lần.",
["Tỉ lệ FLOPs không chuyển thẳng thành tỉ lệ thời gian.","Có kiến trúc ít FLOPs mà chậm hơn (DenseNet tốn bộ nhớ).","","FLOPs không nói gì chắc chắn về bộ nhớ kích hoạt."]);

Q(2,2,"TTA",
"Detector chạy 40 ms mỗi khung trên xe 20 Hz. Vì sao không dùng TTA 8 biến thể trong vòng lái?",
["TTA làm giảm accuracy trên dữ liệu thật","320 ms vượt hạn 50 ms mỗi khung","TTA cần nhãn của khung khi suy luận","TTA chỉ áp dụng được cho bài phân loại"],1,
"TTA nhân chi phí theo số biến thể; xe 20 Hz chỉ có 50 ms mỗi khung. TTA hợp gán nhãn offline.",
["TTA thường tăng nhẹ accuracy; vấn đề là thời gian.","","TTA không cần nhãn.","TTA dùng được cho cả phát hiện vật."]);

// ---------- Day 4 ----------
Q(2,4,"Chọn cảm biến",
"Cần đo vận tốc xe phía trước 150 m trong sương mù dày. Cảm biến nào hợp nhất?",
["Camera","LiDAR","Radar","Sonar"],2,
"Radar xuyên sương mù, tầm xa và đo trực tiếp vận tốc hướng tâm bằng Doppler.",
["Camera kém trong sương và không đo trực tiếp vận tốc.","Sương mù làm tia laser tán xạ, LiDAR mất điểm.","","Sonar chỉ hợp tầm gần dưới khoảng 5 m."]);

Q(2,4,"Đọc kiểu lệch chiếu",
"Chiếu LiDAR lên ảnh: xe đứng yên thì khớp, chạy càng nhanh càng lệch. Lỗi nằm ở đâu?",
["Tham số nội tại (intrinsic)","Tham số ngoại tại (extrinsic)","Đồng bộ thời gian","Méo ống kính"],2,
"Lệch tỉ lệ với tốc độ nghĩa là hai cảm biến đo ở hai thời điểm khác nhau. Lệch cố định là extrinsic; lệch ở rìa là intrinsic/méo.",
["Lỗi intrinsic làm lệch kể cả khi đứng yên, nhất là ở rìa.","Lỗi extrinsic cho lệch cố định không phụ thuộc tốc độ.","","Méo ống kính không thay đổi theo tốc độ xe."]);

Q(2,4,"Màn trập cuộn",
"Camera trên xe chạy nhanh làm các cột điện trong ảnh bị nghiêng. Hiện tượng gì?",
["Méo ống kính","Màn trập cuộn","Lệch extrinsic","Phơi sáng quá lâu"],1,
"Màn trập cuộn chụp từng hàng ở thời điểm khác nhau; vật dịch chuyển giữa các hàng nên đường thẳng đứng bị nghiêng.",
["Méo ống kính làm cong đường thẳng ở rìa, không phụ thuộc chuyển động.","","Lệch extrinsic không làm biến dạng hình trong một ảnh.","Phơi sáng lâu gây nhoè, không gây nghiêng có hệ thống."]);

Q(2,4,"Timestamp",
"Mỗi phép đo cảm biến nên được gắn timestamp nào?",
["Lúc tin nhắn tới máy tính","Lúc cảm biến thực sự đo","Lúc mô hình xử lý xong","Lúc ghi xuống ổ đĩa"],1,
"Thời điểm nhận đã cộng độ trễ truyền và xử lý thay đổi theo tải; ghép nhiều cảm biến cần thời điểm đo gốc.",
["Lúc nhận chứa độ trễ biến thiên nên ghép sai.","","Lúc xử lý xong còn trễ hơn nữa.","Lúc ghi đĩa không liên quan thời điểm vật ở đâu."]);

Q(2,4,"Deskew",
"Một vòng quét LiDAR mất 100 ms trong khi xe đi được 2 m. Cần xử lý gì với đám mây điểm?",
["Bù chuyển động về một thời điểm chung","Bỏ khung đó","Giảm số điểm","Tăng ngưỡng cường độ"],0,
"Điểm đầu và cuối vòng quét đo ở hai vị trí xe khác nhau; deskew dùng tư thế xe theo thời gian để đưa mọi điểm về cùng một thời điểm.",
["","Mọi khung khi xe chạy đều bị vậy; bỏ thì mất hết dữ liệu.","Giảm điểm không sửa méo hình học.","Ngưỡng cường độ lọc nhiễu, không sửa méo do chuyển động."]);

Q(2,4,"Mức suy giảm",
"Camera bị chói nắng (S2), radar bình thường (S0). Hệ thống AEB nên làm gì?",
["Tắt hẳn AEB ngay để tránh phanh nhầm","Hạ trọng số camera, dựa vào radar","Bỏ qua vì camera chưa mất tín hiệu hoàn toàn","Chỉ dùng camera vì có thông tin ngữ nghĩa"],1,
"S2 là suy giảm nặng: hạ trọng số cảm biến đó và dựa vào cảm biến còn khoẻ. S3 mới là loại bỏ hoàn toàn và chuyển chế độ an toàn.",
["Tắt cả chức năng là phản ứng của mức nặng hơn khi không còn nguồn tin cậy.","","Bỏ qua suy giảm là rủi ro: camera đang cho dữ liệu kém.","Ngược lại: camera đang là cảm biến yếu nhất lúc này."]);

Q(2,4,"LiDAR và vật liệu",
"Vì sao LiDAR hay bỏ sót cửa kính và xe sơn đen?",
["Vì vật đứng quá gần","Vì tia laser phản xạ về yếu","Vì LiDAR không đo được kim loại","Vì tần số quét thấp"],1,
"Kính cho tia đi xuyên hoặc phản xạ đi hướng khác; bề mặt đen hấp thụ. Ít tia quay về nên ít điểm.",
["Khoảng cách gần không phải nguyên nhân chính.","","LiDAR đo tốt bề mặt kim loại sáng màu.","Tần số quét không phụ thuộc vật liệu."]);

Q(2,4,"Cách kiểm tra trước khi đổ lỗi mô hình",
"Mô hình chạy trên xe kém hơn khi test offline. Việc nào nên làm trước khi train lại?",
["Tăng kích thước mô hình để bù sai lệch","Thêm dữ liệu tổng hợp cho các ca khó","So tiền xử lý và timestamp hai môi trường","Đổi backbone sang kiến trúc transformer mới"],2,
"Lệch tiền xử lý (chuẩn hoá màu, kích thước), sai timestamp hay calib là lỗi phổ biến và rẻ để sửa hơn nhiều so với train lại.",
["Mô hình to hơn không sửa được dữ liệu vào bị sai.","Dữ liệu tổng hợp không chữa lệch pipeline.","","Đổi kiến trúc là bước tốn kém nhất, chỉ làm sau khi loại trừ lỗi hệ thống."]);

Q(2,4,"Nhãn giả đa cảm biến",
"Cách tạo nhãn độ sâu cho mô hình camera mà không cần người gán?",
["Chiếu điểm LiDAR lên ảnh","Lật ảnh ngang","Dùng radar đo màu","Dùng sonar quét toàn cảnh"],0,
"LiDAR đo độ sâu chính xác; chiếu lên ảnh qua hiệu chuẩn cho nhãn độ sâu thưa miễn phí.",
["","Lật ảnh là augmentation, không tạo nhãn độ sâu.","Radar không đo màu và độ phân giải thấp.","Sonar chỉ đo gần và không phủ toàn cảnh."]);

// ---------- Day 5 ----------
Q(2,5,"Kalman 1D",
"Dự đoán vị trí 50, phương sai 4. Cảm biến đo 56, phương sai 2. Vị trí sau cập nhật là bao nhiêu?",
["52","54","53","55"],1,
"K = P/(P + R) = 4/6 ≈ 0,667; x = 50 + 0,667 × 6 = 54. Cảm biến chắc hơn nên kết quả gần 56 hơn.",
["52 ứng với K = 1/3, tức đảo P và R.","","53 là trung bình cộng, bỏ qua độ tin.","55 ứng với K ≈ 0,83, quá tin cảm biến."]);

Q(2,5,"Phương sai sau cập nhật",
"Tiếp câu trên (P = 4, R = 2). Phương sai sau cập nhật là bao nhiêu?",
["1,33","2,00","3,00","0,67"],0,
"P_mới = (1 − K)P = (1/3) × 4 ≈ 1,33, nhỏ hơn cả 4 và 2: trộn hai niềm tin luôn chắc hơn từng nguồn.",
["","2 là R của cảm biến; kết quả phải nhỏ hơn nguồn tốt nhất.","3 là trung bình 4 và 2, không phải công thức Kalman.","0,67 là K, không phải phương sai."]);

Q(2,5,"Q và R",
"Ước lượng luôn trễ sau vật thật mỗi khi vật tăng tốc. Chỉnh núm nào?",
["Giảm Q","Tăng R","Tăng Q","Bỏ gating"],2,
"Q lớn hơn nghĩa là ít tin mô hình chuyển động cũ, P to ra nhanh, K lớn hơn nên bám phép đo nhanh hơn.",
["Giảm Q làm bộ lọc lì hơn, trễ thêm.","Tăng R cũng làm bớt tin phép đo, trễ thêm.","","Gating chỉ loại ngoại lai, không sửa trễ."]);

Q(2,5,"Tỉ lệ Q/R",
"Nhân cả Q và R lên 10 lần. Đại lượng nào gần như không đổi?",
["Kalman gain ở trạng thái ổn định","P báo cáo","Phương sai innovation S","Ngưỡng gating tính theo mét"],0,
"K ổn định phụ thuộc tỉ lệ Q/R nên gần như giữ nguyên. Nhưng P và S lớn gấp 10, nên khai sai cả hai vẫn làm hỏng gating và hợp nhất phía sau.",
["","P tỉ lệ thuận với Q, R nên tăng 10 lần.","S = HPHᵀ + R cũng tăng 10 lần.","Cổng gating tính từ S nên rộng ra."]);

Q(2,5,"Vận tốc ẩn",
"Cảm biến chỉ đo vị trí. Kalman với trạng thái [vị trí, vận tốc] có ước lượng được vận tốc không?",
["Không, cần cảm biến vận tốc","Có, nhờ F liên kết vị trí và vận tốc","Chỉ khi dùng EKF với Jacobian của phép đo","Chỉ khi R bằng 0"],1,
"F = [[1, Δt],[0, 1]] cho vị trí mới phụ thuộc vận tốc; chuỗi vị trí đo được mang thông tin về vận tốc qua hiệp phương sai.",
["Đây chính là điểm mạnh của Kalman: ước lượng biến không đo trực tiếp.","","KF tuyến tính đã làm được; EKF dành cho phi tuyến.","Không cần cảm biến hoàn hảo."]);

Q(2,5,"Chọn bộ lọc",
"Robot thấy một cánh cửa trong hành lang có 3 cửa giống hệt nhau. Bộ lọc nào biểu diễn đúng niềm tin?",
["KF","EKF","UKF","Bộ lọc hạt"],3,
"Niềm tin có 3 đỉnh. KF, EKF, UKF đều là một Gauss nên chỉ giữ được một đỉnh; bộ lọc hạt (AMCL) giữ nhiều giả thuyết cùng lúc.",
["Một Gauss không biểu diễn được 3 vị trí khả dĩ.","EKF vẫn là một Gauss, chỉ tuyến tính hoá.","UKF bỏ Jacobian nhưng vẫn là một Gauss.",""]);

Q(2,5,"Hợp nhất độ tin",
"Ba cảm biến đo cùng đại lượng với phương sai 4, 4 và 2 (độc lập, R khai đúng). Phương sai gộp?",
["1,0","1,33","2,0","0,5"],0,
"Độ tin (1/phương sai) cộng được: 0,25 + 0,25 + 0,5 = 1 → phương sai gộp 1/1 = 1,0, nhỏ hơn cảm biến tốt nhất.",
["","1,33 = 4/3, chia nhầm.","2 là cảm biến tốt nhất; gộp phải nhỏ hơn.","0,5 là độ tin của cảm biến tốt nhất, không phải phương sai gộp."]);

Q(2,5,"Đo bất đồng bộ",
"Phép đo camera đến trễ 80 ms so với lúc đo. Cách xử lý đúng?",
["Cập nhật ngay như thể phép đo vừa mới xảy ra","Dự đoán tới lúc đo rồi mới cập nhật","Bỏ phép đo đó vì dữ liệu đã quá cũ","Tăng R lên 80 lần để bộ lọc ít tin nó"],1,
"Phép đo phải được so với trạng thái ở đúng thời điểm đo. Ở 20 m/s, sai 50 ms đã là 1 m.",
["Coi như mới đo là gán vị trí cũ cho hiện tại.","","Phép đo trễ vẫn có ích nếu xử lý đúng thời điểm.","Thổi R không sửa lệch thời gian, chỉ làm bộ lọc bỏ qua thông tin."]);

Q(2,5,"Đếm hai lần",
"Hai track cùng dùng dữ liệu từ một camera được gộp như hai nguồn độc lập. Hậu quả?",
["P co quá nhỏ, hệ thống tự tin quá mức","Gating quá chặt","Q bị tăng gấp đôi","Kalman gain bằng 0"],0,
"Thông tin trùng bị đếm hai lần nên độ tin bị cộng thừa, P nhỏ hơn thực tế. Covariance intersection là một cách xử lý.",
["","Gating phụ thuộc S; ở đây vấn đề là P báo sai chứ không phải cổng chặt.","Q là nhiễu quá trình, không bị ảnh hưởng.","Gain không về 0 vì lý do này."]);
