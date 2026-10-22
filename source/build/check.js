const Qs=require('./load.js');
let err=0;const R=[0,0,0,0];const byDay={};const longest=[];
Qs.forEach((x,i)=>{
 if(x.o.length!==4||x.w.length!==4||x.a<0||x.a>3||x.w[x.a]!==""||x.w.some((s,j)=>j!==x.a&&!s)){console.log('BAD',i,x.p,x.d,x.q.slice(0,50));err++;}
 const L=x.o.map(s=>s.length),c=L[x.a];const r=L.filter(v=>v<c).length;R[r]++;
 if(c===Math.max(...L)&&L.filter(v=>v===c).length===1)longest.push(i);
 const k='P'+x.p+'D'+x.d;byDay[k]=(byDay[k]||0)+1;});
const p1=Qs.filter(x=>x.p===1).length,p2=Qs.filter(x=>x.p===2).length;
console.log('total',Qs.length,'P1',p1,'P2',p2,'err',err);console.log(byDay);
console.log('rank(0=shortest)',R.join(' '),'strict-longest',longest.length,(100*longest.length/Qs.length).toFixed(1)+'%');
const pos=[0,0,0,0];Qs.forEach(x=>pos[x.a]++);console.log('pos',pos.join(' '));
if(process.argv[2])longest.forEach(i=>{const x=Qs[i];console.log(i+' | '+x.o.map((s,j)=>(j===x.a?'*':'')+s).join(' | '))});
