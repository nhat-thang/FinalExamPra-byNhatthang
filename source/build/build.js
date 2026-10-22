const fs=require('fs');
const Qs=require('./load.js');
const DAYS={
"1-2":"Xác định bài toán kinh doanh cho AI","1-3":"Từ Chatbot đến Agentic Agent (ReAct)","1-4":"Prompt Engineering & Tool Calling",
"1-7":"Data Foundations: Embedding, Chunking & Vector Store","1-8":"RAG Pipeline","1-9":"Multi-Agent & Kết nối hệ thống",
"1-10":"Data Pipeline & Data Observability","1-11":"Guardrails & AI Safety","1-12":"Deployment: đưa agent lên cloud",
"1-13":"Monitoring, Logging & Observability","1-14":"AI Evaluation",
"2-1":"Mạng nơ-ron và huấn luyện","2-2":"Kiến trúc mạng & huấn luyện thực tế","2-4":"Cảm biến, hiệu chuẩn & đồng bộ thời gian",
"2-5":"Bộ lọc Kalman & hợp nhất cảm biến","2-6":"Nhận diện 3D từ đám mây điểm","2-7":"Theo vết đa đối tượng (MOT)",
"2-8":"3D từ camera, BEV & hợp nhất đa cảm biến","2-9":"Đường ống dữ liệu & gán nhãn","2-10":"VLM & VLA",
"2-11":"Dữ liệu tổng hợp, mô phỏng & quỹ đạo","2-12":"Log replay, closed loop & kịch bản"};
// seeded RNG
let seed=20261023;function rnd(){seed=(seed*1103515245+12345)%2147483648;return seed/2147483648;}
function shuf(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const exams=[[],[],[],[],[]];
for(const p of [1,2]){
  const days=[...new Set(Qs.filter(q=>q.p===p).map(q=>q.d))].sort((a,b)=>a-b);
  let seq=[];for(const d of days)seq=seq.concat(shuf(Qs.filter(q=>q.p===p&&q.d===d)));
  // deal round-robin with rotating start so remainders spread across exams
  seq.forEach((q,k)=>exams[k%5].push(q));
}
// balanced answer positions per exam
const out=exams.map((qs,ei)=>{
  qs.sort((a,b)=>a.p-b.p||a.d-b.d);
  let pos=[];while(pos.length<qs.length)pos=pos.concat(shuf([0,1,2,3]));
  return qs.map((q,i)=>{
    const wrongIdx=shuf([0,1,2,3].filter(j=>j!==q.a));
    const order=[];const tp=pos[i];let w=0;
    for(let s=0;s<4;s++)order.push(s===tp?q.a:wrongIdx[w++]);
    return {p:q.p,d:q.d,day:DAYS[q.p+'-'+q.d],t:q.t,q:q.q,o:order.map(j=>q.o[j]),w:order.map(j=>q.w[j]),a:tp,e:q.e};
  });
});
out.forEach((e,i)=>{const c={};e.forEach(q=>{const k='P'+q.p;c[k]=(c[k]||0)+1});const pc=[0,0,0,0];e.forEach(q=>pc[q.a]++);console.log('Đề',i+1,e.length,JSON.stringify(c),'pos',pc.join(','));});
fs.writeFileSync(__dirname+'/exams.json',JSON.stringify(out));
const tpl=fs.readFileSync(__dirname+'/template.html','utf8');
fs.writeFileSync(__dirname+'/../../index.html',tpl.replace('/*__DATA__*/null',JSON.stringify(out)));
console.log('written');
