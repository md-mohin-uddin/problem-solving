// Find the Second Maximum Element: Write a program to find the second maximum element in an array.
// Find the Second Minimum Element: Write a program to find the second minimum element in an array.

function findSecondMax(array) {
    let firstMax = array[0];
    let secondMax = array[1];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > firstMax) {
            secondMax = firstMax;
            firstMax = array[i]
        }
        if (array[i] > secondMax && array[i] !== firstMax) {
            secondMax = array[i]

        }
    }
    return secondMax;
}
let array = [54, 3, 24, 33, -2, 34, 555, 444, 32, 443, 66];
console.log(findSecondMax(array));

function findSecondMin(array) {
    let firstMin = array[0];
    let secondMin = array[1];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < firstMin) {
            secondMin = firstMin;
            firstMin = array[i];
        }
        if (array[i] < secondMin && array[i] !== firstMin) {
            secondMin = array[i];

        }

    }
    return secondMin;
}
console.log(findSecondMin(array));