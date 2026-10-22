// Phase 1 · AICB-P1 · Day 2, 3, 4, 7, 8
// ---------- Day 2: Xác định bài toán kinh doanh ----------
Q(1,2,"Chọn mức giải pháp",
"Một bộ phận cần đổi tên file theo quy tắc cố định và validate schema. Lựa chọn hợp lý nhất?",
["Agent có planning nhiều bước","Rule / workflow thường","LLM feature có review","RAG trên tài liệu nội bộ"],1,
"Input ổn định, logic rõ, cần output dự đoán được: rule/workflow là đủ. Dùng AI ở đây dễ thành overkill, khó debug, khó compliance.",
["Agent đắt và khó kiểm soát cho việc không cần tự quyết bước.","","LLM feature hợp khi input biến thể, cần tổng hợp; ở đây không cần.","RAG để tra cứu tài liệu, không phải đổi tên file."]);

Q(1,2,"Anti-pattern",
"Team build AI ngay mà chưa có cách xử lý thủ công hoặc rule nào để so sánh. Đây là anti-pattern nào?",
["Trend-first","No baseline","No eval path","No owner of failure"],1,
"No baseline: không có rule/manual baseline thì không chứng minh được AI mang lại lợi ích gì.",
["Trend-first là chạy theo 'agent' trước khi rõ actor, workflow, metric.","","No eval path là có demo nhưng không có bộ test.","No owner of failure là không rõ ai review, rollback, chịu compliance."]);

Q(1,2,"Gate trong lifecycle",
"Theo bảng go/no-go của Day 2, khi nào dừng ở giai đoạn Build & Eval?",
["Khi chưa xác định được actor và metric","Khi chỉ có demo thủ công, chưa có eval tái lập","Khi chưa có người chịu trách nhiệm rollback","Khi dữ liệu bị lệch hoặc không có nguồn"],1,
"Build & Eval chỉ 'go' khi có bộ test, task-level eval, ngân sách latency/cost. Chỉ có demo thủ công là no-go.",
["Đó là gate của Problem Scoping.","","Đó là gate của Deploy Controls.","Đó là gate của Data Readiness."]);

Q(1,2,"4 bài học lifecycle",
"Câu nào KHÔNG thuộc 4 bài học kỹ thuật từ lifecycle của Day 2?",
["Không có metric thì không có gate","Không có baseline thì không có lợi ích rõ ràng","Không có model lớn thì không nên bắt đầu","Không có rollback thì deploy là đánh bạc"],2,
"4 bài học là: metric → gate, baseline → lợi ích, eval → không chỉ demo, rollback → không đánh bạc. Day 2 nhấn mạnh AI hiếm khi thất bại vì thiếu model.",
["Đây là bài học 1.","Đây là bài học 2.","","Đây là bài học 4."]);

Q(1,2,"Anatomy hệ AI",
"Thành phần nào trong AI system có failure mode chính là 'side effects, prompt injection'?",
["Model","Context","Planning","Tools"],3,
"Tools đọc/ghi hệ thống ngoài nên rủi ro là tác dụng phụ và bị tiêm lệnh; control là sandbox, allowlist, HITL.",
["Model: hallucination, inconsistency.","Context: wrong retrieval, stale context.","Planning: looping, over-planning.",""]);

Q(1,2,"Decision shortcut",
"Bài toán chỉ cần tóm tắt văn bản dài thành 5 ý. Theo decision shortcut, nên thử gì trước?",
["Agent ReAct với vài tool","Prompt + structured output","Hệ multi-agent có supervisor điều phối","Fine-tune model tóm tắt"],1,
"Text transform/summarize thì thử prompt + structured output trước; chỉ khi cần tự chọn bước, gọi nhiều tool mới xét agent.",
["Không có lý do cần planning hay tool.","","Multi-agent càng thừa.","Fine-tune tốn kém và không cần cho tóm tắt."]);

Q(1,2,"AI Readiness",
"AI Readiness Checklist có 5 câu. Nếu chỉ được 2 câu YES thì nên làm gì?",
["Build agent ngay để học nhanh từ lỗi","Dừng lại, làm rõ bài toán trước","Chuyển sang fine-tune để bù thiếu baseline","Thuê thêm người gán nhãn để tăng dữ liệu"],1,
"Dưới 3 câu YES (value, baseline, eval, tolerance, operations) thì dừng và làm rõ bài toán trước khi đầu tư AI.",
["Build khi chưa sẵn sàng là đốt tiền.","","Fine-tune không giải quyết thiếu baseline hay eval.","Thiếu người gán nhãn chưa chắc là vấn đề."]);

Q(1,2,"Problem Statement",
"Problem Statement nào viết đúng theo mẫu Day 2?",
["Xây agent AI để tự động hoá toàn bộ CS ngân hàng trong năm nay","CS mất 8 phút/ticket, 40% vượt SLA; mục tiêu 80% top-5 intent < 2 phút","Dùng GPT mới nhất cho bộ phận CS để rút ngắn thời gian trả lời khách","Tự động hoá toàn bộ chăm sóc khách hàng bằng AI ngay trong quý này"],1,
"Mẫu đúng: actor nào gặp bottleneck nào, gây tổn thất gì, thành công đo bằng metric nào, kèm boundary.",
["Solution-first, không metric.","","Nói về công cụ, không về bài toán.","Scope quá rộng, không có SLA cụ thể."]);

