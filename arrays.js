const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(arr1[0][0]);//the first number in the first array the second number in the second array and so on:

for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr1[i].length; j++){
        console.log(arr1[i][j]);
    }
}
// this is a nested for loop that goes through all the arrays and prints them out one by one:
const rows = arr1.length;
const column = arr1[0].length;// this gets the length of the first array in the array of arrays:
constisSquare = rows === columns;//

function Map(arr, callback){
    const result = [];// this is an empty array that will hold the numbers:
    for (let i = 0; i < arr.length; i++){
        const element = arr[i];// this gets the current element in the array:
        const mappedElement = callback(element, i);// this calls the callback function and passes the current element and its index:
        result.push(mappedElement);// this pushes the mapped element into the empty array:
    }
    return result;
}

function otherDiagonal(arr){
    const result = [];// this is an empty array that will hold the diagonal numbers:
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i][arr.length - 1 - i]);// this pushes the diagonal numbers into the empty array:
    }
    return result;
}
function isMagic(arr){
    const dimenstion = arr.length;
    const s = sum(arr[0]);// this gets the sum of the first array:
    for (let i = 0; i < dimenstion; i++){
        if (sum(arr[i]) !== s) return false;// this checks if the sum of the current array is not equal to the sum of the first array:
    }
    for (let i = 0; i < dimenstion; i++){
        if (sum(columns(arr, i)) !== s) return false;// this checks if the sum of the current column is not equal to the sum of the first array:
    }
    if (sum(diagonal(arr)) !== s) return false;// this checks if the sum of the diagonal is not equal to the sum of the first array:
    if (sum(diagonal(arr.reverse())) !== s) return false;// this checks if the sum of the reverse diagonal is not equal to the sum of the first array:

}

function diagonal(arr){
    const result = [];// this is an empty array that will hold the diagonal numbers:
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i][i]);// this pushes the diagonal numbers into the empty array:
    }
    return result;
}

function columns(arr, n){
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i][n]);// this pushes the column numbers into the empty array:
    }
    return result;
}

const columnMap = (arr, n) => arr.map(row => row[n]);// this is a map function that goes through the array and gets the column numbers:


const sum = arr => arr.reduce((acc, x => acc + x));// this is a reduce function that goes through the array and gets the sum of the numbers:



function isSame(arr){
    //arr.lenth === 3
    return arr[0] != 0 && arr[0] === arr[1] && arr[0] === arr[2];// this checks if the first number is not 0 and if the first number is equal to the second and third numbers:
    // if they are it returns true: 
}
// this is a function that checks if the numbers are the same:
// it checks if the first number is not 0 and if the first number is equal to the second and third numbers:
// if they are it returns true:
function whoWon(arr){
    for(let i = 0; i < 3; i++){
        if (isSame(arr[i])){
            return arr[i][0];// this returns the first number in the array:
        }
    }
    for(let i = 0; i < 3; i++){
        if (isSame(columns(arr, i))){
            return arr[i][0];// this returns the first number in the column:
        }
    }    
    if (isSame(diagonal(arr)) || isSame(otherDiagonal(arr))){
        return arr[1][1];// this returns the first number in the diagonal:
    }
    return 0;// this returns 0 if there is no winner:
}