C(2,1,"Vai trò của hàm kích hoạt",[
["Nếu bỏ hết hàm kích hoạt phi tuyến trong mạng nhiều lớp thì sao?",["Mạng học nhanh hơn","Cả mạng sụp thành một phép biến đổi tuyến tính","Mạng không có tham số","Loss luôn bằng 0"],1,"Ghép nhiều phép tuyến tính vẫn là tuyến tính; chồng lớp vô nghĩa.",["Không liên quan tốc độ.","","Vẫn có trọng số.","Không đúng."]],
["Vì sao cần hàm kích hoạt như ReLU giữa các lớp?",["Để giảm bộ nhớ","Để mạng biểu diễn được quan hệ phi tuyến","Để thay loss","Để chuẩn hoá input"],1,"Không có phi tuyến, 100 lớp cũng chỉ bằng 1 lớp tuyến tính.",["Không phải mục đích.","","Không liên quan.","Đó là việc của normalization."]],
["Vì sao sigmoid dễ gây vanishing gradient ở mạng sâu?",["Đạo hàm lớn nhất chỉ 0,25, nhân qua nhiều lớp thì teo dần","Sigmoid không khả vi","Sigmoid cho giá trị âm","Sigmoid quá nhanh"],0,"0,25^L tiến về 0 rất nhanh khi L lớn.",["","Sigmoid khả vi mọi nơi.","Sigmoid nằm trong (0,1).","Không liên quan."]]]);

C(2,1,"Learning rate",[
["Learning rate quá lớn thường gây hiện tượng gì?",["Học rất chậm","Loss dao động hoặc phân kỳ","Mô hình nhỏ đi","Không ảnh hưởng"],1,"Bước quá dài nhảy qua đáy, loss tăng hoặc nổ.",["Đó là khi lr quá nhỏ.","","Không đổi kích thước mô hình.","Ảnh hưởng rất lớn."]],
["Loss giảm rất chậm, đều đặn qua nhiều epoch. Nguyên nhân hay gặp?",["Learning rate quá nhỏ","Learning rate quá lớn","Batch size bằng 1","Không có dữ liệu"],0,"Bước nhỏ nên đi đúng hướng nhưng lâu.",["","Lr lớn gây dao động.","Batch 1 gây nhiễu.","Không train được."]],
["Gradient descent làm gì ở mỗi bước?",["Đi cùng chiều gradient","Đi ngược chiều gradient một bước bằng learning rate","Chọn trọng số ngẫu nhiên","Giữ nguyên trọng số"],1,"w ← w − η·∇L: xuống dốc.",["Cùng chiều là leo dốc, loss tăng.","","Không phải.","Không học."]]]);

C(2,2,"Overfitting và cách chống",[
["Train loss giảm mạnh, val loss tăng trở lại. Đây là gì?",["Underfitting","Overfitting","Data leakage","Vanishing gradient"],1,"Mô hình học thuộc train, không tổng quát.",["Underfitting là cả hai cùng cao.","","Leakage thường làm val tốt bất thường.","Không phải."]],
["Cách nào KHÔNG giúp giảm overfitting?",["Thêm dữ liệu/augmentation","Dropout, weight decay","Early stopping","Train thêm thật nhiều epoch"],3,"Train lâu hơn thường làm overfit nặng hơn.",["Có giúp.","Có giúp.","Có giúp.",""]],
["Dropout hoạt động thế nào khi train?",["Xoá vĩnh viễn neuron","Tắt ngẫu nhiên một phần neuron mỗi bước","Giảm learning rate","Cắt ảnh"],1,"Mạng không phụ thuộc vào một vài neuron; khi eval thì tắt dropout.",["Chỉ tắt tạm thời.","","Không phải.","Đó là augmentation."]]]);

