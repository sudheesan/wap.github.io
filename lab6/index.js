// -----Question1-------//

const makeArmy = () => {

    let shooters = [];
    let i = 0;
    while (i < 2) {
        let j = i;
        let shooter = function () {
            console.log(j);
        }
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();

//army.forEach(fn => fn());


// ----------------------//




// -----Question2-------//

const printNumber = (from, to) => {

    let current = from;

    let intervalPrinter = setInterval(() => {
        console.log(current++);
        if(current === to){
            clearInterval(intervalPrinter);
        }
    }, 1000)
   
}
//printNumber(1, 10);
// ----------------------//


// -----Question3-------//

let i = 0;

setTimeout(() => console.log(i), 100);

for(let j = 0; j < 10; j++){
    console.log("inc")
    i++;
}

// ----------------------//