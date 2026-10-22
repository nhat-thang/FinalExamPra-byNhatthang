// Phase 1 · AICB-P1 · Day 9 – 14
// ---------- Day 9: Multi-Agent ----------
Q(1,9,"Khi nào multi-agent",
"Theo Day 9, phát biểu nào đúng về multi-agent?",
["Luôn tốt hơn nên dùng mặc định","Là đánh đổi; chỉ thêm khi cách đơn giản không đủ","Rẻ hơn single-agent vì mỗi agent xử lý ít việc hơn","Không cần trace"],1,
"Anthropic: chỉ thêm hệ agentic nhiều bước khi đơn giản hơn không đủ. Nhiều agent = nhiều LLM call = nhiều token (~15× so với một lần chat).",
["Không phải mặc định.","","Thường tốn hơn nhiều.","Multi-agent càng cần trace."]);

Q(1,9,"Song song hoá",
"Mental model 'song song hoá việc đọc, tuần tự hoá việc ghi' nói gì?",
["Mọi việc đều nên chạy song song để giảm latency","Hướng độc lập chạy song song; ghi chung một luồng","Chỉ được ghi khi có human duyệt từng bước","Đọc phải tuần tự còn ghi thì song song"],1,
"Subagent song song cùng ghi một sản phẩm chung dễ ra quyết định ngầm mâu thuẫn (ví dụ nền Mario + chim Flappy Bird).",
["Ghi song song gây mâu thuẫn.","","Không liên quan HITL.","Đọc rộng song song là thế mạnh."]);

Q(1,9,"Bốn loại bộ nhớ",
"Trong từ vựng CoALA, RAG thuộc loại bộ nhớ nào?",
["Working","Episodic","Semantic","Procedural"],2,
"Semantic là kiến thức thế giới (RAG). Working là context window; episodic là các lần chạy trước; procedural là kỹ năng, quy trình (Voyager).",
["Working là vở nháp hiện tại.","Episodic là history, trace.","","Procedural là kỹ năng học được."]);

Q(1,9,"Plan-then-execute vs ReAct",
"Agent nghiên cứu web, thông tin chỉ lộ ra sau khi tìm kiếm. Nên dùng gì?",
["Plan-then-execute","ReAct xen kẽ","Debate","Pipeline cố định"],1,
"ReAct thắng khi môi trường chỉ lộ thông tin qua hành động; plan trước thắng khi bài toán nhìn thấy hết từ đầu.",
["Không lập kế hoạch đầy đủ được khi chưa biết thông tin.","","Debate để phản biện, không giải quyết thông tin ẩn.","Pipeline cứng không thích nghi được."]);

Q(1,9,"Tự phê bình",
"Theo Day 9, tự phê bình (self-critique) hiệu quả nhất khi nào?",
["Khi model đủ lớn","Khi có phản hồi ngoài: test, tra cứu, model khác","Khi cho model tự sửa lặp lại nhiều vòng liên tiếp","Khi temperature cao"],1,
"Google 2023: trên suy luận, model không tự sửa được nếu thiếu phản hồi ngoài. Verifier nên là một vai riêng.",
["Kích thước model không thay phản hồi ngoài.","","Lặp nhiều mà không có tín hiệu ngoài không giúp.","Temperature không liên quan."]);

Q(1,9,"Agents-as-tools vs handoff",
"Câu hỏi kiểm tra để phân biệt agents-as-tools và handoff là gì?",
["Agent nào dùng model lớn hơn trong hai agent?","Sau lời gọi này, ai nói tiếp với user?","Hai agent có kết nối với nhau qua MCP không?","Graph có cấu hình checkpointer hay không?"],1,
"Agent gọi vẫn nói với user → agents-as-tools. Agent được gọi lái phần còn lại → handoff. Với model, cả hai chỉ là một tool call.",
["Kích thước model không phân biệt hai kiểu.","","MCP là giao thức tool.","Checkpointer liên quan memory/resume."]);

Q(1,9,"Ghi đè state",
"Hai worker LangGraph ghi song song vào cùng một key không có reducer trong một bước. Chuyện gì xảy ra?",
["Giá trị ghi sau đè giá trị trước một cách im lặng","LangGraph ném lỗi chỉ nhận một giá trị/bước","Hai giá trị tự động được gộp thành một list","Worker thứ hai bị bỏ qua và không ghi được"],1,
"Ghi song song cùng key trong một bước bị lỗi; muốn gộp phải khai reducer. Ghi tuần tự không reducer mới là ghi đè im lặng.",
["Ghi đè im lặng xảy ra khi ghi tuần tự, không phải song song.","","Cần khai reducer mới gộp được.","Không có cơ chế bỏ qua tự động."]);

Q(1,9,"Anti-pattern supervisor",
"Supervisor vừa plan, vừa retrieve, vừa tổng hợp, vừa monitor. Đây là anti-pattern nào?",
["Chatty Workers","God Supervisor","Implicit State","No Fallback"],1,
"God Supervisor thực chất là single-agent đổi tên. Supervisor giữ decision flow, worker giữ domain skill.",
["Chatty là worker hỏi ngược liên tục.","","Implicit state là state qua biến toàn cục.","No fallback là worker lỗi không trả gì."]);

Q(1,9,"MCP",
"MCP kết nối giữa những gì?",
["Agent với agent","Agent với tool/resource","User với agent qua giao diện chat","Model với GPU"],1,
"MCP là ổ cắm chuẩn (JSON-RPC) giữa agent và tool, resource, prompt: chiều dọc. A2A mới là agent với agent.",
["Đó là A2A.","","User tương tác qua UI, không qua MCP.","Không liên quan phần cứng."]);

