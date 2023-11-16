// Check if an Array is a Palindrome (reads the same forwards and backwards).
// function isPalindrome(str) {
//     let reverseStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];

//     }
//     return reverseStr === str;

// }
// let str = 'bad';
// console.log(isPalindrome(str));
function isPalindrome(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
        console.log(reverseStr);
        if (reverseStr === str) {
            return true;
        }

    }
    return str;
}
let str = 'never odd or even';
let lowerStr = str.toLowerCase();
// console.log(isPalindrome(lowerStr));

function getRecursiveFact(num) {

    if (num < 2) {
        return 1;
    }
    for (let i = 2; i <= num; i++) {
        num = num * i;
        console.log(num);
    }
    return num
}
console.log(getRecursiveFact(4));