Q(1,2,"Boundary",
"Trong ví dụ CS ngân hàng, boundary 'hệ thống chỉ đề xuất câu trả lời, agent CS xác nhận trước khi gửi' dẫn tới thiết kế gì?",
["Không cần logging","Cần HITL ở bước gửi","Cần agent tự chủ hoàn toàn","Cần fine-tune model"],1,
"Boundary + risk cho biết cần HITL, approval hay chỉ logging. Ở đây người xác nhận trước khi gửi.",
["Vẫn cần logging để eval và audit.","","Ngược với boundary đã nêu.","Boundary không đòi fine-tune."]);

Q(1,2,"Go / No-Go / Not Yet",
"Có pain thật nhưng chưa có data và metric. Quyết định đúng theo Day 2?",
["Go","Not Yet","No-Go","Build agent để thu data"],1,
"Not Yet: có pain thật nhưng thiếu data, thiếu metric hoặc chưa rõ boundary. Bước tiếp là thí nghiệm nhỏ: đo baseline, gom log.",
["Go cần problem, baseline, eval, risk controls rõ.","","No-Go là khi rule đã đủ tốt hoặc sai quá đắt.","Build trước khi rõ metric là anti-pattern."]);

Q(1,2,"RACI-lite",
"Trong RACI-lite của Day 2, ai thường là A/R cho 'chốt baseline + eval set'?",
["Biz/Ops","AI Eng","Risk/Legal","Platform/Data"],1,
"AI Eng chịu trách nhiệm chính (A/R) cho baseline và eval set; Biz/Ops tư vấn, Platform/Data hỗ trợ.",
["Biz/Ops là A/R cho define problem + metric.","","Risk/Legal là R cho HITL/approvals và rollback.","Platform/Data đóng vai trò hỗ trợ (R), không phải chủ trì."]);

Q(1,2,"Pitch đúng cách",
"Pitch nào nối đúng từ system metric sang business KPI?",
["Agent đạt 87% accuracy","Giảm 30% SLA breach, 20% cost/ticket","Agent dùng model mới nhất và context dài nhất","Agent có 12 tool"],1,
"Không dừng ở 'accuracy 87%'; phải nối tới SLA breach, cost/ticket, human handling: pain → workflow metric → business impact → architecture.",
["Chỉ là system metric.","","Không phải KPI kinh doanh.","Số tool không phải giá trị."]);

// ---------- Day 3: Từ Chatbot đến Agentic Agent ----------
Q(1,3,"Chatbot hay agent",
"Theo Day 3, khi nào một hệ thống dùng LLM mới được gọi là agent?",
["Khi dùng model lớn nhất của nhà cung cấp","Khi có vòng lặp quyết định–hành động–quan sát","Khi trả lời được nhiều ngôn ngữ kể cả tiếng Việt","Khi có giao diện chat và lưu lịch sử hội thoại"],1,
"Một LLM call là chatbot. Agent xuất hiện khi hệ thống phải quyết định, hành động, quan sát kết quả rồi lặp lại.",
["Kích thước model không quyết định.","","Ngôn ngữ không liên quan.","Giao diện chat không biến chatbot thành agent."]);

Q(1,3,"Phân loại sản phẩm",
"Cursor IDE ở Agent mode được Day 3 xếp vào loại nào?",
["Rule-based bot","LLM chatbot","Reactive agent","Không phải AI"],2,
"Agent mode: phân tích → chọn tool → quan sát → lặp lại. ChatGPT cơ bản là chatbot; Siri là rule-based + NLU.",
["Có dùng LLM và tool, không phải rule cứng.","Chatbot chỉ trả lời 1 lượt, không tự gọi tool.","","Là sản phẩm AI."]);

Q(1,3,"Agentic Fit",
"Use case có điểm Agentic Fit tổng 8. Theo thang của Day 3 nên bắt đầu bằng gì?",
["Chatbot hoặc rule là đủ","Augmented chatbot + 1–2 tool cố định","Agent đáng thử vì đã vượt ngưỡng 6","Multi-agent vì có nhiều bước xử lý"],1,
"0–5: chatbot/rule; 6–10: augmented chatbot; 11+: agent đáng thử.",
["0–5 mới là mức chatbot/rule.","","Cần từ 11 trở lên.","Không có trong thang điểm."]);

Q(1,3,"Ngộ nhận về tool",
"'Thêm nhiều tool thì agent mạnh hơn.' Day 3 nhận xét thế nào?",
["Đúng, càng nhiều tool càng tốt","Sai, nhiều tool làm agent dễ chọn sai","Đúng nếu dùng model đủ lớn để chọn tool","Chỉ đúng với ReAct"],1,
"Tool ít nhưng description rõ thắng tool nhiều nhưng mơ hồ. Mỗi tool còn thêm attack surface.",
["Ngược với bài giảng.","","Model lớn không xoá được việc mô tả tool mơ hồ.","Không phụ thuộc ReAct hay function calling."]);

Q(1,3,"Chi phí agent",
"Theo ví dụ của Day 3, agent so với chatbot cho cùng query đắt hơn và chậm hơn khoảng bao nhiêu?",
["~1,5× và ~1,5×","~4,5× và ~4×","~15× và ~10×","~100× và ~20×"],1,
"Chatbot ~$0,0002, ~1 s; agent (3 LLM + 2 tool call) ~$0,0009, ~4–6 s. Đổi lại agent grounded trong dữ liệu thật.",
["Thấp hơn nhiều so với ví dụ.","","~15× là con số multi-agent ở Day 9.","Không có trong bài."]);