C(2,2,"Convolution và residual",[
["Kích thước output của conv với W=32, K=3, P=1, S=1?",["30","32","34","16"],1,"(W − K + 2P)/S + 1 = (32 − 3 + 2)/1 + 1 = 32.",["Khi P=0.","","Sai công thức.","Khi S=2."]],
["Vì sao số tham số của lớp conv không phụ thuộc kích thước ảnh?",["Vì ảnh bị resize","Vì cùng một kernel được trượt dùng chung trên toàn ảnh","Vì conv không có tham số","Vì chỉ dùng 1 kênh"],1,"Weight sharing: tham số = K×K×C_in×C_out (+bias).",["Không phải lý do.","","Conv có tham số.","Không phải."]],
["Residual connection (ResNet) giải quyết vấn đề gì?",["Thiếu dữ liệu","Mạng rất sâu khó train (degradation), gradient khó đi qua","Ảnh quá lớn","Lớp quá ít"],1,"y = F(x) + x cho gradient đường tắt.",["Không phải.","","Không phải.","Ngược lại."]]]);

C(2,4,"Vai trò từng cảm biến",[
["Cảm biến nào đo trực tiếp vận tốc hướng tâm và chịu mưa sương tốt?",["Camera","LiDAR","Radar","Sonar"],2,"Radar dùng Doppler, sóng vô tuyến xuyên mưa sương.",["Không đo vận tốc trực tiếp.","Đo khoảng cách chính xác nhưng kém khi mưa sương.","","Chỉ tầm rất gần."]],
["Điểm mạnh nhất của camera so với LiDAR?",["Đo khoảng cách chính xác","Màu sắc, chữ, biển báo, đèn giao thông, giá rẻ","Hoạt động tốt trong bóng tối","Đo vận tốc"],1,"Camera giàu ngữ nghĩa nhưng thiếu độ sâu.",["Đó là LiDAR.","","Camera kém khi tối.","Đó là radar."]],
["LiDAR cho ra loại dữ liệu nào?",["Ảnh màu","Đám mây điểm 3D có khoảng cách chính xác","Chỉ vận tốc","Âm thanh"],1,"Point cloud (x, y, z, intensity).",["Camera.","","Radar.","Không phải."]]]);

C(2,4,"Hiệu chuẩn và đồng bộ thời gian",[
["Box LiDAR chiếu lên ảnh lệch cố định một khoảng, kể cả khi xe đứng yên. Lỗi gì?",["Extrinsic calibration","Đồng bộ thời gian","Intrinsic méo ống kính","Thiếu dữ liệu"],0,"Lệch cố định không phụ thuộc chuyển động là sai R, t.",["","Lỗi thời gian chỉ lộ khi vật/xe chuyển động.","Méo ống kính rõ nhất ở rìa ảnh.","Không phải."]],
["Box lệch càng nhiều khi xe chạy càng nhanh, đứng yên thì khớp. Nghi lỗi gì?",["Intrinsic","Đồng bộ thời gian (time offset)","Màu ảnh","Độ phân giải"],1,"Sai thời gian × vận tốc = sai vị trí.",["Không phụ thuộc vận tốc.","","Không liên quan.","Không liên quan."]],
["Intrinsic calibration của camera mô tả gì?",["Vị trí camera trên xe","Tiêu cự, tâm ảnh, hệ số méo ống kính","Thời gian chụp","Tốc độ xe"],1,"K và distortion; extrinsic mới là R, t.",["Đó là extrinsic.","","Đó là timestamp.","Không phải."]]]);

