/* Write a nodeJS script to fire an event named calculate which 
calculates the total marks of 5 subjects about of 25 marks and 
displays the total marks on console as an output.The calculate event 
fires another event name percentage which takes total marks as 
argument and percentage should get displayed in console. */

var EventEmitter = require("events")
const ee = new EventEmitter()
var list = { "sub1": 25, "sub2": 25, "sub3": 25, "sub4": 25, "sub5": 25 }
ee.on("calculate", (order) => {
    let total = order.sub1 + order.sub2 + order.sub3 + order.sub4 + order.sub5;
    console.log(total)
    ee.emit("per", total)
})
ee.on("per", (total) => { console.log(`${total * 100 / 125}%`) })
ee.emit("calculate", list)