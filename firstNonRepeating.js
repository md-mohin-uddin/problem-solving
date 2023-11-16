// first repeating/ non repeating element in an array of integers
// find the duplicate number on a given integer array

function countNumber(array) {
    let numberCount = {};
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        numberCount[number] = (numberCount[number] || 0) + 1;
    }
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (numberCount[number] === 1) return number;

    }
    return numberCount;
}
// let array = [2, 43, 22, 4, 53, 2, 45, 43, 23, 45, 3, 4, 33];
// console.log(countNumber(array));

function firstNonRepeatingCharacter(string) {
    let strCount = {};
    for (let i = 0; i <= string.length - 1; i++) {
        let str = string[i];
        strCount[str] = (strCount[str] || 0) + 1;

    }
    for (let i = 0; i <= string.length - 1; i++) {
        let str = string[i];
        if (strCount[str] === 1) return str;

    }
    return strCount;
}
let string = 'we love bangladesh';
console.log(firstNonRepeatingCharacter(string));