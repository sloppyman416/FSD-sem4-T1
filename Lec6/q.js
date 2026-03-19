var EventEmitter = require("events")
const ee = new EventEmitter()

ee.on("connection", () => {
    console.log("Connection successful")
    ee.emit("data-received")
})
ee.on("data-received", () => {
    console.log("data received successfully")
})

ee.emit("connection")