// function countEvenNumbers(arr) {
//     let countEven = 0;
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] % 2 === 0) {
//             countEven++;
//         }
//     }
//     return countEven;
// }
// let arr = [1, 2, 4, 6, 3, 7, 55, 43, 55, 444, 3, 455, 4334, 22, 76];
// console.log(countEvenNumbers(arr));

function countEvenNumber(arr) {
    let countEven = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            countEven++;
        }
    }
    return countEven;
}
let arr = [4, 3, 6, 5, 3, 78, 43, 67, 44, 66, 34, 56];
console.log(countEvenNumber(arr));