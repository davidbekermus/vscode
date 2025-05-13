
function q1(){
    let numbers =[]
    for (let i =0; i <10; i++){
        numbers[i] = Math.floor(Math.random()*10)
    }
    console.log(numbers)
    console.log(numbers[2])
    //nummbers.shift()
    //numbers.pop()
    //process.stdout.write(numbers.join(", "));// it dosnt work for some reason
    console.log(numbers.slice(1, 9).join(", "))
     let randon = Math.floor(Math.random()*10)
     numbers.splice(randon, 1)
     console.log("modify array" ,numbers)
     for (let i = 0; i < 10; i+=2){
        process.stdout.write(numbers[i] +",")
     }
     console.log("\n")
     for (let i = 1; i < 9; i+=2)  {
        process.stdout.write(numbers[i] +",")
     }
     for (let i = 0; i < 10; i++){
        if (numbers[i]%2==0)
        process.stdout.write(numbers[i] +",")
     }
}

function q2(){
    let arr = []
    let sum = 0
    arr = ["aplle", "banana", "pair", "orange", "strwberry"]
    console.log(arr)
for (let i = 0; i < arr.length; i++){
    process.stdout.write(arr[i].length + ",")
    sum += arr[i].length
}
console.log(sum)
    
}


function q4(){
    let numbers = [];
    for (let i = 0; i < 100;i++){
        numbers.push(Math.floor(Math.random() * 100));
    }
    for (let i = 0; i < 100;i++){
        process.stdout.write(numbers[i] + " | ");//process.stdout = prints every time in a one liner
    }
    console.log("\n");
    for (let i = 100; i >= 0;i--){
        process.stdout.write(numbers[i] + " ");
    }
    console.log("\n");
    let sum = 0;
    for (let i = 0; i < 100;i++){
        sum += numbers[i];  
    }
    console.log(sum);
    console.log("\n");
    let avg = 0;
    for (let i = 0; i < 100;i++){
        avg= sum/100;  
    }
    console.log(avg);
    console.log("\n");
    for (let i = 0; i < 100;i++){
        if (numbers[i] % 2 == 0){
            process.stdout.write(numbers[i] + " ");
        }  
    }
    console.log("\n");

    for (let i = 0; i < 100;i++){
        if (numbers[i] % 2 != 0){
            process.stdout.write(numbers[i] + " ");
        }  
    }
    console.log("\n");

    let divideto7 = 0;
    for (let i = 0; i < 100;i++){
        if (numbers[i] % 7 == 0){
            divideto7 +=1;
        }  
    }
        console.log(divideto7);

    console.log("\n");
    let max = 0;
    for (let i = 0; i < 100;i++){
        if (numbers[i] > max){
            max = numbers[i];
        }
    }
    console.log(max);
    
    console.log("\n");
    let min = numbers[0];
    for (let i = 1; i < 100;i++){
        if (numbers[i] < min){
            min = numbers[i];
        }
    }
    console.log(min);
    
    console.log("\n");
   
    for (let i = 0; i < 100;i++){
        if (numbers[i] > avg){
            process.stdout.write(numbers[i] + " ");
        }
    }


}
 function fullname(name, lastname){
    console.log(name + " ☀️  " + lastname);
}
console.log("\n")
fullname("dovid", "bekermus");
function printintillNum(n){
    for (let i = 0; i < n;i++){
        process.stdout.write(i + ", ");
    }
}
printintillNum(8);
function printBetwenTwoNum(n1, n2){
    for(i = n1; i <= n2; i++){
        process.stdout.write(i + ", ");
    }
}
function sumOfDigets(num1){
    if(num1 >= 10 && num1 < 100){
        let sum = mun1 % 10 + Math.floor(num1 / 10);
    }
    console.log(num1);
}

