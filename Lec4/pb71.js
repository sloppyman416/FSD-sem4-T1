var fs=require("fs")

fs.writeFileSync("t1.txt","50 -1 34 90 100 50 47")
var data=fs.readFileSync("t1.txt","utf-8")

data=data.split(" ")
data.sort((a,b)=>a-b)
console.log(data)