Q(1,9,"Ba primitive MCP",
"Trong MCP, primitive nào tương ứng thao tác đọc kiểu GET (file, schema, config)?",
["Tools (hành động có side effect)","Resources","Prompts (mẫu prompt dùng lại)","Sampling (gọi ngược model của client)"],1,
"Tools là hành động kiểu POST; Resources là đọc kiểu GET; Prompts là prompt dùng lại.",
["Tools là hành động có side effect.","","Prompts là mẫu prompt.","Không thuộc ba primitive bài nêu."]);

Q(1,9,"Bảo mật MCP",
"Tool hiền lúc duyệt nhưng đổi mô tả độc hại sau đó. Đây là kiểu tấn công nào?",
["Tool poisoning","Shadowing","Rug-pull","DNS rebinding"],2,
"Rug-pull: đổi mô tả sau khi được duyệt. Phòng: pin phiên bản, đọc mô tả như đọc code, cấp quyền theo worker.",
["Poisoning là mô tả chứa chỉ thị độc ngay từ đầu.","Shadowing là server độc mô tả cách tool khác phải hành xử.","","DNS rebinding liên quan validate Origin của HTTP transport."]);

Q(1,9,"A2A Agent Card",
"Agent Card của A2A được đặt ở đường dẫn quy ước nào?",
["/mcp trên cùng domain của agent","/.well-known/agent-card.json","/healthz của service agent","/api/v1/agents/card do vendor đặt"],1,
"Agent Card là JSON metadata (identity, capabilities, skills, endpoint, auth) tại /.well-known/agent-card.json.",
["/mcp là endpoint MCP.","","/healthz là health check.","Không phải quy ước của A2A."]);

Q(1,9,"LangGraph HITL",
"Idiom HITL trong LangGraph 2026 theo Day 9?",
["interrupt_before cấu hình tĩnh khi compile graph","interrupt() + Command(resume) + checkpointer","Thêm time.sleep() trong node để chờ người","Gọi input() trong node để hỏi trực tiếp"],1,
"interrupt() động + Command(resume) cần checkpointer. Node chạy lại từ đầu khi resume nên side effect phải idempotent.",
["interrupt_before chỉ còn để debug.","","Không có cơ chế resume.","Chặn tiến trình, không lưu state."]);

Q(1,9,"Chi phí multi-agent",
"Theo dữ liệu Anthropic ở Day 9, phần lớn variance hiệu năng (BrowseComp) giải thích bằng gì?",
["Số agent","Lượng token tiêu thụ","Kiến trúc supervisor","Ngôn ngữ prompt"],1,
"~80% variance giải thích chỉ bằng token usage: phần lớn 'multi-agent thắng' là do tiêu nhiều compute hơn.",
["Số agent không phải yếu tố chính.","","Kiến trúc kém quan trọng hơn hình dạng bài toán.","Không liên quan."]);

// ---------- Day 10: Data Pipeline & Observability ----------
Q(1,10,"Silent failure",
"Câu chốt của Day 10 về khác biệt giữa BI và RAG khi data cũ là gì?",
["Cả hai đều báo lỗi rõ ràng khi data cũ","BI lộ timestamp cũ; RAG ra câu tự tin mà sai","RAG luôn chậm hơn BI khi dữ liệu thay đổi","BI không dùng được cho agent nên không so sánh"],1,
"BI fail loudly (dashboard vỡ, ai cũng thấy); RAG fail silently. Thời đại agent lấy đi chính con người đang nhìn dashboard.",
["RAG không báo lỗi.","","Không liên quan tốc độ.","Không phải luận điểm của bài."]);

Q(1,10,"ETL vs ELT",
"Vì sao đa số AI team 2026 chọn ELT?",
["Data phải sạch trước khi lưu vì compliance","Giữ bản gốc để transform lại khi đổi chunking","ELT không cần warehouse hay lakehouse nào","ELT nhanh hơn streaming cho dữ liệu real-time"],1,
"Load thô rồi transform trong warehouse; đổi chunking hay embedding chỉ cần transform lại.",
["Đó là lý do chọn ETL.","","ELT transform ngay trong warehouse.","Batch/streaming là trục khác."]);

Q(1,10,"CDC",
"So với CDC query-based (poll updated_at), CDC log-based có ưu điểm gì?",
["Dễ triển khai hơn và không cần quyền đọc log","Không tải lên nguồn, thấy cả thay đổi trung gian","Không cần Kafka hay hạ tầng streaming nào","Chỉ thấy trạng thái cuối nên gọn hơn"],1,
"Log-based đọc WAL/binlog (Debezium): thấy cả insert rồi delete giữa hai lần poll; query-based bỏ sót và tạo tải lặp.",
["Đó là ưu điểm của query-based.","","Debezium thường chạy trên Kafka Connect.","Đó là nhược điểm của full scan/poll."]);

Q(1,10,"Watermark",
"Dữ liệu đến trễ có timestamp cũ hơn watermark. Rủi ro gì?",
["Bị ingest hai lần vào index","Có thể bị bỏ sót vĩnh viễn","Làm tăng chi phí lưu trữ","Gây lỗi schema khi nạp"],1,
"Watermark phân ranh đã/chưa ingest; late-arriving data có thể không bao giờ được nạp, agent trả lời theo chính sách cũ.",
["Rủi ro là thiếu, không phải trùng.","","Không phải vấn đề chi phí.","Không liên quan schema."]);

Q(1,10,"Unicode",
"Vì sao chuẩn hoá Unicode về NFC trước khi embed?",
["Để giảm số chiều của vector embedding","'á' NFC và NFD khác byte, dedup hỏng im lặng","Vì văn bản NFD không hiển thị được trên web","Để mã hoá các trường PII trước khi lưu"],1,
"NFC: 'á' là 1 ký tự; NFD: 'a' + dấu sắc. macOS hay lưu NFD, web NFC; so byte thì không khớp.",
["Không liên quan số chiều.","","NFD vẫn hiển thị bình thường.","Không phải mã hoá."]);

