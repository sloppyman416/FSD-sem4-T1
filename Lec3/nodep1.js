// const message = function () {
//     console.log("this message is shown after 4 seconds")
// }
// setTimeout(message, 4000)
// console.log("hii")
let a = 1;
let b = 2;
x = function () {
    console.log(a + b);
    a = a + 1;
    b = b + 1;

}

setInterval(x, 1000)
