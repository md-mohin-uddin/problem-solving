// Find Duplicate Elements.
function findDuplicateElements(array) {
    let duplicateElements = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                duplicateElements.push(array[j]);
            }
        }
    }
    return duplicateElements;
}
let array = [332, 233, 2, 3, 5, 3, 3442, 223, 233];
console.log(findDuplicateElements(array));