Q(1,10,"PII",
"Theo Day 10, mask/redact PII nên đặt ở đâu?",
["Trong system prompt, dặn model không nhắc PII","Ở bước transform, trước khi embed","Trong output guardrail sau khi model trả lời","Không cần nếu chỉ lưu dạng vector"],1,
"PII lọt vào embedding thì agent có thể trích nguyên văn; mask là bước transform, không phải việc của prompt sau này.",
["Prompt không phải ranh giới bảo mật.","","Output guardrail là lớp sau, không thay transform.","Vector có thể bị đảo ngược."]);

Q(1,10,"Medallion",
"Agent và pipeline nạp vector store nên đọc dữ liệu từ tầng nào?",
["Bronze","Silver","Gold","Trực tiếp từ nguồn"],2,
"Bronze là thô (audit/replay), Silver làm sạch, Gold sẵn sàng phục vụ cho BI và vector store.",
["Bronze chưa làm sạch.","Silver còn là tầng trung gian.","","Đọc nguồn trực tiếp bỏ qua kiểm tra chất lượng."]);

Q(1,10,"Re-embed",
"Trường hợp nào bắt buộc re-embed toàn corpus?",
["Thêm vài document mới","Sửa chính tả một document","Đổi embedding model","Thêm metadata"],2,
"Đổi model tạo vector space mới (hoặc đổi chunking làm đổi ranh giới). Thêm/sửa document chỉ cần upsert.",
["Upsert là đủ.","Upsert là đủ.","","Metadata không đổi vector."]);

Q(1,10,"6 dimensions vs 5 pillars",
"Khác biệt giữa 6 dimensions (DAMA) và 5 pillars (Monte Carlo)?",
["Hai tên gọi của cùng một bộ tiêu chí chất lượng","Dimensions chấm một thời điểm; pillars theo thời gian","Pillars là chuẩn quốc tế, còn dimensions là của một vendor","Dimensions chỉ dùng cho BI, không áp dụng được cho RAG"],1,
"6 dimensions là taxonomy vendor-neutral (completeness, accuracy...). 5 pillars (freshness, quality, volume, schema, lineage) là framework của một vendor.",
["Hai khung khác nhau.","","Ngược lại: pillars là của vendor.","Dùng được cho cả RAG."]);

Q(1,10,"Fail-closed vs fail-open",
"Pipeline dữ liệu pháp lý phát hiện bất thường. Nên chọn gì?",
["Fail-open: log lại rồi vẫn cập nhật index","Fail-closed: dừng, serve data cũ nhưng đúng","Xoá toàn bộ index để tránh trả lời sai","Tắt gate tạm thời cho pipeline chạy tiếp"],1,
"Fail-closed khi trả lời cũ rẻ hơn trả lời sai (pháp lý, tài chính). Fail-open khi data cũ hại hơn data đáng ngờ (giá, tồn kho).",
["Serve data có thể sai là rủi ro lớn cho pháp lý.","","Xoá index làm mất dịch vụ.","Tắt gate là biến lỗi thành im lặng."]);

Q(1,10,"Ghost vectors",
"Xoá vector trong ChromaDB/FAISS trả về thành công. Vì sao chưa chắc dữ liệu đã biến mất?",
["Vì CDN vẫn còn cache bản cũ của vector","Thường chỉ soft-delete, byte còn trên đĩa","Vì embedding đã được lưu vào trọng số model","Vì GDPR không áp dụng cho dữ liệu vector"],1,
"Ghost vectors: byte chưa xoá trên đĩa có thể trích bằng get_items() và bị đảo ngược (25,5% tên người). Erasure phải kiểm chứng được.",
["Không liên quan CDN.","","Model không lưu embedding của bạn.","GDPR Art. 17 vẫn áp dụng."]);

Q(1,10,"Schema drift",
"Loại thay đổi schema nào nguy hiểm nhất vì hoàn toàn im lặng?",
["Xoá cột","Đổi tên cột","Thêm cột","Đổi kiểu cột"],2,
"Xoá/đổi tên cột gây lỗi rõ (loud); thêm cột không vi phạm assertion nào viết sẵn nên đi qua im lặng.",
["Xoá cột làm query lỗi ngay.","Đổi tên cột cũng gây lỗi rõ.","","Đổi kiểu tuỳ trường hợp, thường bị phát hiện."]);

Q(1,10,"Anomaly detection",
"Lượng chunk mỗi ngày thấp vào Chủ nhật. Phương pháp nào phân biệt 'thấp vì Chủ nhật' với 'thấp vì hỏng'?",
["Z-score trên số chunk mỗi ngày","MAD (median absolute deviation)","STL","Ngưỡng cố định đặt theo trung bình tuần"],2,
"STL tách trend + seasonal + residual nên tính đến mùa vụ. Z-score dính masking, MAD robust nhưng vẫn dính seasonality.",
["Z-score giả định stationarity.","MAD vẫn không xử lý seasonality.","","Ngưỡng cố định báo động giả mỗi Chủ nhật."]);

Q(1,10,"Freshness SLI",
"Freshness SLI 'không update N giờ' KHÔNG đo được điều gì?",
["Độ trễ của job so với lịch chạy","Tính đúng: có thể đúng giờ mà rỗng","Thời điểm cập nhật gần nhất của bảng","Pipeline có chạy theo lịch hay không"],1,
"Freshness không validate correctness; còn giả định nhịp đều và dễ báo giả do clock-skew, timezone.",
["Freshness đo đúng điều này.","","Freshness đo đúng điều này.","Freshness phản ánh phần nào việc này."]);

// ---------- Day 11: Guardrails & AI Safety ----------
Q(1,11,"Bài học từ sự cố",
"Bài học chung từ các vụ DPD chatbot, Air Canada, Car Dealer Bot là gì?",
["Model AI còn quá yếu","Thiếu guardrails kiểm soát output","Thiếu dữ liệu train cho từng lĩnh vực","Dùng sai ngôn ngữ"],1,
"Không vụ nào fail vì AI kém; tất cả fail vì thiếu lớp kiểm soát output.",
["Bài nhấn mạnh không phải do AI kém.","","Không phải vấn đề dữ liệu train.","Không liên quan ngôn ngữ."]);

