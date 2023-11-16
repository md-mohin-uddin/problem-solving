// // Reverse an Array.

// function reverseArray(array) {
//     let reversedArray = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversedArray.push(array[i]);
//     }
//     return reversedArray;
// }
// let array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// console.log(reverseArray(array));

// function getReverseArray(array) {
//     let reversedArray1 = [];
//     for (let i = array.length - 1; i >= 0; i--) {

//         reversedArray1.push(array[i]);
//     }
//     return reversedArray1;

// }
// console.log(getReverseArray(array));

function reverseArray(array) {
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(reverseArray(array));

function getReversedString(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}
let string = 'we love bangladesh';
console.log(getReversedString(string));