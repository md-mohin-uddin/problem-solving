// // Find the Sum of Even Numbers: Write a program to calculate the sum of all even numbers in an array.
// // Find the Sum of Odd Numbers: Write a program to calculate the sum of all odd numbers in an array.

// function sumOfEvenOddNumbers(array) {
//     let sumOfEvenNumbers = 0;
//     let sumOfOddNumbers = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             sumOfEvenNumbers += array[i];
//         }
//         else {
//             sumOfOddNumbers += array[i];
//         }
//     }
//     return { sumOfEvenNumbers: sumOfEvenNumbers, sumOfOddNumbers: sumOfOddNumbers }
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let result = sumOfEvenOddNumbers(array);
// console.log(result.sumOfEvenNumbers);
// console.log(result.sumOfOddNumbers);

function sumOfEvenOddNumbers(array) {
    let sumOfEvenNumbers = 0;
    let sumOfOddNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumOfEvenNumbers += array[i];
        }
        else {
            sumOfOddNumbers += array[i];
        }
    }
    return { sumOfEvenNumbers, sumOfOddNumbers }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = sumOfEvenOddNumbers(array);
console.log(result.sumOfEvenNumbers);
console.log(result.sumOfOddNumbers);