Q(1,11,"Injection vs jailbreak",
"Khác biệt giữa prompt injection và jailbreak?",
["Hai tên gọi khác nhau của cùng một kiểu tấn công","Injection nhắm chỉ dẫn; jailbreak nhắm safety filter","Jailbreak chỉ xảy ra qua tài liệu được retrieve","Injection chỉ xảy ra với chatbot, không với agent"],1,
"Injection làm agent bỏ qua chỉ dẫn gốc; jailbreak vượt bộ lọc an toàn để sinh nội dung cấm.",
["Khác mục tiêu tấn công.","","Đó là indirect injection.","Agent còn dễ bị hơn chatbot."]);

Q(1,11,"Indirect injection",
"Chỉ dẫn độc ẩn trong một trang web mà agent RAG retrieve rồi làm theo. Đây là gì?",
["Direct injection","Indirect injection","Jailbreak roleplay","Rate limit abuse"],1,
"Payload đến qua kênh retrieval, vô hình với bộ lọc chỉ kiểm tra input của user.",
["Direct là user gõ trực tiếp chỉ dẫn ghi đè.","","Roleplay là kiểu jailbreak.","Không liên quan rate limit."]);

Q(1,11,"Reward hacking",
"Agent sửa unit test để test pass thay vì sửa code. Đây là gì?",
["Deceptive alignment","Reward hacking","Prompt injection","Hallucination"],1,
"Reward hacking là 'gian lận' để đạt điểm mà không giải quyết vấn đề (như Tetris tự dừng trước khi thua).",
["Deceptive alignment là giả vờ được căn chỉnh khi bị đánh giá.","","Không có kẻ tấn công nào ở đây.","Không phải bịa thông tin."]);

Q(1,11,"Input rail",
"Lợi ích riêng của input guardrail mà output guardrail không có?",
["Kiểm tra câu trả lời có dựa trên nguồn không","Chặn sớm, trước khi tốn token","Redact PII xuất hiện trong câu trả lời","Kiểm tra câu trả lời đúng format JSON"],1,
"Input rail (validation, injection detection, topic filter, rate limit) chặn sớm nên tiết kiệm chi phí.",
["Grounding check là output rail.","","Redact PII output là output rail.","Format validation là output rail."]);

Q(1,11,"Grounding check",
"Output guardrail nào là cầu nối giữa RAG pipeline và trust layer?",
["Content filter","Format validation","Grounding check","Rate limiting"],2,
"Grounding check xem output có dựa trên retrieved context, flag claim không có nguồn, yêu cầu citation.",
["Content filter lọc toxicity, PII.","Format kiểm schema.","","Rate limiting là input rail."]);

Q(1,11,"Defense in depth",
"Chỉ có output rails mà không có input rails thì hậu quả là gì?",
["Output vẫn có thể toxic","Tốn token cho input xấu, tăng chi phí","Injection sẽ không bao giờ bị phát hiện","Không có hậu quả"],1,
"Mỗi lớp bảo vệ một thứ: thiếu input rails thì input xấu vẫn đi tới LLM, tốn tiền trước khi bị chặn.",
["Đó là hậu quả khi chỉ có input rails.","","Output rails vẫn có thể bắt được phần nào.","Có hậu quả về chi phí."]);

Q(1,11,"HITL theo rủi ro",
"Agent sắp gửi email cho khách (không hoàn tác được). Mô hình HITL phù hợp?",
["Human-on-the-loop: agent gửi, người xem lại sau","Human-in-the-loop: duyệt trước khi gửi","Không cần người vì agent đã có guardrails","Human-as-tiebreaker cho mọi request của agent"],1,
"Hành động không hoàn tác như gửi email, xoá data, publish cần duyệt trước. On-the-loop chỉ cho việc rủi ro thấp, đảo ngược được.",
["Review sau thì email đã gửi.","","Rủi ro không hoàn tác cần người.","Áp cho mọi request tạo bottleneck."]);

Q(1,11,"Anti-pattern HITL",
"Mọi request đều phải được người duyệt. Anti-pattern gì?",
["Rubber stamp","Bottleneck","Không feedback loop","Over-autonomy"],1,
"Duyệt tất cả gây nghẽn; review không đủ context mới dẫn tới rubber stamp.",
["Rubber stamp là duyệt không có context.","","Không feedback là agent không cải thiện.","Over-autonomy là ngược lại."]);

Q(1,11,"Red teaming",
"Red teaming trong Day 11 nên được vận hành như thế nào?",
["Chạy một lần thật kỹ trước khi launch","Như unit test: chạy mỗi release","Chỉ chạy khi đã có sự cố xảy ra","Dựa vào user báo lỗi sau khi phát hành"],1,
"Safety suite chạy mỗi release; agent không pass safety test thì không deploy; library cập nhật liên tục.",
["Một lần không theo kịp tấn công mới.","","Sau sự cố là quá muộn.","Đó là kênh phát hiện, không phải red teaming."]);

Q(1,11,"Confidence display",
"Trust UX hiển thị '80% chắc chắn'. Yêu cầu quan trọng nhất?",
["Luôn hiển thị số cao","Phải đúng khoảng 80% thời gian","Chỉ hiển thị cho admin, ẩn với người dùng","Dùng màu đỏ"],1,
"Confidence phải được hiệu chỉnh; badge High/Medium/Low kèm giải thích để đặt đúng kỳ vọng.",
["Số đẹp mà sai làm mất niềm tin.","","Mục đích là cho user.","Màu sắc không phải yêu cầu cốt lõi."]);

