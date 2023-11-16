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

function getMaxMin(arr) {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return { max, min };
}
const arr = [88, 22, -33, 55, 3332, -4432, 44, 25, 32, 5777, -332];
const result1 = getMaxMin(arr);
console.log(result1.max, result1.min);

function maxMin(arr) {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }

    }
    return { max, min }
}
let result2 = maxMin(arr);
console.log(result2.max, result2.min);
