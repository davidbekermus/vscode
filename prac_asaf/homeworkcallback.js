// //Q1
// // console.log("start")


// function currentTime() {
//     const date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log("the current time is: " + time);
// }

// currentTime();

// //Q2

// setTimeout(() => {
//     currentTime();
// }, 3000);

// //Q3

// console.log("start")
//  setInterval(() => {
//     console.log(Math.floor(Math.random() * 100) + 1);
//  }, 3000);
//  setInterval(() => {
//     console.log(Math.floor(Math.random() * 100) + 1);
//  }, 7000); setInterval(() => {
//     console.log(Math.floor(Math.random() * 100) + 1);
//  }, 5000);

 //Q4

//  const div = document.createElement("div");
//  const text = document.createTextNode("Hello World!");

//  setInterval(() => {
//     div.textContent = ("random number is: " + randomNumber());
//     document.body.appendChild(div); 
//  }, 1000);

//  function randomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
//  }

// const div = document.createElement("div");
// const inputtag = document.createElement("input");
// setInterval(() => {
//     let random = Math.floor(Math.random() * inputtag.value);

//     div.innerHTML = random;
// }
// , 1000);
// document.body.appendChild(div);
// document.body.appendChild(inputtag);

//Q7
function randomNumber() {
    const random = Math.floor(Math.random() * 100) + 1;
    console.log("random number is: " + random);
}

function getRandomNumberAfterDelay(callback) {
    setTimeout( () => {
        callback();
    },3000)
}

getRandomNumberAfterDelay(randomNumber);

