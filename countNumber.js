//occurrence of an integer in the array
function countNumber(array) {
    let numberCount = {};
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        numberCount[number] = (numberCount[number] || 0) + 1;
    }
    return numberCount;
}
let array = [1, 43, 23, 43, 45, 66, 55, 34, 54, 43, 65];
console.log(countNumber(array));