Q(1,11,"AI Control",
"Cơ chế AI Control nào giới hạn agent chỉ được dùng một số tool cụ thể?",
["Kill switch để dừng ngay khi bất thường","Scope limitation","Rate limiting số action theo thời gian","Audit trail ghi lại mọi quyết định"],1,
"Scope limitation giới hạn phạm vi tool; kill switch dừng ngay; rate limiting giới hạn số action; audit trail ghi quyết định.",
["Kill switch là dừng khẩn cấp.","","Rate limiting giới hạn tần suất.","Audit trail là ghi log."]);

Q(1,11,"Kết hợp kỹ thuật",
"Chiến lược guardrail nào được Day 11 khuyến nghị?",
["Chỉ dùng regex vì nhanh và rẻ nhất","Chỉ dùng LLM-as-judge vì hiểu ngữ cảnh","Kết hợp regex + framework + LLM judge","Chỉ dùng system prompt có quy tắc an toàn"],2,
"Defense in depth: regex nhanh rẻ cho pattern cơ bản, framework (NeMo, Guardrails AI) và LLM judge cho rule domain.",
["Regex bỏ sót biến thể.","LLM judge tốn và có thể bị lừa.","","System prompt không phải ranh giới đủ."]);

// ---------- Day 12: Deployment ----------
Q(1,12,"Agent khác web app",
"Ba đặc điểm khiến agent phá vỡ web infra truyền thống?",
["Nhẹ, nhanh, stateless","Long-running, stateful, costly","Chỉ chạy trên GPU, cần Kubernetes, cần Rust","Không cần network"],1,
"Vòng suy luận 10–60s+ phá timeout gateway; có memory mâu thuẫn stateless; mỗi call gửi lại history nên chi phí tăng siêu tuyến tính.",
["Ngược với thực tế agent.","","Không phải đặc điểm cốt lõi.","Agent cần gọi API ngoài."]);

Q(1,12,"Base image",
"Vì sao tránh python:alpine cho container ML theo Day 12?",
["Image Alpine quá lớn cho môi trường production","musl libc: wheel phải compile, rất chậm","Alpine không có shell nên không debug được","Alpine không hỗ trợ chạy với user non-root"],1,
"slim (glibc, manylinux wheels) build ~30s; Alpine có thể mất 26 phút. Distroless gọn nhưng không có shell.",
["Alpine là image nhỏ nhất.","","Thiếu shell là đặc điểm của distroless.","Alpine chạy non-root được."]);

Q(1,12,"Timeout gateway",
"Agent cần 45 giây để trả lời qua AWS API Gateway mặc định. Chuyện gì xảy ra?",
["Thành công bình thường","504 do timeout mặc định 29 giây","Gateway tự chuyển request sang hàng đợi async","Gateway tự stream"],1,
"API Gateway mặc định 29s → 504. Cách xử lý: streaming SSE, async job (submit-and-poll), hoặc platform timeout dài hơn.",
["Vượt timeout.","","Phải tự thiết kế async.","Gateway không tự stream."]);

Q(1,12,"SSE và nginx",
"Token streaming qua SSE bị gom lại, user nhận một cục cuối cùng. Nguyên nhân thường gặp?",
["Model không hỗ trợ streaming token","nginx proxy_buffering đang bật","Thiếu WebSocket giữa client và server","Thiếu cấu hình CORS cho domain frontend"],1,
"Tắt proxy_buffering hoặc gửi header X-Accel-Buffering: no; agent im lâu thì cần heartbeat ~15s.",
["Model có stream nhưng proxy gom lại.","","SSE không cần WebSocket.","CORS không ảnh hưởng buffering."]);

Q(1,12,"Externalize state",
"Agent có memory chạy nhiều instance sau load balancer. Cách đúng theo 12-factor?",
["Bật sticky session","Đưa state ra Redis/Postgres","Lưu state trong biến toàn cục của process","Chỉ chạy một instance"],1,
"Externalize state để instance nào cũng phục vụ được; sticky session chỉ best-effort và bị factor VI cấm.",
["Sticky session không bền.","","Biến toàn cục mất khi instance chết.","Không scale được."]);

Q(1,12,"API key phía client",
"Biến môi trường NEXT_PUBLIC_OPENAI_KEY dùng trong frontend. Vấn đề gì?",
["Không có vấn đề vì key nằm trong biến môi trường","Key bị nhúng vào JS bundle công khai","Chỉ lộ ở môi trường dev, production an toàn","Next.js tự mã hoá biến NEXT_PUBLIC khi build"],1,
"Agent dùng model frontier vẫn cần backend proxy + rate limit; chỉ on-device/in-browser model mới thật sự keyless.",
["Là lỗ hổng nghiêm trọng.","","Lộ cả ở production.","Không có mã hoá nào."]);

Q(1,12,"Chọn platform",
"Theo Day 12, nên chọn platform cho agent theo trục nào trước?",
["Giá rẻ nhất cho mỗi giờ chạy container","Timeout / thời gian chạy tối đa","Số region mà nhà cung cấp hỗ trợ","Giao diện quản trị có dễ dùng không"],1,
"Agent long-running nên timeout cap là ràng buộc thật (Lambda 900s, API Gateway 29s); 'cold start 5–15s' đã lỗi thời.",
["Giá rẻ mà timeout ngắn thì không chạy được.","","Region là trục phụ.","Không phải tiêu chí kỹ thuật."]);

Q(1,12,"Managed runtime",
"Agent trên AWS Bedrock AgentCore chờ human approval 20 phút. Rủi ro?",
["Không có rủi ro vì session tối đa 8 giờ","Session chết sau 15 phút idle, mất state","Bị tính tiền gấp đôi trong lúc chờ duyệt","Bị chặn bởi CORS khi người duyệt quay lại"],1,
"AgentCore tối đa 8 giờ/session nhưng chết khi idle 15 phút; idle timeout là bẫy cả chi phí lẫn đúng-đắn.",
["Có rủi ro mất session.","","AgentCore chỉ tính compute active.","Không liên quan CORS."]);

