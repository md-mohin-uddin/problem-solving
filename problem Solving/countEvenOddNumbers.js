// // Count the Number of Even Numbers.
// // Count the Number of Odd Numbers.
// function countEvenOddNumbers(array) {
//     let countEven = 0;
//     let countOdd = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             countEven++;
//         }
//         else { countOdd++; }
//     }
//     return { countEven, countOdd };
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let result = countEvenOddNumbers(array);
// console.log(result.countEven);
// console.log(result.countOdd);

function countEvenOddNumbers(array) {
    let countEven = 0;
    let countOdd = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            countEven += 1;

        }
        else {
            countOdd += 1;
        }
    }
    return { countEven, countOdd }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = countEvenOddNumbers(array);
console.log(result.countEven);