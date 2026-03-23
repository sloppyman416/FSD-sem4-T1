let url = require('url');
let adr = 'http://localhost:8080/default.htm?year=2017&month=february#5321';
let q = url.parse(adr,true);  // by default false ; if true it returns in object format otherwise return in string

console.log(q.host);
console.log(q.port);
console.log(q.protocol);
console.log(q.pathname);
console.log(q.search);

let qdata = q.query;
console.log(qdata.month);
console.log(q.hash);

process.noDeprecation=true; // does not allow warning to come in terminal