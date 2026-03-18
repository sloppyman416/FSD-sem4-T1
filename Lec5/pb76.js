var fs = require("fs")

function ArrayToObject(data) {
    var obj = {}
    for (var i = 0; i < data.length; i++) {
        obj[data[i][0]] = data[i][1]
    }
    return obj
}
let result = ArrayToObject([['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']])
console.log(result)
fs.writeFileSync("ArrayToObject.txt",JSON.stringify(result))