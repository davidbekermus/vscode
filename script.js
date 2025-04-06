
let n='text';
console.log( n );
n= "hello world"

const m=12;
console.log( m ==n)

let i=`hgouyg
ljbhbi;oo`
//sideway lets you go down a line also if you want to write "${typeof x}" you need to oopen the sentence with sideways peratheses like this "" `` ""

if (typeof n == 'number')
    console.log('its a number')
else
console.log(`it is not a number,it is ${typeof n}`);
function increase(n){
    return n +1;
}
increase(8);
console.log(increase('text'));

function deffrence(x, y){
    if (x > y){
         return x - y;
    }
    else{
        return y - x;
    }
}

function count(a){
    let sum= 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum;
}
console.log(count(8))

function count2(a){
    return a * (a + 1) / 2
}
const count3= a => a * (a+1) / 2;
// three ways to write this this function
const conslant= () => 6;
// when thers only one element you could leave the parentheses empty

function times(q){
   let sumt = 1;
    for( let i = 1; i <= q; i++){
        sumt *= i;
    }
    return sumt;
} 
console.log(times(2));

function switchplaces(arr){
    const temp= arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
}

function switchplaces1(arr){
    const newnumber = [arr[1], arr[0]];
    for (let i = 2; i < arr.length; i++){
        newnumber[i] = arr[i];
    }
    return newnumber
}
//this function turns around the first two numbers
const arrfor1= switchplaces([1,2,3,4,5,6]);
const arrfor2=switchplaces1([1,2,3,4,5,6]);
console.log(switchplaces1([1,2,3,4,5]));
console.log(arrfor1);

function evenorodd(arr1){
    if (arr1.length % 2){
        //because the result of 0 means false (wich would tell us that its a even number)so any true (wich would mean its an odd number) result wouuld give the return
        let sum = 0;
        for (let i =0; i < arr1.length; i++)
            sum += arr1[1];
        return sum;
    }else{
        return arr1[(arr1.length - 1) /2];
    }
}
function secret(arr){
    const temp =arr[1];
    arr[1]=17;
    return temp;
}
//the function returns just the temp but it also changes the marach that the second element changes to 17
const myarr= [1,2,3,4,5];
console.log(myarr.pop());//this function prints the last element but also erases it from the marach
console.log(myarr.slice[1]);//this function prints the number but doesnt take that number out of the marach
const narr = myarr.map(x => x * 2);//this function times each number acording to the anount writen in the function

function addtothemarch(arr, m){
    return arr.map(x => x + m);
}
console.log(addtothemarch(myarr, 2));

const arrfilter= myarr.filter(x => x % 3 != 0);
//thid function id used to take out certen numbers in the marach that youuu dont want ther in this example it takes ou any number that id not even
const arrreduse= myarr.reduce((sum, x) => sum + x, 0)
//this function startes fro 0 and the adds the fist number inthe marach and then saves the number and then adds to the next number in the marach and so on forowd

function ramainder(arr, n){
    let n;
    const arr = [];
    for(i = 0; i > arr.length; i++){
          arr[i] = arr[i]%2;
    }
    return arr;
}
//const ramainder = (arr, n)=>arr.map(x=>x % n);//nother way to write the above function
function geaterthen(arr, n){
        let n;
        const arr = [];
        for(i = 0; i > arr.length; i++){
            arr[i] = arr[i] > n;
      }
      return arr;
}
//const geaterthen = (arr,n)=>arr.map(x=>x > n);

function greaterthenfilter(arr, n){
    let n;
    const arr = [];
    for(i = 0; i > arr.length; i++){
        arr[i] = arr[i].filter > n;
  }
  return arr;
}
//const greaterthenfilter= (arr,n)=>arr.filter(x=>x >n);

const filterrange = (arr, n, m)=> arr.filter(x=>x > n && x < m).map(x=> x*2);

const softByReminder = (arr,n)=> arr.sort((a, b) => a % n - b % n);//if returns < 0 then returns the first element if > 0 returns the seccond element and if = 0 exactly then it dorsnt matter

function longPower(arr){
    let result = 1;
    for (let i = 0; i < arr.length; i++){
        result *=arr[i];
    }
    return result;
}
 const findave = arr => arr.reduc((result, x) => result * n, 1);

 const power = arr=>arr.reduce((result, n) => result + n, 0) / arr.length;

const myObj = {a: 5, b: 8};
const myCar = {color: 'red', wheels: 4}