Q(1,3,"Vòng ReAct",
"Thứ tự đúng của một vòng ReAct là gì?",
["Action → Thought → Observation","Thought → Action → Observation","Observation → Action → Thought","Thought → Observation → Action"],1,
"Thought: thiếu gì, làm gì tiếp; Action: gọi tool với tham số; Observation: kết quả trả về; lặp đến khi đủ thông tin.",
["Hành động trước khi suy nghĩ là sai thứ tự.","","Quan sát phải đến sau hành động.","Không thể quan sát trước khi hành động."]);

Q(1,3,"Tool phụ thuộc",
"Truy vấn 'mua 2 iPhone dùng mã giảm giá, ship về Hà Nội' gọi check_stock → get_discount → calc_shipping. Đây là kiểu gì?",
["Parallel tools vì cùng phục vụ một đơn hàng","Chained tools: bước sau cần kết quả bước trước","Không cần tool vì model tự tính được tổng giá","Routing: phân loại rồi chọn một trong ba nhánh"],1,
"Mỗi bước cần kết quả bước trước; sai thứ tự là sai kết quả. Đây là tiêu chí 'dynamic decision' của Agentic Fit.",
["Song song chỉ khi các tool độc lập, như vé máy bay và thời tiết.","","Có tool và phụ thuộc rõ.","Routing chọn nhánh, không phải chuỗi tool."]);

Q(1,3,"Debug trace",
"Trong bài tập tìm bug, Observation ghi 1,75M nhưng Final Answer ghi 1,5M. Đây là lỗi gì?",
["Sai thứ tự gọi tool trong trace","Sai mã IATA của sân bay đích","Hallucination ở câu trả lời cuối","Timeout khi gọi tool tìm chuyến bay"],2,
"Final answer bịa con số khác dữ liệu quan sát được. Eval agent phải đọc cả trace, không chỉ câu trả lời cuối.",
["Đó là bug gọi thời tiết trước khi có vé.","Đó là bug truyền sai mã sân bay.","","Timeout là lỗi tool, không phải lệch số."]);

Q(1,3,"ReAct và function calling",
"Theo Day 3, quan hệ giữa ReAct và function calling là gì?",
["Hai tên của cùng một thứ","ReAct là concept, FC là mechanism","Function calling đã thay thế hoàn toàn ReAct","ReAct chỉ dùng với model không hỗ trợ FC"],1,
"ReAct là ý tưởng xen kẽ suy luận và hành động; function calling là cơ chế gọi tool có cấu trúc. Production dùng hybrid: JSON tool call + giữ reasoning trace.",
["Chúng ở hai tầng khác nhau.","","Production kết hợp cả hai.","ReAct dùng được với mọi LLM, kể cả có FC."]);

Q(1,3,"System prompt agent",
"Prompt demo thiếu phần nào trong 5 thành phần production-grade mà Day 3 nhấn mạnh phải có?",
["Identity và capabilities","Constraints và output format","Instructions và identity","Capabilities và instructions"],1,
"5 thành phần: identity, capabilities, instructions, constraints (max tool calls, không bịa, không book khi chưa xác nhận), output format.",
["Prompt demo đã có identity, capabilities.","","Đã có trong demo.","Đã có trong demo."]);

Q(1,3,"Max iterations",
"Dấu hiệu nào cho thấy agent đang đi vòng và cần dừng loop?",
["Mỗi vòng gọi tool khác nhau và nhận kết quả mới","Lặp cùng tool call, observation không đổi","Agent trả lời ngay ở vòng đầu tiên","Agent gọi hai tool độc lập song song"],1,
"Lặp cùng tool call, hỏi lại thông tin đã có, reasoning không tiến, observation không đổi: dừng và fallback.",
["Đó là tiến triển bình thường.","","Trả lời sớm không phải đi vòng.","Song song là tối ưu, không phải loop."]);

Q(1,3,"Agent security",
"Khác biệt bảo mật chính giữa chatbot và agent theo Day 3?",
["Agent miễn nhiễm prompt injection","Agent nhận thêm input từ tool output","Chatbot không có system prompt nên an toàn hơn","Agent không cần guardrails"],1,
"Chatbot nhận input từ user; agent nhận từ user + tool output (untrusted). Thêm tool là thêm attack surface (indirect injection).",
["Agent còn dễ bị hơn qua kênh tool.","","Chatbot cũng có system prompt.","Agent cần guardrails nhiều lớp."]);

Q(1,3,"Eval agent",
"Trong rubric Lab 3, tiêu chí nào có điểm cao nhất?",
["System prompt quality","Trace quality","Code quality","Test case diversity"],1,
"Trace quality 25/100 vì kỹ năng cốt lõi là đánh giá agent qua trace, không chỉ qua final answer.",
["System prompt 20 điểm.","","Code quality 10 điểm.","Test case diversity 20 điểm."]);

// ---------- Day 4: Prompt Engineering & Tool Calling ----------
Q(1,4,"Thành phần prompt",
"Theo Day 4, nên bắt đầu prompt với hai thành phần nào trước?",
["Role + Context","Task + Format","Role + Format","Context + Examples"],1,
"Bắt đầu với Task + Format; chỉ thêm Role hoặc Context khi chúng thực sự cải thiện chất lượng hay độ nhất quán.",
["Role và Context là phần thêm khi cần.","","Role không bắt buộc ngay từ đầu.","Examples không thuộc 4 thành phần cốt lõi."]);

