const fs=require('fs');const dir=__dirname+'/../q/';
const core=[],uniq=[];
function C(p,d,t,vs){core.push({p,d,t,vs:vs.map(v=>({p,d,t,q:v[0],o:v[1],a:v[2],e:v[3],w:v[4]}))});}
function U(p,d,t,q,o,a,e,w){uniq.push({p,d,t,q,o,a,e,w});}
for(const f of ['p1core.js','p2core.js','p1uniq.js','p2uniq.js'])eval(fs.readFileSync(dir+f,'utf8'));
let FIX={};eval(fs.readFileSync(dir+'fix.js','utf8'));
let i=0;for(const c of core)for(const q of c.vs){const f=FIX['C'+i];if(f){if(f.length!==4)throw 'len C'+i;q.orig=q.o;q.o=f.slice();}i++;}
uniq.forEach((q,j)=>{const f=FIX['U'+j];if(f){if(f.length!==4)throw 'len U'+j;q.orig=q.o;q.o=f.slice();}});
// rebalance: where the correct answer became the shortest, bring back short original distractors for part of them
const all=[...core.flatMap(c=>c.vs),...uniq];let n=0;
all.forEach(q=>{if(!q.orig)return;const L=q.o.map(s=>s.length),c=L[q.a];
  if(!(c<Math.min(...L.filter((_,j)=>j!==q.a))))return;n++;
  const m=n%20; // 0-5 -> revert all (correct longest); 6-15 -> revert one (middle); 16-19 keep
  const wr=[0,1,2,3].filter(j=>j!==q.a);
  if(m<5){wr.forEach(j=>q.o[j]=q.orig[j]);}
  else if(m<15){const j=wr.sort((x,y)=>q.orig[x].length-q.orig[y].length)[0];if(q.orig[j].length<c)q.o[j]=q.orig[j];}
});
module.exports={core,uniq};
