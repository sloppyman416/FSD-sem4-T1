var fs = require("fs")
fs.writeFile("hello/asyncABC.txt", "hello node js", (err) => {
    if (err)
        throw err
    else
        console.log("file write")
})

fs.readFile("hello/asyncABC.txt", "utf-8", (err, data) => {
    if (err)
        throw err
    else
        console.log(data)
})

fs.appendFile("hello/asyncABC.txt", "\n new line", (err) => {
    if (err)
        throw err
    else
        console.log("append write")
})

fs.rename("hello/asyncABC.txt", "hello/asyncNew.txt", (err) => {
    if (err)
        throw err
    else
        console.log("rename")
})

fs.copyFile("hello/asyncABC.txt", "asyncNew1.txt", (err) => {
    if (err)
        throw err
    else
        console.log("copy")
})

fs.umlink("asyncNew.txt", () => {
    console.log("asyncNew deleted")
})

console.log("harshraj")