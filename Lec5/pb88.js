var division1={num:[1,2,3,5,4]}
var division2={num:[0,2,3,5,4]}
var result={num:[]}

var fs=require("fs")

for(var i=0;i<division1.num.length;i++){
    result.num.push(Math.pow(division1.num[i],division2.num[i]))
}
console.log(result)
fs.writeFileSync("XYZ.txt",JSON.stringify(division1)+'\n'+JSON.stringify(division2))
fs.appendFileSync("XYZ.txt",'\n'+JSON.stringify(result))