C(2,5,"Kalman gain",[
["Trong Kalman, nếu R (nhiễu đo) rất nhỏ thì K tiến tới đâu và lọc tin gì?",["K→0, tin dự đoán","K→1, tin phép đo","K không đổi","K âm"],1,"K = P/(P+R); R nhỏ → K≈1 → bám phép đo.",["Đó là khi R rất lớn.","","K phụ thuộc R.","K nằm trong [0,1] ở 1D."]],
["Dự đoán x=10 (P=4), phép đo z=12 (R=1). Ước lượng mới bằng bao nhiêu?",["10","11","11,6","12"],2,"K=4/5=0,8; x=10+0,8×2=11,6; P mới=0,8.",["Bỏ qua đo.","Trung bình đơn giản, sai.","","Tin đo hoàn toàn."]],
["Hai bước luân phiên của bộ lọc Kalman là gì?",["Train và test","Predict và update","Encode và decode","Detect và track"],1,"Predict theo mô hình chuyển động (P tăng), update khi có đo (P giảm).",["Không phải.","","Không phải.","Không phải."]]]);

C(2,5,"Q và R khi tuning",[
["Track bám rất chậm, trễ sau vật thật khi vật đổi hướng. Nên chỉnh thế nào?",["Tăng Q (nhiễu quá trình)","Giảm Q","Tăng R","Tắt update"],0,"Q nhỏ quá: lọc quá tin mô hình nên trễ.",["","Càng trễ hơn.","Càng ít tin đo, càng trễ.","Không học được."]],
["Track rung giật theo từng phép đo nhiễu. Nên chỉnh thế nào?",["Tăng Q","Tăng R hoặc giảm Q","Bỏ predict","Giảm R"],1,"Lọc đang quá tin phép đo.",["Càng giật.","","Mất mượt.","Càng giật."]],
["Kalman thường ước lượng được vận tốc dù cảm biến chỉ đo vị trí. Nhờ đâu?",["Đo vận tốc trực tiếp","Mô hình chuyển động F liên kết vị trí và vận tốc","Do camera","Không thể"],1,"Trạng thái ẩn quan sát gián tiếp qua F theo thời gian.",["Không đo.","","Không phải.","Làm được."]]]);

C(2,6,"Biểu diễn point cloud",[
["PointNet xử lý tính không thứ tự của point cloud bằng gì?",["Sắp xếp điểm","Hàm đối xứng max-pooling","Conv 2D","RNN"],1,"Max-pool cho kết quả như nhau dù đổi thứ tự điểm.",["Sắp xếp không ổn định.","","Cần lưới.","Phụ thuộc thứ tự."]],
["PointPillars chia không gian thành gì để dùng conv 2D?",["Voxel 3D","Cột (pillar) trên mặt phẳng BEV","Ảnh range","Điểm riêng lẻ"],1,"Gom điểm theo cột rồi tạo pseudo-image BEV; nhanh, baseline mạnh.",["Đó là VoxelNet/SECOND.","","Đó là range view.","Đó là point-based."]],
["Detector 3D cho mAP gần 0 dù loss giảm bình thường. Nghi lỗi gì đầu tiên?",["Model quá nhỏ","Quy ước toạ độ/yaw/z không khớp giữa nhãn và đánh giá","Thiếu GPU","Learning rate"],1,"Sai convention cho box lệch hệ thống → IoU ≈ 0.",["Ít khi về 0.","","Không phải.","Loss vẫn giảm."]]]);

C(2,6,"Early, mid, late fusion",[
["Late fusion nghĩa là gì?",["Ghép dữ liệu thô","Mỗi cảm biến detect riêng rồi gộp kết quả","Ghép đặc trưng giữa mạng","Không fusion"],1,"Đơn giản, dễ debug, mất thông tin chi tiết.",["Early fusion.","","Mid fusion.","Không phải."]],
["BEVFusion đưa camera và LiDAR về chung không gian BEV rồi gộp đặc trưng. Thuộc loại nào?",["Early fusion","Mid (feature-level) fusion","Late fusion","Không phải fusion"],1,"Gộp ở mức feature.",["Không gộp dữ liệu thô.","","Không gộp output.","Có fusion."]],
["PointPainting tô điểm LiDAR bằng kết quả semantic segmentation của ảnh. Thuộc loại nào?",["Late","Early (point-level)","Không fusion","Tracking"],1,"Ghép thông tin ngữ nghĩa vào từng điểm trước khi detector 3D chạy.",["Không gộp ở output.","","Có fusion.","Không phải."]]]);

