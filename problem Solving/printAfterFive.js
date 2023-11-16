// write a function for print number after 5 
function findNumberAfterFive(n) {
    let numbers = [];
    for (let i = 0; i <= n; i += 5) {
        // numbers.push((i));
        numbers.push(i);
        // i + 5;
        // console.log(numbers);
    }
    return numbers;
}
console.log(findNumberAfterFive(100));