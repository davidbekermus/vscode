let a = 1;

function hour (){
    setInterval(()=> {
        a++;
        console.log(a);
    },1000)
}

const b = 1;
 function minute (){
    setInterval(()=> {
        console.log(b++);
    },1000)
}

hour();