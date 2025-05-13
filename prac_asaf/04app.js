let arr = [5, 4, 3, 2, 1];
// Pass arguments directly to q11()

function q1(){
    const square= a => a * a;
console.log(square(2));
}


function q2(){
    const add = (a, b) => a + b;
console.log(add(2, 5));
}

function q3(){
    const isEven = a => a % 2 === 0;
    console.log(isEven(3));
    console.log(isEven(4))
}
function q4(){
    const avg = (a, b, c) => (a+b+c)/3;
    console.log(avg(2, 3, 6));
}
function q5(){
    const toUpperCase = (str) => str.toUpperCase();
    console.log(toUpperCase("hi"));
}
function q6(){
    const containWord = (str, word) => str.includes(word);
    console.log(containWord("hello word", "word"))
    console.log(containWord("hello world", "world"))
}
 function q7(){
    const printTon = (num) => {
        for (let i = 1; i <= num;i++){
            process.stdout.write(i + ", ");
    } 
 }
 printTon(5);
}
function q8(arr){
    const sumArray = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }
    return sumArray(arr);
}
function q9(num){
    const timesTen = (num) => num * 10;
    return timesTen(num);
}
function q10(arr){
    const returnFirstLettter = (arr) => {
        return arr[0];
    }
    return returnFirstLettter(arr);
}
// function q11(a, b){
//     // const isGreater = (a, b) => {
//     //     return a > b;
//     // };
//     // return isGreater(a, b); // Call isGreater with the provided arguments
//     const isGreater = a > b;
//     return isGreater;
//}
const isgreater = (a, b) => a > b;
const random100 = () => {
    return Math.floor(Math.random() * 100);
}
console.log(isgreater(5, 4)); 
console.log(random100());