Q(1,4,"Nguyên tắc vàng",
"'Specificity beats cleverness' nghĩa là gì?",
["Prompt càng dài, càng nhiều chi tiết thì model càng làm đúng","Prompt ngắn mà rõ thường tốt hơn dài mà lan man","Luôn thêm chain-of-thought cho mọi loại task để chắc ăn","Luôn mở đầu bằng một role chuyên gia cấp cao nhất"],1,
"Rõ task, context, constraint, format quan trọng hơn câu chữ hoa mỹ; prompt dài thêm mà không đổi hành vi thì cắt.",
["Ngược lại: token thừa tăng chi phí, latency và nhiễu.","","CoT chỉ cho bài cần suy luận nhiều bước.","Role chỉ thêm khi thực sự giúp."]);

Q(1,4,"Thứ tự thử kỹ thuật",
"Thứ tự thử kỹ thuật prompting thực dụng theo Day 4?",
["CoT → few-shot → zero-shot, từ mạnh tới yếu","Zero-shot → few-shot → decomposition/CoT","Few-shot → zero-shot → CoT để có ví dụ sớm","Tree-of-Thought trước tiên để khám phá nhiều hướng"],1,
"Zero-shot nhanh rẻ nên thử trước; few-shot khi sai format/không ổn định; CoT khi cần suy luận nhiều bước.",
["Ngược thứ tự: phức tạp nhất trước.","","Few-shot tốn token hơn zero-shot.","ToT chỉ là extension, tốn token và latency."]);

Q(1,4,"Khi nào few-shot",
"Model hiểu task nhưng ra sai format và không ổn định giữa các input tương tự. Nên dùng gì?",
["Chain-of-Thought","Few-shot với 2–5 ví dụ đúng format","Tăng temperature để model linh hoạt hơn","Bỏ system prompt"],1,
"Few-shot chỉ ra pattern cần bám theo: ví dụ relevant, đa dạng vừa đủ, đúng format mong muốn.",
["CoT cải thiện suy luận, không phải format.","","Temperature cao làm kém ổn định hơn.","System prompt giúp giữ hành vi ổn định."]);

Q(1,4,"Khi nào không cần CoT",
"Task chỉ là trích tên, ngày, số tiền từ hoá đơn theo format cố định. CoT có cần không?",
["Bắt buộc dùng CoT","Thường là overkill","Phải dùng Tree-of-Thought","Phải dùng few-shot 20 ví dụ"],1,
"CoT là công cụ cải thiện reasoning; với formatting/extraction đơn giản thì thường thừa, chỉ tốn token.",
["Không có suy luận nhiều bước cần giải thích.","","ToT còn tốn hơn CoT.","20 ví dụ vượt quá mức 2–5 cần thiết."]);

Q(1,4,"Anatomy system prompt",
"Phần nào trong system prompt production-grade quy định 'không làm gì, khi nào từ chối, khi nào escalate'?",
["Persona","Rules","Capabilities","Constraints"],3,
"Constraints là ranh giới; Rules là việc nên/luôn làm; Capabilities là tool, dữ liệu được dùng; Persona là vai trò, giọng.",
["Persona là role, expertise, communication style.","Rules là việc nên làm, luôn phải làm.","Capabilities là tool và dữ liệu được phép.",""]);

Q(1,4,"Anti-pattern system prompt",
"System prompt vừa yêu cầu 'trả lời thật ngắn gọn', vừa yêu cầu 'giải thích chi tiết từng bước'. Đây là anti-pattern gì?",
["Quá dài","Mâu thuẫn","Mơ hồ","Không test edge case"],1,
"Hai chỉ dẫn trái nhau khiến hành vi không dự đoán được; system prompt là policy layer, càng rõ càng dễ đoán.",
["Quá dài là nhồi 2000+ token.","","Mơ hồ là 'hãy chuyên nghiệp' mà không định nghĩa chuẩn.","Đó là quên test câu ngoài phạm vi, refusal, tool fail."]);

Q(1,4,"Context compression",
"Phần lịch sử cũ không còn liên quan được đẩy ra ngoài context và chỉ nạp lại khi cần. Kỹ thuật nào?",
["Summarize","Drop","Archive","Few-shot"],2,
"Archive đẩy ra ngoài context, fetch lại khi cần. Summarize tóm tắt phần cũ; Drop bỏ hẳn.",
["Summarize giữ bản tóm tắt trong context.","Drop bỏ hẳn, không nạp lại.","","Few-shot là kỹ thuật prompting, không phải nén context."]);

Q(1,4,"Token budget",
"Rủi ro nào xảy ra nếu không chừa đủ output buffer trong context window?",
["Model chọn tool sai","Output bị cắt cụt","Lost in the middle","Chi phí giảm"],1,
"Output buffer là phần model dùng để trả lời; cấp thiếu thì câu trả lời bị cắt.",
["Đó là rủi ro của tool schema dài/mơ hồ.","","Đó là rủi ro history quá nhiều.","Thiếu buffer không giảm chi phí có ích."]);

Q(1,4,"Tool calling flow",
"Trong tool calling, ai thực sự chạy tool?",
["Model tự chạy code trong sandbox của nó","App của bạn chạy tool rồi gửi kết quả lại","Nhà cung cấp LLM luôn chạy tool thay bạn","Người dùng tự chạy tool rồi dán kết quả vào chat"],1,
"Model chỉ trả về yêu cầu tool_call (JSON); app thực thi và gửi kết quả về để model viết câu trả lời cuối.",
["Model không tự chạy code hay gọi API ngoài.","","Function calling thông thường do app thực thi.","Người dùng không tham gia vòng này."]);