C(2,7,"Hungarian và gating",[
["Thuật toán Hungarian trong tracking làm gì?",["Detect vật","Gán ghép detection–track tối ưu toàn cục theo ma trận chi phí","Lọc nhiễu","Tính IoU"],1,"Tổng chi phí nhỏ nhất, mỗi track tối đa một detection.",["Detector.","","Kalman.","IoU là input."]],
["Gating trong tracking dùng để làm gì?",["Tăng số track","Loại các cặp quá xa trước khi gán ghép","Vẽ box","Tăng fps"],1,"Ví dụ Mahalanobis > ngưỡng chi-square thì không cho ghép.",["Không phải.","","Không phải.","Không phải."]],
["Vì sao không dùng greedy (ghép cặp gần nhất trước) thay cho Hungarian?",["Greedy đắt hơn","Greedy có thể ra tổng gán sai khi vật đứng gần nhau","Greedy không chạy được","Không khác"],1,"Hungarian tối ưu toàn cục.",["Greedy rẻ hơn.","","Vẫn chạy.","Khác khi dày đặc."]]]);

C(2,7,"ByteTrack",[
["Ý tưởng chính của ByteTrack?",["Bỏ detection điểm thấp","Dùng detection điểm thấp ở vòng ghép thứ hai cho track chưa khớp","Dùng appearance mạnh","Không dùng Kalman"],1,"Vật bị che thường có điểm thấp; vòng 2 giúp giữ track.",["Đó là cách cũ.","","ByteTrack không phụ thuộc appearance.","Vẫn dùng Kalman."]],
["Trong ByteTrack, detection điểm thấp có được tạo track mới không?",["Có","Không, chỉ dùng để nối track đã có","Chỉ khi đêm","Luôn luôn"],1,"Tránh tạo track giả từ nhiễu.",["Sinh nhiều track giả.","","Không phải.","Không phải."]],
["Vì sao ByteTrack giảm ID switch khi người bị che một phần?",["Tăng ngưỡng điểm","Vẫn ghép detection điểm thấp nên track không bị đứt","Xoá track nhanh","Dùng ảnh màu"],1,"Che khuất làm điểm tụt; ByteTrack vẫn dùng chúng.",["Ngược lại.","","Gây đứt.","Không phải."]]]);

C(2,8,"Camera đơn khó ước lượng độ sâu",[
["Vì sao camera đơn khó ước lượng độ sâu?",["Ảnh không màu","Mỗi pixel là một tia; mọi điểm trên tia cho cùng pixel","Camera chậm","Ảnh nhỏ"],1,"Phép chiếu làm mất chiều sâu.",["Không liên quan.","","Không phải.","Không phải."]],
["Biết chiều cao camera h, tiêu cự f, đáy vật ở hàng v. Cách ước lượng Z?",["Z = f·h/(v − cy) với giả định mặt đường phẳng","Z = v·f","Z = h/f","Không ước lượng được"],0,"Dùng giả định mặt đất phẳng.",["","Sai.","Sai.","Ước lượng được."]],
["Lift-Splat-Shoot (LSS) đưa ảnh lên BEV theo hướng nào?",["Top-down bằng query","Bottom-up: dự đoán phân bố độ sâu cho từng pixel rồi đổ lên BEV","Không dùng độ sâu","Dùng LiDAR"],1,"DETR3D mới là top-down bằng query 3D.",["Đó là DETR3D.","","LSS dự đoán độ sâu.","Chỉ dùng camera."]]]);

