class Dog{
    constructor(name, color){
        this.name = "dog";
        this.color = this.color;

    }

    bark(){
        console.log('woff!! im ${this.name}, woof!!');
    }
}

class Dice{
    constructor(result){
        this.result = result;
    }

    roll(){
        const result1 = Math.floor(Math.random() * 6) + 1;
        const result2 = Math.floor(Math.random() * 6) + 1;
        console.log('dice rolled:', result1, result2);
        this.result = result1 + result2;    
    }

}

const dog1 = new Dog("max", "black");
const dog2 = new Dog("mike", "white");

dog1.bark();        
dog2.bark();

console.log('dog1 color', dog1.color);
console.log('dog2 color', dog2.color);

const dice1 = new Dice();

dice1.roll();
console.log('dice1 result:', dice1.result);