Q(1,4,"Tool schema",
"Phần nào của tool schema được LLM đọc như tài liệu hướng dẫn để biết khi nào nên dùng tool?",
["name (tên ngắn, động từ đúng việc)","description","required (danh sách field bắt buộc)","type của từng parameter"],1,
"Description nói khi nào dùng tool; mơ hồ thì model chọn sai tool hoặc truyền sai arguments.",
["Name nên ngắn, rõ, nhưng không mô tả khi nào dùng.","","Required cho biết thiếu gì thì chưa gọi được.","Type chỉ là kiểu dữ liệu."]);

Q(1,4,"Idempotency",
"Nguyên tắc thiết kế tool nào giúp retry không sinh lỗi phụ (ví dụ trừ tiền hai lần)?",
["Single Responsibility","Idempotency","Granularity hợp lý","Test độc lập"],1,
"Idempotency: cùng input cho cùng kết quả, side effect được kiểm soát, nên retry an toàn.",
["Single responsibility giúp model chọn đúng tool.","","Granularity giúp tránh quá nhiều call hoặc tool quá cứng.","Test độc lập giúp tách lỗi tool khỏi lỗi prompt."]);

Q(1,4,"Granularity",
"Tách thành get_customer_name, get_customer_email, get_customer_phone. Vấn đề gì?",
["Tool quá to, khó debug","Quá nhỏ: nhiều call, flow rối","Vi phạm idempotency vì gọi nhiều lần","Không có vấn đề gì"],1,
"Quá nhỏ gây overhead lớn. Nên thiết kế quanh một hành động nghiệp vụ rõ ràng như lookup_customer.",
["Quá to là handle_all_customer_operations.","","Đọc dữ liệu vẫn idempotent.","Có vấn đề về số lượt gọi."]);

Q(1,4,"Sequential vs parallel",
"Cần tìm order ID rồi mới tra trạng thái giao hàng. Nên gọi tool thế nào?",
["Gọi song song để giảm latency tổng","Tuần tự, vì B cần output của A","Gộp thành một tool duy nhất ôm cả hai việc","Không cần tool, model tự suy ra trạng thái"],1,
"Chỉ song song hoá khi không có phụ thuộc dữ liệu; ở đây bước sau cần kết quả bước trước.",
["Song song sẽ thiếu order ID.","","Gộp tool vi phạm granularity hợp lý.","Cần dữ liệu thật nên phải gọi tool."]);

// ---------- Day 7: Embedding, Chunking & Vector Store ----------
Q(1,7,"Ba loại data",
"Trạng thái đơn hàng, tồn kho thay đổi liên tục. Theo Day 7 nên đưa vào agent bằng cách nào?",
["Chunk và embed vào vector store","Function calling / SQL có kiểm soát","Inject toàn bộ bảng vào system prompt","Fine-tune vào model"],1,
"Operational data thay đổi liên tục, dạng structured: retrieval fit thấp, nên dùng function calling/SQL, không embed.",
["Embed dữ liệu biến động sẽ stale ngay.","","Inject toàn bộ tốn context và vẫn cũ.","Fine-tune không theo kịp dữ liệu thay đổi từng phút."]);

Q(1,7,"Cosine similarity",
"A = [1, 2, 3], B = [2, 4, 6]. cos(A, B) bằng bao nhiêu?",
["0,5","1,0","2,0","0"],1,
"B = 2A cùng hướng nên cosine = 1, dù độ dài khác nhau. Cosine bỏ qua độ lớn, Euclidean thì không.",
["0,5 không ứng với hai vector cùng hướng.","","Cosine nằm trong [−1, 1].","0 là khi vuông góc."]);

Q(1,7,"Bi-encoder",
"Vì sao SBERT (bi-encoder) nhanh hơn BERT cross-encoder khi tìm cặp câu giống nhau trong 10.000 câu?",
["Vì SBERT dùng model nhỏ hơn BERT rất nhiều","Encode mỗi câu một lần, so bằng cosine","Vì SBERT bỏ qua bước tokenize văn bản","Vì SBERT thực chất chỉ dùng BM25 bên dưới"],1,
"Cross-encoder phải đưa cả cặp qua BERT (~50 triệu lượt, ~65 giờ); bi-encoder precompute vector rồi so cosine (~5 giây).",
["Tốc độ đến từ cách so, không chủ yếu từ kích thước.","","Vẫn phải tokenize.","SBERT là dense, không phải BM25."]);

Q(1,7,"Prefix bất đối xứng",
"Dùng E5 mà quên prefix 'query:' và 'passage:'. Hậu quả theo Day 7?",
["Thư viện báo lỗi ngay","Recall giảm âm thầm, không báo lỗi","Embedding không tạo được cho các câu hỏi","Chỉ ảnh hưởng tốc độ"],1,
"Model được huấn luyện khác nhau cho hai phía; bỏ prefix tạo embedding lệch calibration, xếp hạng sai mà không exception.",
["Không có exception nào được ném.","","Embedding vẫn tạo được, chỉ kém chất lượng.","Ảnh hưởng chất lượng, không phải tốc độ."]);

Q(1,7,"Đọc điểm MTEB",
"Gemini Embedding có 68,32 (Multilingual) và 73,28 (English v2). Kết luận đúng?",
["Điểm MTEB tiếng Anh của Gemini là 68,32","Con số MTEB vô nghĩa nếu thiếu board, version, ngày","Hai con số phải bằng nhau nếu cùng một model","MTEB không còn dùng được vì đã bão hoà"],1,
"MTEB đã tách nhiều board không so sánh với nhau; 68,32 là điểm Multilingual, không phải tiếng Anh.",
["Đó chính là lỗi lan truyền mà bài cảnh báo.","","Hai board khác nhau nên khác số.","MTEB vẫn hữu ích nếu đọc đúng board."]);

