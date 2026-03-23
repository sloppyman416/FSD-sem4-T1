var h = require("http")
var h1 = h.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': "text/html" })
    res.write("<h1>Hello</h1>")
    res.end()
})


h1.listen(3001, () => {
    console.log("your server is running on port 3001")
})

var s1 = h.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': "text/json" })
    const data = {
        "sub": "fsd",
        "topic": "node"
    }
    res.end(JSON.stringify(data))
})


s1.listen(3002, () => {
    console.log("your server is running on port 3002")
})


