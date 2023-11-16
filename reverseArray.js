// reverse an array
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
let arr = [10, 23, 4, 25, 42, -5, 24, 77, 54, 32, 112];

console.log(reverseArray(arr));