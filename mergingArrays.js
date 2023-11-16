// Merge Two Arrays:
function findMergingArray(arr1, arr2) {
    let newArr = [...arr1, ...arr2];
    return newArr;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
console.log(findMergingArray(arr1, arr2));