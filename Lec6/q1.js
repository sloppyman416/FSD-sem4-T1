var EventEmitter = require("events")
const ee = new EventEmitter()
var fs = require("fs")

ee.on("write", () => {
    fs.writeFile("b.txt", "hello", (err) => {
        console.log("file written")
        ee.emit("append")
    })
})
ee.on("append", () => {
    fs.appendFile("b.txt", " world", (err) => {
        console.log("file append")
        ee.emit("read")
    })
})
ee.on("read", () => {
    fs.readFile("b.txt", "utf-8", (err,data) => {
        console.log(data)
    })
})

ee.emit("write")