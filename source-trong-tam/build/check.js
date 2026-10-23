const {core,uniq}=require('./load.js');
const all=[...core.flatMap(c=>c.vs),...uniq];let bad=0;
const r={long:0,short:0,mid:0};
all.forEach((q,i)=>{if(q.o.length!==4||q.w.length!==4||q.w[q.a]!==""||q.w.some((x,j)=>j!==q.a&&!x)){bad++;console.log('BAD',i,q.q);}
 const L=q.o.map(s=>s.length),c=L[q.a],o=L.filter((_,j)=>j!==q.a);
 if(c>Math.max(...o))r.long++;else if(c<Math.min(...o))r.short++;else r.mid++;});
console.log('core',core.length,'P1',core.filter(c=>c.p===1).length,'P2',core.filter(c=>c.p===2).length,'uniq P1',uniq.filter(q=>q.p===1).length,'P2',uniq.filter(q=>q.p===2).length,'total',all.length,'bad',bad,r);
module.exports=all;
