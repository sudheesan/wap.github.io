
const sum = (numArray) => {
    return numArray.filter(value => value > 20)
    .reduce((a,b)=> a+b)
}

const numArray = (stringArray) => {
    return stringArray.filter((value) => value.length >= 5 && value.includes('a'));
}

//test array question one
const newNumArray = [1,25,3,25,5];

//test array question two
const newStringArray = ['abcde', 'abcd', 'abcdefghh', 'abcdhrjjkeje']

console.log(sum(newNumArray));
console.log(numArray(newStringArray));
