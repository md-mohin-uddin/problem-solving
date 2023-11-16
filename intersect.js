// write a function for finding the intersection of two arrays
function intersectedArray(arr1, arr2) {
    let intersectedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                intersectedArray.push(arr1[i]);
            }

        }
    }
    return intersectedArray;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [3, 4, 5, 7, 8];
console.log(intersectedArray(arr1, arr2));