Q(1,7,"PDF",
"Vì sao 'PDF chỉ cần pdftotext' là giả định sai đắt nhất với corpus thật?",
["Vì pdftotext chạy quá chậm với file lớn","PDF lưu cách vẽ glyph, không lưu cấu trúc","Vì PDF không bao giờ chứa lớp văn bản","Vì pdftotext không hỗ trợ ký tự tiếng Anh"],1,
"PDF lưu 'đặt glyph tại (x, y)': hai cột bị trộn, header/footer lặp, bảng mất quan hệ hàng–cột, file scan không có text layer.",
["Tốc độ không phải vấn đề chính.","","PDF born-digital có text layer.","Ngôn ngữ không phải vấn đề."]);

Q(1,7,"Bảng biểu",
"Theo Day 7, lỗi hỏng im lặng số một khi chunk tài liệu là gì?",
["Chunk quá dài làm loãng ý chính","Bảng bị cắt, mất quan hệ hàng–cột","Thiếu overlap giữa các chunk liền kề","Dùng sai embedding model cho tiếng Việt"],1,
"Header 'Doanh thu Q2' rơi vào chunk này, giá trị '4,2 tỷ' rơi vào chunk khác; không kỹ thuật retrieval nào ghép lại được. STC cải thiện MRR 0,358 → 0,595.",
["Chunk dài gây nhiễu nhưng không phải điểm hỏng số một bài nêu.","","Thiếu overlap gây mất ngữ cảnh mép, ít nghiêm trọng hơn.","Đó là failure mode khác."]);

Q(1,7,"Structured data",
"Câu hỏi 'Tổng doanh thu quý 2 theo vùng' nên được định tuyến tới đâu?",
["Vector search","Text-to-SQL","Graph","Reranker"],1,
"Cần aggregation, không phải similarity; không embedding nào cộng được số. Câu hỏi khái niệm mới đi vector search.",
["Vector search tìm đoạn giống nghĩa, không tính tổng.","","Graph cho câu hỏi quan hệ.","Reranker chỉ xếp lại kết quả tìm kiếm."]);

Q(1,7,"Tiếng Việt và Unicode",
"Cùng chữ 'ế' có thể mã hoá NFC hoặc NFD. Hậu quả nếu không chuẩn hoá?",
["Không ảnh hưởng gì vì nhìn giống hệt nhau","So chuỗi không khớp, sinh chunk trùng ẩn","Chỉ ảnh hưởng hiển thị trên trình duyệt cũ","Model embedding sẽ báo lỗi ký tự không hợp lệ"],1,
"Hai dạng khác byte nên dedup và exact-match thất bại im lặng. Chuẩn hoá NFC toàn corpus ngay sau khi parse.",
["Có ảnh hưởng tới dedup và so khớp.","","Không chỉ hiển thị mà cả xử lý.","Không có lỗi nào được báo."]);

Q(1,7,"Chunk size",
"Theo Day 7, con số chunk 512 token xuất phát từ đâu?",
["Một quy luật retrieval phổ quát đã được chứng minh","Giới hạn positional embedding của BERT 2018","Yêu cầu bắt buộc của FAISS khi build index","Tiêu chuẩn của OpenAI cho mọi embedding model"],1,
"Là giới hạn kiến trúc của một model cụ thể. Chunk tối ưu phụ thuộc loại câu hỏi và embedding model; đổi model phải đo lại.",
["Không có ngưỡng phổ quát.","","FAISS không giới hạn độ dài văn bản.","Không phải tiêu chuẩn của OpenAI."]);

Q(1,7,"Semantic chunking",
"Theo nghiên cứu NAACL 2025 được dẫn ở Day 7, semantic chunking so với fixed-size thế nào?",
["Luôn tốt hơn rõ rệt trên mọi tác vụ retrieval","Chi phí không được bù bằng cải thiện ổn định","Luôn tệ hơn fixed-size trên mọi bộ dữ liệu","Không thể đo được vì thiếu benchmark chuẩn"],1,
"Qu et al.: chi phí 'not justified by consistent performance gains'. Chỉ leo lên chiến lược đắt khi đã đo được gap thật.",
["Đó là ngộ nhận bài cảnh báo.","","Không phải luôn tệ hơn.","Đã có nghiên cứu đo."]);

Q(1,7,"IVF nprobe",
"Trong index IVF, tăng nprobe gây ảnh hưởng gì?",
["Recall giảm, latency giảm","Recall tăng, latency tăng","Bộ nhớ giảm một nửa","Không cần train"],1,
"nprobe là số cell được quét; quét nhiều hơn thì recall cao hơn nhưng chậm hơn (ví dụ 30% → 74% recall, 136 → 729 µs).",
["Ngược chiều.","","nprobe không đổi bộ nhớ index.","IVF luôn cần train centroid."]);

Q(1,7,"HNSW",
"Với HNSW, tham số nào chỉnh được lúc query mà không cần rebuild index?",
["M","efConstruction","efSearch","nlist"],2,
"efSearch là núm duy nhất không cần rebuild: tăng thì recall cao hơn, latency cao hơn. M và efConstruction quyết định lúc build.",
["M quyết định cấu trúc đồ thị khi build.","efConstruction chỉ dùng lúc build.","","nlist là tham số của IVF."]);

