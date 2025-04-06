const numbers = document.getElementById('numbers');
const numbers2 = document.getElementById('numbers2');
const sign = document.querySelector('#sign');
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const check = document.querySelector('#check');

const randomTwoDigitNumber = () => Math.floor(Math.random() * 90) + 10;

const num1 = randomTwoDigitNumber();
const num2 = randomTwoDigitNumber();
const operatorIsmultiplication = Math.random() < 0.5;
numbers.innerHTML = num1;
numbers2.innerHTML = num2;
if (operatorIsmultiplication) {
    sign.innerHTML = 'x';
    }else {
    sign.innerHTML = '+';       
    }
    //sign.innerHTML = operatorIsmultiplication ? 'x' : '+';// ths is a nother way to rwie the aabove "if" it starts with a condition and then the "?" is like an if statement and the ":" is like an else statement.
    check.addEventListener('click', () =>{
        let res;
       
        if (operatorIsmultiplication) {
            res = num1 * num2;
        } else {
            res = num1 + num2;
        }
        if (parseInt(input.value) === res) {
            result.innerHTML = 'Correct!';
        } else {
            result.innerHTML = 'Incorrect!';
        }
});

