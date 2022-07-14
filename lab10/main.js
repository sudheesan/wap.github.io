
const arrayProcess = require('./process-array');

const array = [1,2,3,4,5,6,7,8];

Array.prototype.even = arrayProcess.even;
Array.prototype.odd = arrayProcess.odd;

console.log(array.even());
console.log(array.odd());


/*Question 2

    if we want tp excute some callbacks right after the poll phase is completed
    we have to use the setImmediate async function, 
    setTimeout()schedules a script to be run after a minimum threshold in ms has elapsed.

*/


/*Question 3

    process.nextTick() fires immediately on the same phase,
    setImmediate() fires on the following iteration or 'tick' of the event loop

*/

/*Question 4

    no it doesn't
    
*/