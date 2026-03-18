const student = [
    { "name": "abc", "age": 30 },
    { "name": "xyz", "age": 34 }
]

var fs = require("fs")

fs.writeFileSync("json_processing.txt", JSON.stringify(student))

var data = fs.readFileSync("json_processing.txt", "utf-8")

var b = JSON.parse(data)
console.log(b)

