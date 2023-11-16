// // Find the Average of Even Numbers: Write a program to calculate the average of all even numbers in an array.
// // Find the Average of Odd Numbers: Write a program to calculate the average of all odd numbers in an array.

// function findAverageOfEvenOddNumbers(array) {
//     let sumOfEvenNumbers = 0;
//     let sumOfOddNumbers = 0;
//     let averageOfEvenNumbers;
//     let averageOfOddNumbers;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             sumOfEvenNumbers += array[i];
//             averageOfEvenNumbers = (sumOfEvenNumbers / (array.length / 2));
//         }
//         else {
//             sumOfOddNumbers += array[i];
//             averageOfOddNumbers = (sumOfOddNumbers / (array.length / 2));
//         }
//     }
//     return { averageOfEvenNumbers, averageOfOddNumbers }
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = findAverageOfEvenOddNumbers(array);
// console.log(result.averageOfEvenNumbers);
// console.log(result.averageOfOddNumbers);

// function findAverage(arr) {
//     let total = 0;
//     let average = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//         average = (total / arr.length);
//     }
//     return average;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(findAverage(arr));

function findAverage(arr) {
    let sumOfEvenNumbers = 0;
    let sumOfOddNumbers = 0;
    let countOfEvenNumbers = 0;
    let countOfOddNumbers = 0;

    let averageOfEvenNumbers;
    let averageOfOddNumbers;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            countOfEvenNumbers++;
            sumOfEvenNumbers += arr[i];
            averageOfEvenNumbers = sumOfEvenNumbers / countOfEvenNumbers;
        }
        else {
            countOfOddNumbers++;
            sumOfOddNumbers += arr[i];
            averageOfOddNumbers = sumOfOddNumbers / countOfOddNumbers;
        }

    }
    return { averageOfEvenNumbers, averageOfOddNumbers }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let result = findAverage(arr)
console.log(result.averageOfEvenNumbers);
console.log(result.averageOfOddNumbers);

