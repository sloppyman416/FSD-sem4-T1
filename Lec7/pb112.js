var url=require('url')
var ps=require("fs")
let adr="https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest"
let q = url.parse(adr,true);
console.log(q.query.c1+"!")
console.log(q.query.c3+" "+q.query.c2)
console.log(q.hash)
ps.writeFileSync("."+q.pathname,q.query.c1+"!\n"+q.query.c3+" "+q.query.c2+"\n"+q.hash)
console.log(q.pathname)

process.noDeprecation=true