C(2,8,"Radar trong fusion",[
["Radar đóng góp gì đặc biệt trong fusion?",["Màu sắc","Vận tốc hướng tâm và chịu thời tiết xấu","Chữ trên biển","Độ phân giải góc cao"],1,"Doppler cho vận tốc; điểm yếu là thưa và góc kém.",["Camera.","","Camera.","Radar kém về góc."]],
["Sai số góc nhỏ của radar ảnh hưởng thế nào theo khoảng cách?",["Không đổi","Sai số vị trí ngang tăng theo khoảng cách","Giảm theo khoảng cách","Biến mất"],1,"Sai vị trí ≈ r·Δθ.",["Sai.","","Ngược lại.","Không."]],
["Sai lệch thời gian giữa radar và camera gây lỗi lớn với vật nào?",["Vật đứng yên","Vật đang chuyển động nhanh","Vật màu đỏ","Vật nhỏ"],1,"Sai vị trí = vận tốc × time offset.",["Vật đứng yên không bị.","","Không liên quan.","Không liên quan."]]]);

C(2,9,"Chia dữ liệu theo scene",[
["Vì sao phải chia train/val theo scene, không theo frame ngẫu nhiên?",["Cho nhanh","Frame liền nhau gần giống nhau, chia ngẫu nhiên gây leakage","Để cân bằng nhãn","Không cần"],1,"Val sẽ đẹp giả tạo vì gần như đã thấy.",["Không phải.","","Không phải.","Cần."]],
["Kết quả val rất cao nhưng chạy thực tế kém. Nghi gì đầu tiên?",["Model quá nhỏ","Leakage do chia dữ liệu theo frame","GPU yếu","Batch size"],1,"Kiểm tra cách split.",["Ít khả năng.","","Không phải.","Không phải."]],
["Một phiên bản dataset nên được xác định bởi gì?",["Chỉ tên thư mục","Dữ liệu + split + code tiền xử lý","Chỉ số ảnh","Ngày tạo"],1,"Để tái lập được kết quả.",["Không đủ.","","Không đủ.","Không đủ."]]]);

C(2,9,"Auto-label và con người",[
["Auto-label offline có lợi thế gì so với model chạy online?",["Chạy nhanh hơn trên xe","Được dùng cả dữ liệu tương lai và model lớn","Không cần kiểm tra","Không cần GPU"],1,"Offline nhìn cả trước và sau frame nên chính xác hơn.",["Không chạy trên xe.","","Vẫn cần kiểm tra.","Cần GPU."]],
["Routing nhãn theo độ tin cậy: điểm cao tự nhận, thấp gửi người. Ngưỡng nên đặt thế nào?",["Đoán theo cảm giác","Calibrate trên tập gold đã được người gán","Luôn 0,5","Không cần ngưỡng"],1,"Đo trên gold để biết độ chính xác ở từng ngưỡng.",["Không đáng tin.","","Không tối ưu.","Cần ngưỡng."]],
["'Automation bias' khi người duyệt nhãn máy gợi ý là gì?",["Người sửa quá nhiều","Người có xu hướng chấp nhận gợi ý của máy kể cả khi sai","Máy chậm","Thiếu nhãn"],1,"Cần audit ngẫu nhiên, kiểm tra người duyệt.",["Ngược lại.","","Không phải.","Không phải."]]]);

C(2,10,"VLM",[
["Kiến trúc VLM phổ biến gồm những phần nào?",["CNN + RNN","Vision encoder (ViT) → projector → LLM","Chỉ LLM","Chỉ ViT"],1,"Ảnh thành token thị giác, chiếu sang không gian của LLM.",["Kiến trúc cũ.","","Không thấy ảnh.","Không sinh ngôn ngữ."]],
["Output JSON đúng schema từ VLM có đảm bảo giá trị bên trong đúng không?",["Có","Không, đúng format không có nghĩa đúng nội dung","Có nếu temperature 0","Có nếu model lớn"],1,"Cần kiểm tra giá trị riêng.",["Sai.","","Không đảm bảo.","Không đảm bảo."]],
["DriveBench phát hiện VLM vẫn trả lời tự tin khi đưa ảnh đen. Bài học là gì?",["VLM luôn đúng","VLM có thể trả lời dựa vào ngôn ngữ chứ không thật sự nhìn ảnh","Ảnh đen là dữ liệu tốt","Không có bài học"],1,"Cần kiểm tra grounding thị giác.",["Sai.","","Sai.","Có."]]]);

