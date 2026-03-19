var EventEmitter=require("events")
const ee=new EventEmitter()

// listener should always be placed before trigger

//listener
ee.on("greet",(name)=>{console.log(`hello ${name}`)})
ee.on("greet",()=>{console.log("how are you ?")})

//trigger event
ee.emit("greet","Alice")