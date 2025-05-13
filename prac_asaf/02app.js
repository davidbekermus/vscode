let num1 = Math.random()
num1=num1*10
num1=Math.floor(num1)
let num2 = Math.random()
num2=num2*10
num2=Math.floor(num2)
let sol = num1 + num2
console.log(sol)

//q3
let num = Math.floor(Math.random() * 50)
for (let i = 0; i < num; i++){
    //console.log(i)
    process.stdout.write(i + "," );//this prints in one line
}