C(2,11,"Sim2real",[
["Domain randomization giúp gì cho sim2real?",["Làm sim giống hệt thật","Thay đổi ngẫu nhiên ánh sáng, texture... để model coi thật là một biến thể","Giảm dữ liệu","Bỏ mô phỏng"],1,"Model học bất biến với điều thay đổi.",["Không cần giống hệt.","","Thường tăng dữ liệu.","Không."]],
["FID thấp (ảnh tổng hợp trông giống thật) có đảm bảo dữ liệu tốt cho train không?",["Có","Không, nhãn và phân bố tình huống vẫn có thể sai","Có nếu đủ nhiều","Có nếu GAN"],1,"FID đo phân bố hình ảnh, không đo nhãn.",["Sai.","","Không đảm bảo.","Không đảm bảo."]],
["Trộn dữ liệu tổng hợp với dữ liệu thật thế nào là hợp lý?",["Chỉ dùng tổng hợp","Bổ sung cho dữ liệu thật, đánh giá trên test thật","Thay hoàn toàn dữ liệu thật","Chỉ để test"],1,"Đánh giá luôn trên dữ liệu thật.",["Dễ model collapse/gap.","","Rủi ro sim2real.","Test phải thật."]]]);

C(2,12,"Open loop và closed loop",[
["Vì sao open-loop (so L2 với quỹ đạo người lái) chưa đủ đánh giá planner?",["Tính chậm","Không phản ánh hệ quả khi xe làm khác người lái","Không có dữ liệu","Luôn sai"],1,"Closed loop cho xe chạy theo quyết định của chính nó.",["Không phải.","","Có dữ liệu.","Không phải."]],
["Log replay có hạn chế cơ bản gì?",["Quá rẻ","Xe khác trong log không phản ứng với hành động mới của xe ta","Không có cảm biến","Không tái lập"],1,"Agent không reactive nên không đánh giá được hành động mới.",["Không phải hạn chế.","","Có cảm biến.","Có tái lập."]],
["TTC khi khoảng cách 30 m, tốc độ tiếp cận 10 m/s?",["0,3 s","3 s","30 s","300 s"],1,"TTC = d / v = 30 / 10 = 3 s.",["Sai.","","Sai.","Sai."]]]);

C(2,11,"Quy tắc 3/n",[
["Chạy 300 lần thử không thấy lỗi nào. Cận trên 95% của tỉ lệ lỗi khoảng bao nhiêu?",["0%","1%","3%","0,1%"],1,"Quy tắc 3/n: 3/300 = 1%. Không thấy lỗi không có nghĩa là tỉ lệ lỗi bằng 0.",["Chưa chứng minh được lỗi bằng 0.","","Đó là 3/100.","Đó là 3/3000."]],
["Muốn khẳng định tỉ lệ lỗi dưới 0,1% (độ tin cậy 95%) khi chưa thấy lỗi nào, cần khoảng bao nhiêu lần thử?",["300","3.000","30","100"],1,"n ≈ 3 / 0,001 = 3.000.",["Chỉ đủ cho 1%.","","Quá ít.","Quá ít."]],
["'Không thấy lỗi trong n lần thử' nên hiểu thế nào?",["Hệ thống an toàn tuyệt đối","Tỉ lệ lỗi vẫn có thể lên tới khoảng 3/n","Tỉ lệ lỗi bằng 1/n","Cần thêm 1 lần thử"],1,"Quy tắc 3/n cho cận trên 95%.",["Sai.","","Sai công thức.","Không đủ."]]]);
