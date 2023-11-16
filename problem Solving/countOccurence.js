// Count Occurrences of a Specific Element
function getOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            count++;
        }
    }
    return count;
}
let arr = [54, 334, 34, 5, 64, 33, 54, 5, 6, 43, 5, 4, 54, 334, 54, 87];
let target = 54;
console.log(getOccurrences(arr, target));

function getOccurrences(str, target1) {
    let count = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] == target1) {
            count++;
        }
    }
    return count;
}
let str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel dolores pariatur sit illum sequi aliquid reiciendis ratione, nulla voluptate, blanditiis nesciunt laboriosam reprehenderit explicabo itaque, quaerat voluptates? Minima dicta autem nemo error sed, alias quas qui quaerat eos quia. Amet impedit distinctio optio ipsa itaque necessitatibus corrupti dicta eligendi odio";
let target1 = 's';
console.log(getOccurrences(str, target1));