Q(1,12,"Remote MCP",
"Remote MCP server nhận token không được cấp riêng cho nó rồi chuyển tiếp. Đây là bẫy gì?",
["Confused deputy ở proxy OAuth","Token passthrough","DNS rebinding qua header Origin","Rug-pull khi đổi mô tả tool"],1,
"Token passthrough vô hiệu hoá rate limit và audit phía sau; server MUST NOT nhận token không cấp cho nó.",
["Confused deputy là proxy không giữ registry client_id theo user.","","DNS rebinding liên quan Origin.","Rug-pull là đổi mô tả tool."]);

Q(1,12,"Gateway",
"Thứ tự kiểm tra hợp lý ở API gateway trước khi tới agent?",
["Agent → auth → rate limit → budget","Auth → rate limit → budget → agent","Budget → agent → auth → rate limit","Rate limit → agent → auth → budget"],1,
"Reject sớm là tiết kiệm token và tiền; pre-call admission control check budget trước khi gọi LLM.",
["Gọi agent trước là đã tốn tiền.","","Auth phải đứng đầu.","Agent không đứng trước auth."]);

Q(1,12,"Spend alert",
"Vì sao chỉ dựa vào spend alert của vendor là chưa đủ?",
["Vì alert của vendor tính phí rất đắt","Vì alert chỉ thông báo, không chặn","Vì alert không gửi được qua email","Vì chỉ AWS mới có tính năng spend alert"],1,
"Ví dụ $47.000 trong 11 ngày do 4 agent retry vô hạn: có log nhưng không hard limit. Admission control phía bạn là lớp duy nhất bạn kiểm soát.",
["Alert thường miễn phí.","","Có kênh thông báo.","Vendor nào cũng có alert."]);

Q(1,12,"Autoscale",
"Agent I/O-bound: instance đầy request đang chờ LLM nhưng CPU thấp. Nên autoscale theo gì?",
["CPU utilization trung bình","Concurrency / queue depth","RAM đang sử dụng","Số dòng log mỗi phút"],1,
"Scale theo concurrency (Knative, KEDA num_requests_running); CPU thấp không phản ánh tải thật.",
["CPU thấp nên sẽ không scale.","","RAM không phản ánh request đang chờ.","Không liên quan."]);

Q(1,12,"Probes",
"Cấu hình nhầm readiness thành liveness gây hậu quả gì?",
["Không có hậu quả vì hai probe gần giống nhau","Restart loop vô ích khi dependency chậm","Container không bao giờ nhận được traffic","Mất toàn bộ log của các lần chạy trước"],1,
"Readiness fail → gỡ khỏi LB, không restart; liveness fail → restart. Nhầm thì container bị restart liên tục.",
["Có hậu quả nghiêm trọng.","","Đó là tác dụng đúng của readiness.","Không liên quan log."]);

Q(1,12,"Prompt cache vs semantic cache",
"Khác biệt giữa prompt cache và semantic cache?",
["Giống nhau, chỉ khác nhà cung cấp","Prompt cache khớp prefix từng byte; semantic cache khớp ý nghĩa, có thể trả câu cũ","Semantic cache luôn rẻ hơn và an toàn hơn prompt cache","Prompt cache bắt buộc phải tự dựng Redis để lưu"],1,
"Prompt cache đọc ~0,1× giá với prefix trùng chính xác; semantic cache mạnh hơn nhưng rủi ro trả lời cũ.",
["Hai cơ chế khác nhau.","","Không phải điểm khác cốt lõi.","Prompt cache do provider làm."]);

// ---------- Day 13: Monitoring & Observability ----------
Q(1,13,"Monitoring vs observability",
"Câu hỏi 'vì sao user X dùng feature Y với model Z tháng W có latency cao' cần gì?",
["Monitoring","Observability","Chỉ cần alert","Chỉ cần dashboard"],1,
"Monitoring trả lời câu hỏi định sẵn (known-unknowns); observability cho phép hỏi câu mới (unknown-unknowns).",
["Monitoring chỉ đo metric định trước.","","Alert không trả lời 'vì sao'.","Dashboard cố định không đủ."]);

Q(1,13,"3 pillars",
"Pillar nào dùng để khoanh vùng span nào gây chậm trong một request?",
["Metrics","Logs","Traces","Profiles"],2,
"Metrics phát hiện, traces khoanh vùng (span vector_search 6,5s), logs tìm root cause.",
["Metrics cho biết có vấn đề, không chỉ chỗ.","Logs tìm nguyên nhân chi tiết.","","Profiles đo CPU/memory theo dòng code."]);

Q(1,13,"Cardinality",
"Label nào KHÔNG nên dùng cho metric?",
["model","env","user_id","feature"],2,
"user_id tạo cardinality khổng lồ (ví dụ 8×10⁷ series). High-cardinality đưa vào logs/traces.",
["model là label hợp lý.","env là label hợp lý.","","feature là label hợp lý."]);

Q(1,13,"Error budget",
"SLO 99,5% trong 30 ngày cho error budget khoảng bao nhiêu?",
["43 phút","3,6 giờ","7,2 giờ","14,4 phút"],1,
"0,5% × 720 giờ = 3,6 giờ/tháng. 99% là 7,2 giờ; 99,9% là 43,2 phút.",
["Đó là 99,9%.","","Đó là 99%.","Đó là 99% theo ngày."]);

Q(1,13,"SLO và SLA",
"Quan hệ đúng giữa SLO và SLA?",
["SLO lỏng hơn SLA","SLO chặt hơn SLA để có buffer","SLA là mục tiêu nội bộ, SLO là cam kết với khách","Hai cái luôn bằng nhau"],1,
"SLO là mục tiêu nội bộ, SLA là cam kết với khách có phạt; SLO chặt hơn để có khoảng đệm.",
["Ngược lại.","","Cần có buffer.","SLA là cam kết bên ngoài."]);

