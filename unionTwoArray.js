// Find and print the union of elements from two arrays (remove duplicates).
// function getUnionTwoArray(arr1, arr2) {
//     let newArray = [...arr1, ...arr2];
//     let unionOfArrays = [];
//     for (let i = 0; i < newArray.length; i++) {
//         if (!unionOfArrays.includes(newArray[i])) {
//             unionOfArrays.push(newArray[i]);
//         }
//     }
//     return unionOfArrays;
// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(getUnionTwoArray(arr1, arr2));

function getUnionTwoArray(arr1, arr2) {
    const concatArray = [...arr1, ...arr2];
    let unionArray = [];
    for (let i = 0; i < concatArray.length; i++) {
        if (!unionArray.includes(concatArray[i])) unionArray.push(concatArray[i]);
    }
    return unionArray;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getUnionTwoArray(arr1, arr2));