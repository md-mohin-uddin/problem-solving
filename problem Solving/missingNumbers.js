function missingNumber(array) {
    let count = 0;
    let missingNumbers = [];
    for (let i = array[count], j = 0; i <= array[array.length - 1]; i++, count++, j++) {
        if (array[j] !== i) {
            missingNumbers.push(i);
            i++;
        }
    }
    return missingNumbers;
}
let array = [1, 2, 4, 5, 6, 7, 9, 11];
console.log(missingNumber(array));