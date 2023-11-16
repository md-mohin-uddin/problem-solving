// Find the Maximum Element.
// Find the Minimum Element.
function findMaxMin(array) {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    return { max, min }
}
let array = [1, 29, 34, 23, -4, 34, 3, -23, 44, 32, 99];
let result = findMaxMin(array);
console.log(result.max);
console.log(result.min);
