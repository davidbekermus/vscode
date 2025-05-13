console.log("hello world")
for(let i = 10; i >=0; i--){
    console.log(i)

}
let cars = ["bev", "toyota", "ercedas", "heyundie"]
if (cars.includes("bev")){
console.log("yes")
}else{
    console.log("no")
}
cars.push("toyota")//adds the element 
console.log(cars)
let car = cars.pop(0)//we pop last element

let [i] = "bev"
console.log(i)

let num = Math.random()//1<num<0
num =num * 100 //100<num<0
console.log(num)
num = Math.floor(num)

let number = Math.floor(Math.random() * 100)