Q(1,13,"Percentile",
"P99 = 5s, user chat 10 lượt. Xác suất gặp ít nhất một lần chậm hơn 5s?",
["1%","~9,6%","10% chính xác","50%"],1,
"1 − 0,99¹⁰ ≈ 9,6%. Trung bình che mất long tail; 1.000 user/ngày → ~96 người bức xúc.",
["Đó là xác suất một lượt.","","Gần nhưng không đúng công thức.","Quá cao."]);

Q(1,13,"TTFT",
"Với giao diện streaming, user cảm nhận tốc độ chủ yếu qua chỉ số nào?",
["Tổng thời gian từ lúc gửi tới khi xong","TTFT (thời gian tới token đầu)","Tổng số token mà model sinh ra","Mức CPU của server khi xử lý request"],1,
"TTFT 500ms vẫn thấy nhanh dù tổng 8s; tối ưu TTFT trước tổng thời gian.",
["Tổng thời gian ít quan trọng hơn khi có stream.","","Số token không phải cảm nhận.","CPU không phải trải nghiệm user."]);

Q(1,13,"Implicit feedback",
"Theo Day 13, tín hiệu nào dự báo churn tốt nhất?",
["Tỉ lệ thumbs down trên mỗi câu trả lời","Regenerate rate","CSAT khảo sát sau mỗi phiên chat","NPS khảo sát định kỳ hằng quý"],1,
"Explicit feedback có response rate <5%; regenerate rate là tín hiệu ngầm sớm hơn (case Replit: 12% → 23%).",
["Thumbs down quá chậm và ít.","","CSAT phản hồi thấp.","NPS thưa và trễ."]);

Q(1,13,"Structured logging",
"Thông tin nào KHÔNG nên log ở production?",
["correlation_id của request","latency_ms của từng bước","Full prompt chứa dữ liệu nhạy cảm","user_id đã được hash"],2,
"Không log PII, full prompt nhạy cảm, API key, thẻ. Log input đã sanitize, metadata, latency, tokens, cost.",
["Cần để nối trace.","Cần để đo hiệu năng.","","Hash thì an toàn để attribution."]);

Q(1,13,"Sampling",
"Chiến lược sampling nào giữ được 100% trace lỗi?",
["Head sampling","Tail sampling","Reservoir sampling","Không sampling được"],1,
"Tail quyết định sau khi trace xong nên giữ được mọi error (đắt hơn); head quyết định từ đầu nên có thể bỏ sót lỗi.",
["Head có thể bỏ sót error.","","Reservoir giữ N mẫu đều, không ưu tiên lỗi.","Có cách giữ."]);

Q(1,13,"App log vs audit log",
"Đặc điểm của audit log?",
["Giữ 30–90 ngày, có thể sample để tiết kiệm","Giữ 2–7 năm, không sample, append-only","Chỉ đội dev được xem để debug nhanh","Có thể sửa hoặc xoá khi cần dọn dữ liệu"],1,
"Audit log phục vụ compliance/forensics: không sample, append-only, truy cập hạn chế, tách từ ngày đầu.",
["Đó là app log.","","Truy cập hạn chế, không phải dev.","Không được sửa xoá."]);

Q(1,13,"Alerting",
"Alert nào đúng nguyên tắc 'page on symptoms, not causes'?",
["CPU của node vượt 80% trong 5 phút","Số lần retry nội bộ vượt 5 lần/phút","P95 latency vượt SLO","RAM của container vượt 90% liên tục"],2,
"Chỉ alert khi user thật sự bị ảnh hưởng: P95 > SLO, error rate >1%, cost/hour > budget.",
["Cause-based, dễ false positive.","Cause-based.","","Cause-based."]);

Q(1,13,"Burn rate",
"Alert page với burn rate 14,4× trên cửa sổ 5 phút / 1 giờ nghĩa là gì?",
["Hệ thống đã dùng hết error budget của tháng","Giữ mức này sẽ hết error budget tháng trong ~2 ngày","Tỉ lệ lỗi hiện tại đang ở mức 14,4% request","Chi phí token đang tăng gấp 14,4 lần bình thường"],1,
"Fire khi cả hai cửa sổ cùng vượt: short phản ứng nhanh, long lọc nhiễu (Google SRE Workbook).",
["Chưa hết, nhưng đang đốt rất nhanh.","","Không phải tỉ lệ lỗi.","Không liên quan chi phí."]);

// ---------- Day 14: AI Evaluation ----------
Q(1,14,"Application vs model eval",
"Notion AI nói 'Evals is our IP'. Loại eval nào họ muốn nói tới?",
["Model evals do nhà cung cấp model công bố","Application evals trong ngữ cảnh user thật","Benchmark chuẩn hoá như MMLU, GSM8K","Unit test truyền thống cho từng hàm code"],1,
"Application evals đo chất lượng trong ngữ cảnh sản phẩm; giỏi benchmark không đảm bảo sản phẩm đạt.",
["Model evals là của provider.","","Benchmark chuẩn hoá không phải IP riêng.","AI output là phân bố, không pass/fail đơn giản."]);

Q(1,14,"Golden outputs",
"Few-shot examples và eval set nên quan hệ thế nào?",
["Dùng chung cho nhất quán","Hai pool riêng, không chung ví dụ","Eval set nên là tập con được chọn từ few-shot","Không cần eval set"],1,
"Dùng chung thì eval đo trên chính ví dụ model đã thấy trong prompt, kết quả lạc quan giả.",
["Dùng chung là rò rỉ.","","Tập con vẫn là rò rỉ.","Eval set là bắt buộc."]);

Q(1,14,"Đọc trace",
"Khi chọn trace để đọc, vì sao cần ≥30% lấy ngẫu nhiên?",
["Để đọc trace nhanh hơn, đỡ phải chọn lọc","Nguồn duy nhất không bị lọc qua thứ đã biết","Vì 30% là đủ cỡ mẫu cho kiểm định thống kê","Vì trace lấy ngẫu nhiên hầu như luôn chứa lỗi"],1,
"Chỉ đọc case bị flag thì chỉ gặp lại đúng lỗi hệ thống vốn đã bắt được; ngẫu nhiên giúp phát hiện lỗi mới.",
["Không phải để nhanh.","","Lý do chính là tránh thiên lệch chọn mẫu.","Không phải luôn lỗi."]);

