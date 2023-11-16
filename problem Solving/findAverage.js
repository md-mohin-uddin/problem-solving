// Calculate the Average of Array Elements.
// function getAverage(array) {
//     let sum = 0;
//     let average;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//         average = sum / array.length;

//     }
//     return average;
// }
// console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 9]));

function getAverage(array) {
    let sum = 0;
    let average;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        let average = sum / array.length;
    }
    return average;
}
let array = [0, 2, 4, 6];
console.log(getAverage(array));