Q(1,7,"FAISS cosine",
"Dùng FAISS IndexFlatIP để tìm theo cosine mà quên normalize_L2. Hậu quả?",
["FAISS báo lỗi vì không có metric cosine","Xếp theo dot product thô, ưu tiên vector dài","Index không build được với vector chưa chuẩn hoá","Kết quả vẫn giống hệt cosine trong mọi trường hợp"],1,
"FAISS không có METRIC_COSINE; cosine được giả lập bằng normalize + inner product. Quên normalize không báo lỗi mà lặng lẽ thiên về vector dài.",
["Không có lỗi nào được ném.","","Index vẫn build bình thường.","Chỉ giống khi mọi vector có cùng độ dài."]);

Q(1,7,"Chroma embedding function",
"Tạo collection với embedding_function BGE-M3, sau đó gọi get_collection() mà không truyền lại. Chuyện gì xảy ra?",
["Chroma báo lỗi thiếu embedding","Default 384 chiều thế chỗ, recall tụt","Collection bị xoá và phải index lại từ đầu","Không ảnh hưởng gì"],1,
"Đây là lỗi #1 của Chroma: query không lỗi nhưng dùng sai model nên recall giảm. Luôn truyền cùng embedding_function mỗi lần.",
["Không có lỗi rõ ràng.","","Dữ liệu vẫn còn.","Ảnh hưởng nặng tới chất lượng."]);

Q(1,7,"Filter và recall",
"Post-filter (ANN toàn corpus rồi mới lọc theo quyền) có rủi ro gì?",
["Chậm hơn pre-filter rất nhiều lần ở mọi quy mô","Có thể ra ít hơn k hoặc 0 kết quả, không báo lỗi","Lộ tài liệu cho user không có quyền truy cập","Không tương thích với index HNSW nên phải dùng IVF"],1,
"Nếu filter chọn lọc mạnh, láng giềng đúng chưa từng là ứng viên; recall sập im lặng. Filter quyền nên nằm trong đường đi ANN.",
["Post-filter thường không chậm hơn.","","Đã lọc rồi nên không lộ, nhưng thiếu kết quả.","Post-filter dùng được với HNSW."]);

// ---------- Day 8: RAG Pipeline ----------
Q(1,8,"Fine-tuning vs RAG",
"Doanh nghiệp cần trả lời theo chính sách thay đổi hằng tháng và phân quyền theo phòng ban. Chọn gì?",
["Fine-tuning định kỳ","RAG","Tăng context window","Chỉ dùng prompt engineering"],1,
"RAG cập nhật bằng cách đổi index, phân quyền theo tài liệu, có trích nguồn. Fine-tuning đắt để cập nhật, dễ hallucinate fact, khó phân quyền.",
["Retrain mỗi tháng tốn kém và vẫn khó phân quyền.","","Context dài không giải quyết phân quyền và cập nhật.","Prompt không chứa được kiến thức mới."]);

Q(1,8,"Ba pipeline",
"Pipeline nào của RAG thường chạy ngầm/offline?",
["Indexing","Retrieval","Generation","Cả ba đều real-time"],0,
"Indexing (chunk, embed, lưu) chạy offline như ETL; retrieval và generation chạy real-time khi user hỏi.",
["","Retrieval chạy khi user hỏi.","Generation chạy khi user hỏi.","Indexing không cần real-time."]);

Q(1,8,"Nút cổ chai",
"Theo Day 8, phần lớn lỗi RAG đến từ đâu?",
["Generation (~80%)","Retrieval (~80%)","Chia đều 50/50","Phần cứng"],1,
"Khoảng 80% lỗi do retrieval (tìm sai, thiếu chứng cứ, nhồi nhiễu), 20% do generation. Đừng vội sửa prompt hay đổi model lớn hơn.",
["Ngược tỉ lệ.","","Bài nêu tỉ lệ 80/20.","Không phải nguyên nhân chính."]);

Q(1,8,"Overlap",
"Overlap giữa các chunk thường đặt khoảng bao nhiêu và để làm gì?",
["50%, để tăng recall","10–15%, giữ mạch ngữ cảnh ở mép","0%, để tránh lưu trùng nội dung trong index","100%, cho chắc chắn"],1,
"Đoạn cuối chunk trước lặp lại ở đầu chunk sau như chất keo, tránh một ý bị cắt đôi ở mép.",
["Quá lớn gây trùng lặp, tốn chỗ.","","Không overlap thì ý ở mép bị đứt.","Vô nghĩa."]);

Q(1,8,"Parent-child",
"Small-to-big retrieval (parent-child) giải quyết mâu thuẫn nào?",
["Giữa tốc độ truy vấn và chi phí lưu trữ vector","Chunk nhỏ thì chính xác nhưng thiếu ngữ cảnh","Giữa sparse retrieval và dense retrieval khi gộp","Giữa bảo mật dữ liệu và hiệu năng của hệ thống"],1,
"Search trên chunk con nhỏ để chính xác; khi trúng thì gửi đoạn cha lớn vào prompt để đủ ngữ cảnh.",
["Không nhắm vào chi phí.","","Đó là việc của hybrid search.","Không liên quan bảo mật."]);

Q(1,8,"Pre-filter",
"Vì sao pre-filtering theo metadata (ví dụ năm 2026) được Day 8 khuyến nghị hơn post-filtering?",
["Vì pre-filter dùng ít RAM hơn post-filter","Không rớt tài liệu đúng nằm ngoài top-k","Vì pre-filter không cần chạy vector search","Vì pre-filter tạo embedding nhanh hơn"],1,
"Post-filter lấy top 100 rồi lọc có thể mất tài liệu quan trọng ở hạng 101; pre-filter chỉ tìm trong vùng đã lọc.",
["Lý do chính là độ chính xác, không phải RAM.","","Vẫn chạy vector search sau khi lọc.","Không liên quan tạo embedding."]);

