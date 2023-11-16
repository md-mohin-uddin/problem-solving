function getSumOfArrays(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getSumOfArrays(array));
// sum of even and odd numbers of array elements
function getEvenOddSumOfArrays(array) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenSum += array[i];
        }
        else {
            oddSum += array[i];

        }
    }
    return { evenSum, oddSum };
}
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = getEvenOddSumOfArrays(array);
// console.log(result.evenSum);
// console.log(result.oddSum);

// find the multiplication of even and odd arrays

function findEvenOddMultiplication(array) {
    let evenMultiplication = 1;
    let oddMultiplication = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenMultiplication *= array[i];
        }
        else {
            oddMultiplication *= array[i];
        }
    }
    return { evenMultiplication, oddMultiplication };
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = findEvenOddMultiplication(array);
console.log(result.evenMultiplication);
console.log(result.oddMultiplication);

function getSumOfElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}
console.log(getSumOfElements(array));
