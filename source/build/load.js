const fs=require('fs');
const Qs=[];
global.Q=(p,d,t,q,o,a,e,w)=>Qs.push({p,d,t,q,o,a,e,w});
for(const f of ['p1a','p1b','p2a','p2b']) eval(fs.readFileSync(__dirname+'/../questions/'+f+'.js','utf8'));
module.exports=Qs;
