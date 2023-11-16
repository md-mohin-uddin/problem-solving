// // Remove Duplicate Elements.
// // Find Duplicate Elements.
// function removeDuplicate(array) {
//     let uniqueElements = [];
//     for (var i = 0; i < array.length; i++) {
//         if (!uniqueElements.includes(array[i])) {
//             uniqueElements.push(array[i]);
//         }
//     }
//     return uniqueElements;
// }
// let array = [332, 233, 2, 3, 5, 3, 3442, 223, 233];
// console.log(removeDuplicate(array));

// function deleteDuplicate(arr) {
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArray.includes(arr[i])) {
//             uniqueArray.push(arr[i]);
//             uniqueArray.sort((a, b) => a - b);
//         }
//     }
//     return uniqueArray;
// }
// let arr = [332, 233, 2, 3, 5, 3, 3, 53, 3, 33, -54, 24, 56, 4, 22, 455, 6, 4, 33, 65];
// console.log(deleteDuplicate(arr));
function deleteDuplicate(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 232, 32, 3];
console.log(deleteDuplicate(arr));