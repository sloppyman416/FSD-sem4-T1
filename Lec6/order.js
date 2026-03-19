var EventEmitter = require("events")
const ee = new EventEmitter()

const list = { "id": 101, "email": "hello@gmail.com", "customer": "john doe" }

listener1=(order) => { console.log(`Email sent to ${order.email}. your order #${order.id} is confirmed`) }
ee.on("order-placed", listener1)

ee.on("order-placed", (order) => { console.log(`Database Updated : order #${order.id} saved for ${order.customer}`) })

function place_order(order) {
    console.log("your order is being place")
    ee.emit("order-placed",order)
}

place_order(list)

console.log(ee.listenerCount("order-placed"))
ee.removeListener("order-placed",listener1)
console.log(ee.listenerCount("order-placed"))