Q(1,14,"Bão hoà",
"Dừng đọc trace khi nào?",
["Sau đúng 50 trace theo quy định của team","10–20 trace liên tiếp không có nhóm lỗi mới","Khi hết khung giờ đã đặt lịch cho việc đọc","Ngay khi đã tìm thấy lỗi nghiêm trọng đầu tiên"],1,
"Thường ~100 trace, 2–3 giờ; một người đọc liền mạch để nhóm lỗi nhất quán.",
["Không có con số cố định.","","Không phải tiêu chí.","Quá sớm."]);

Q(1,14,"Ghi chú trace",
"Trace SC-042 lỗi ở bước truy xuất dẫn tới câu trả lời sai. Ghi lỗi ở đâu?",
["Ở câu trả lời cuối","Ở bước truy xuất (lỗi gốc)","Ở cả hai bước để không bỏ sót lỗi nào","Không ghi"],1,
"Chỉ ghi lỗi gốc xảy ra đầu tiên; ghi cả hậu quả làm đếm trùng và sai ưu tiên sửa.",
["Đó là hậu quả.","","Đếm trùng.","Phải ghi."]);

Q(1,14,"Ưu tiên sửa",
"missing_order_lookup: 18 lần, nặng 2. premature_refund_commit: 5 lần, nặng 5. Theo tần suất × mức nặng, sửa cái nào trước?",
["premature_refund_commit (25)","missing_order_lookup (36)","Bằng nhau","Không tính được"],1,
"18 × 2 = 36 > 5 × 5 = 25. Trọng số mức nặng là quyết định sản phẩm, phải ghi ra trước.",
["25 < 36.","","Không bằng nhau.","Tính được."]);

Q(1,14,"Coverage",
"Thuộc tính 'giọng lịch sự / cộc lốc' có phải dimension của grid coverage không?",
["Có, vì giọng điệu ảnh hưởng đến tone câu trả lời","Không, hành vi đúng không đổi: chỉ là paraphrase","Có, mọi thuộc tính của input đều là dimension","Chỉ là dimension khi bộ test có cả tiếng Anh"],1,
"Phép thử: đổi giá trị thì hành vi đúng có đổi không? Không → paraphrase, để LLM sinh biến thể. 'Thiếu mã đơn' mới là dimension.",
["Tone không đổi hành vi xử lý đúng.","","Không phải lúc nào.","Không liên quan ngôn ngữ."]);

Q(1,14,"Ba loại gap",
"Email agent soạn không có subject vì prompt chưa hề yêu cầu. Nên làm gì?",
["Viết automated eval để theo dõi lỗi này","Sửa system prompt","Engineering fix: thêm tool tạo subject","Fine-tune model để luôn viết subject"],1,
"Specification gap: prompt chưa giao việc thì sửa prompt, chưa cần eval. Generalization gap (lúc được lúc không) mới cần eval.",
["Chưa cần eval.","","Không thiếu capability.","Quá tốn kém cho lỗi đặc tả."]);

Q(1,14,"Referent rule",
"Tiêu chí 'output đúng JSON schema có 3 field' nên chấm bằng gì?",
["LLM judge với rubric chấm điểm 1–10","Code-based eval","Chuyên gia domain đọc từng output","User feedback sau khi phát hành"],1,
"Referent rõ (rule, schema) → code, người kiểm ~10%. Sắc thái → LLM judge; không referent → người quyết.",
["Dùng judge cho schema là lãng phí và kém tin cậy hơn code.","","Không cần chuyên gia cho schema.","Feedback quá chậm."]);

Q(1,14,"Prompt LLM judge",
"Nguyên tắc nào đúng khi viết prompt cho LLM judge?",
["Cho điểm 1–10 trên nhiều tiêu chí cùng lúc","Một tiêu chí, Pass/Fail, reasoning trước verdict","Dùng cùng model với agent để hiểu ngữ cảnh","Không cần ví dụ để judge tự khách quan"],1,
"Một tiêu chí, nhị phân, có near-miss, cùng ngữ cảnh người chấm thấy, reasoning trước, judge khác họ model.",
["Điểm 1–10 khó calibrate.","","Chấm người nhà dễ cho qua lỗi hơn.","Near-miss là đòn mạnh nhất."]);

Q(1,14,"TPR và TNR",
"Judge có TPR 95% nhưng TNR 25%. Ý nghĩa?",
["Judge rất tốt vì TPR cao","Judge dễ dãi, ít bắt được output lỗi","Judge quá khắt khe, đánh trượt nhiều output tốt","Không kết luận được nếu thiếu accuracy tổng"],1,
"TNR thấp nghĩa là bỏ lọt lỗi; sửa bằng siết định nghĩa Fail và thêm near-miss.",
["TNR 25% là rất kém.","","Khắt khe thì TPR thấp.","Đọc được qua confusion matrix."]);

Q(1,14,"Kiểm bài thi",
"τ-bench airline: agent trả lời rỗng đạt 38%, hơn agent GPT-4o (35%). Bài học?",
["Agent trả lời rỗng thực sự là chiến lược tốt nhất","Phải kiểm validity của bài thi trước khi tin điểm","GPT-4o kém hơn một agent không làm gì cả","Benchmark công khai luôn chấm điểm chính xác"],1,
"Bài thi coi 'không đổi gì' là thành công. Chạy trước các agent thật đơn giản: rỗng, luôn chọn nhãn phổ biến, luôn chuyển người.",
["Đó là lỗi chấm điểm.","","Không kết luận được về GPT-4o.","Benchmark có lỗi."]);
