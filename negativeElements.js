// Move all the negative elements to one side of the array
function negativeToOneSide(array) {
    let negativeNumbers = [];
    let positiveNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positiveNumbers.push(array[i]);
        } else {
            negativeNumbers.push(array[i]);
        }
    }
    return [...negativeNumbers, ...positiveNumbers]
}
let array = [0, 3, 23, -4, 23, -44, 22, 34, -9, 99];
console.log(negativeToOneSide(array));