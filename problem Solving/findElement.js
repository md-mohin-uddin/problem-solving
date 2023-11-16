// Find an Element in the Array
function findElement(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target) return true;
    }
    return false;
}
let arr = [9, 34, 23, 45, 6, 324, 6, 34];
let target = 30;
console.log(findElement(arr, target));