Q(1,8,"Query transformation",
"Câu hỏi 'So sánh chính sách hoàn tiền của Shopee và Tiki' nên dùng kỹ thuật nào?",
["Query expansion bằng từ đồng nghĩa","Query decomposition","HyDE với câu trả lời giả định","Step-back về câu hỏi tổng quát"],1,
"Câu hỏi multi-hop: tách thành hai câu, tìm song song rồi gộp context. Một vector không trả lời đồng thời hai ý quá khác nhau.",
["Expansion thêm từ đồng nghĩa, không tách ý.","","HyDE sinh câu trả lời giả để tìm.","Step-back lùi về câu hỏi tổng quát."]);

Q(1,8,"HyDE",
"HyDE hoạt động thế nào?",
["Dịch câu hỏi sang tiếng Anh rồi mới tìm kiếm","Sinh câu trả lời giả, lấy vector đó đi tìm","Lọc bỏ các câu hỏi xấu trước khi vào DB","Chạy BM25 trước rồi mới chạy dense search"],1,
"Đoạn trả lời giả có hình dạng giống tài liệu thật hơn câu hỏi, kéo query vector về đúng cụm chứa document vectors.",
["Không phải dịch.","","Không phải lọc.","Đó là hybrid search."]);

Q(1,8,"Sparse vs dense",
"Truy vấn mã lỗi 'ERR-809' nên dựa vào phương pháp nào?",
["Dense vector","Sparse/BM25","HyDE","MMR"],1,
"Embedding có thể xếp ERR-809 và ERR-810 sát nhau; BM25 khớp chính xác token hiếm như mã lỗi, ID, số series.",
["Dense mù trước exact match.","","HyDE vẫn là dense.","MMR chỉ để đa dạng hoá kết quả."]);

Q(1,8,"RRF",
"Vì sao hybrid search dùng RRF thay vì cộng thẳng điểm BM25 và cosine?",
["Vì RRF chạy nhanh hơn phép cộng điểm","Hai điểm khác thang đo; RRF gộp theo hạng","Vì RRF không cần chạy BM25 nữa","Vì cosine luôn lớn hơn BM25 nên lấn át"],1,
"Cosine trong 0–1, BM25 không có giới hạn trên. RRF = Σ 1/(k + rank) với k thường 60.",
["Lý do là thang đo, không phải tốc độ.","","RRF gộp cả hai bảng xếp hạng.","Không phải lúc nào cũng vậy; vấn đề là không cùng thang."]);

Q(1,8,"Alpha tuning",
"Hệ thống tra cứu luật và log kỹ thuật nên đặt α (trọng số dense) khoảng bao nhiêu?",
["α = 0,8–0,9","α = 0,2–0,4","α = 1","α = 0,5 cố định"],1,
"Tra cứu code, log, luật ưu tiên khớp chính xác từ khoá nên α thấp; chatbot FAQ mới cần α 0,7–0,9.",
["Đó là mức cho chatbot FAQ.","","α = 1 là thuần vector, mất khớp chính xác.","Không có lý do cố định 0,5."]);

Q(1,8,"Cross-encoder",
"Vì sao không dùng cross-encoder reranker quét toàn bộ database?",
["Vì kém chính xác hơn bi-encoder","Vì quá chậm và tốn tính toán","Vì không hỗ trợ tiếng Việt","Vì không trả về điểm"],1,
"Cross-encoder đọc query + document cùng lúc nên rất chính xác nhưng chậm; chỉ dùng cho top 50–100 đã qua vòng 1.",
["Ngược lại, cross-encoder chính xác hơn.","","Có model multilingual.","Có trả điểm liên quan."]);

Q(1,8,"MMR",
"Ba chunk top đều nói 'hoàn tiền mất 7 ngày'. Kỹ thuật nào giải quyết?",
["Cross-encoder","MMR","Tăng top-k","HyDE"],1,
"MMR tối đa liên quan nhưng phạt trùng lặp: chọn chunk vừa liên quan vừa xa các chunk đã chọn.",
["Cross-encoder có thể đẩy cả ba lên đầu.","","Tăng k càng thêm trùng và nhiễu.","HyDE không xử lý trùng lặp."]);

Q(1,8,"Lost in the middle",
"Có 5 chunk đã xếp hạng. Thứ tự đưa vào prompt theo Document Reordering là gì?",
["[1, 2, 3, 4, 5]","[1, 3, 5, 4, 2]","[5, 4, 3, 2, 1]","[3, 1, 2, 4, 5]"],1,
"LLM nhớ tốt đầu và cuối prompt: tốt nhất ở đầu, tốt thứ hai ở cuối, điểm thấp giấu vào giữa.",
["Giữ nguyên thì chunk hạng 2 rơi vào vùng gần giữa hơn.","","Đặt tốt nhất ở cuối và kém nhất ở đầu.","Không theo nguyên tắc đầu–cuối."]);

Q(1,8,"Đọc bảng điểm RAGAS",
"Context recall cao nhưng faithfulness thấp. Nên sửa ở đâu?",
["Indexing và retrieval: tìm sai tài liệu","Generation: prompt, citation, temperature","Tăng top-k để model có thêm bằng chứng","Đổi sang embedding model đa ngôn ngữ mạnh hơn"],1,
"Tìm đúng tài liệu nhưng model bịa hoặc bỏ qua chứng cứ: sửa prompt grounding, ép trích dẫn, giảm temperature.",
["Retrieval đang tốt.","","Tăng k không sửa việc bịa thêm.","Embedding liên quan retrieval, đang tốt."]);
