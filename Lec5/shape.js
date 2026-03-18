const shape = [
    { "name": "circle", "diameter": 8 },
    { "name": "square", "side": 4 }
]

var ps=require("fs")

ps.writeFileSync("shape.txt",JSON.stringify(shape))

var perimeter=(shape[0].diameter)*3.14
console.log("perimeter of circle"+perimeter)
var peri=(shape[1].side)*4
console.log("perimeter of square"+peri)

ps.appendFileSync("shape.txt","Circle="+perimeter+"Square="+peri)