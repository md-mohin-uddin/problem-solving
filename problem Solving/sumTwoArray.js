// // Sum of Two Arrays (Element-wise).
// function sumTwoArrays(a, b) {
//     let result = [];
//     for (let i = 0; i < a.length; i++) {
//         let sum = a[i] + b[i];
//         result.push(sum);
//     }
//     return result;
// }
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// console.log(sumTwoArrays(a, b));

function sumTwoArrays(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let sum = a[i] + b[i];
        result.push(sum);
    }
    return result;
}
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(sumTwoArrays(a, b));