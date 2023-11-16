// // function getMissingNumber(arr) {
// //     let counter = 0;
// //     for (let i = arr[counter], j = 0; i <= arr[arr.length - 1]; i++, counter++, j++) {
// //         if (arr[j] !== i) return i
// //     }
// // }


// function getMissingNumber(arr) {
//     counter = 0;
//     let missingNumbers = [];
//     for (let i = arr[counter], j = 0; i <= arr[arr.length - 1]; i++, counter++, j++) {
//         if (arr[j] !== i) {
//             missingNumbers.push(i);
//             i++
//         }
//     }
//     return missingNumbers;
// }
// let arr = [100, 101, 102, 103, 104, 105, 107, 108, 110];
// console.log(getMissingNumber(arr));
function findMissingNumbers(arr) {
    let counter = 0;
    let missingNumbers = [];
    for (let i = arr[counter], j = 0; i <= arr[arr.length - 1]; i++, counter++, j++) {
        if (arr[j] !== i) {
            missingNumbers.push(i);
            i++;
        }
    }
    return missingNumbers;
}

let arr = [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 15];
console.log(findMissingNumbers(arr));