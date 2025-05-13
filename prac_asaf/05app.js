function printname () {
    console.log("dovid");
}

function b(callback) {
    callback();
}

b(printname);

function randomnumber(){
    console.log(Math.floor(Math.random() * 10) + 1) 
}   

b(randomnumber);

function amazing(callback) {
    const num = callback(42, 128, 37, 81, 66);
    console.log("mum: " + num);
}

function sum5(x1, x2, x3, x4, x5) {
    let sum = x1 + x2 + x3 + x4 + x5;
    return sum;
}
 amazing(sum5);

 function coll(paintCallback) {
    paintCallback();
 }

 function randomColor(){
    const colors = ["red", "blue", "green", "yellow", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    console.log(colors[randomIndex]);
 }
    coll(randomColor);

function nice(paintCallBack) {
    paintCallBack("green");
}
function color(color) {
    console.log("The color is: " + color);
}
nice(color);

// function awesome(paintCallback) {
//     const paintedColor = paintCallback("red", "green", "blue");
//    decodeURIComponent.write("The color is: " + paintedColor);
// }
// function colors(color01, color02, color03) {
//     const colors = [color01, color02, color03];
//     let randomIndex = Math.floor(Math.random() * colors.length);
//     let color1 = colors[randomIndex];
//     document.body.style.backgroundColor = color1;
//     return color1;
// }
// awesome(colors);

function randomNumber( ) {
    console.log(Math.floor(Math.random() * 100) + 1)
}
//setInterval(randomNumber, 1000); // Call the function every second (1000 milliseconds)

//setInterval(randomColor, 1000); // Call the function every second (1000 milliseconds)

const randomArray = () => {
    let arr = new Array(100).fill(0).map(() => Math.floor(Math.random() * 100) + 1);
    console.log(arr);

}
setInterval(randomArray, 3000);

const time = 50000; 

function getTime(callback) {
    return callback();
}

let delay = (callback, time) => setTimeout(callback, time);

delay(printname, time); // Call the function after 2 seconds (2000 milliseconds)
setTimeout(printname, time); // Call the function after 2 seconds (2000 milliseconds)

function times2(callback, num) {
    return callback(num * 2);
}