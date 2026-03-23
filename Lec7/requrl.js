var h = require("http")

var h1 = h.createServer((req, res) => {
    res.writeHead(200, { 'content-Type': "text/html" })
    if (req.url == '/') {
        res.write("<h1>This is home page</h1>")
        
    }
    if (req.url == '/about') {
        res.write("<h1>This is about page</h1>")
        
    }
    res.end()
    
})


h1.listen(5000, () => {
    console.log("your server is running on port 5000")
})