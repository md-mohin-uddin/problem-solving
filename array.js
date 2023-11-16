// //1. Calculate the sum of numbers in an array of numbers
// function total(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// // let arr = [1, 2, 3, 4, 5];

// //2.  Calculate the average of the numbers in an array of numbers

// function average(arr) {
//     let num = arr.length;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / num;
// }
// // let arr = [1, 2, 3, 4, 5];
// // console.log(average(arr));

// //4. Create a function that receives an array of numbers and returns an array containing only the positive numbers

// function findPositiveNumber(arr) {
//     let positiveNumber = [];
//     let negativeNumber = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             positiveNumber.push(arr[i]);
//         }
//     }
//     return positiveNumber;
// }
// // let arr = [1, -5, -7, 2, 3, , 9, 22, -6, 4, 5];
// // console.log(findPositiveNumber(arr));


// //5. Find the maximum number in an array of numbers

// function findMaxNumber(arr) {
//     let maxNumber = -Infinity;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxNumber) {
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber;
// }
// // let arr = [1, -5, -7, 2, 3, , 9, 22, -6, 4, 5];
// // console.log(findMaxNumber(arr));

// //6. Print the first 10 Fibonacci numbers without recursion
// function findFibonacci(n) {
//     let fibo = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// // console.log(findFibonacci(10));

// // 7. Create a function that will find the nth Fibonacci number using recursion

// function recursiveFibonacci(n) {
//     if (n < 2) {
//         return n;
//     }
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }
// // console.log(recursiveFibonacci(5));

// //8. Calculate the sum of digits of a positive integer number

// function positiveSum(arr) {
//     let positiveSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             positiveSum += arr[i];
//         }
//     }
//     return positiveSum;
// }
// // let arr = [1, -5, -7, 2, 3, 9, 22, -6, 4, 5];
// // console.log(positiveSum(arr));

// // 9.Print the first 100 prime numbers

// function isPrime(num) {
//     if (num < 2) return false;
//     for (var i = 2; i <= num / 2; i++) {
//         if (num % i == 0)
//             return false;
//     }
//     return true;
// }


// function findPrime(n) {
//     let primeNumbers = [];

//     for (let i = 2; i < n; i++) {
//         if (isPrime(i)) {
//             primeNumbers.push(i)
//         }


//     }
//     return primeNumbers;
// }
// console.log(findPrime(100));

// 10.how many times exist  largest number from an array

function findMax(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function countMax(array) {
    let count = 0;
    let max = findMax(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === max) {
            count += 1;
        }
    }
    return count;

}


function findMax(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function countMax(arr) {
    let count = 0;
    let max = findMax(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
            count++;
        }
    }
    return count;

}
// console.log(countMax([8, 44, 32, 45, 44, 22, 99, 22, 34, 5, 5, 99, 23, 43, 99, 47, 99]));

//11. find third largest from an array of

function findThirdMax(arr) {
    let firstMax = 0;
    let secondMax = 0;
    let thirdMax = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = arr[i];
        }
        if (arr[i] > secondMax && arr[i] != firstMax) {
            thirdMax = secondMax;
            secondMax = arr[i];
        }
        if (arr[i] > thirdMax && arr[i] != secondMax && arr[i] != firstMax) {
            thirdMax = arr[i]
        }
    }
    return thirdMax;
}
// console.log(findThirdMax([8, 44, 32, 45, 44, 22, 99, 22, 34, 5, 5, 99, 23, 43, 99, 47, 99]));

//12. find index of an element of an array 

let arr = [8, 44, 32, 45, 44, 22, 99, 22, 34, 5, 5, 99, 23, 43, 99, 47, 99];
// console.log(arr.indexOf(99));

//13. sort an array
let sortArray = arr.sort((a, b) => (a - b));
// console.log(sortArray);

//14. copy an array

let arr1 = arr.slice(0, -1);
// console.log(arr1);

//15. add an element into an array
let arr2 = [8, 44, 32, 45, 44, 22, 99, 22, 34, 5, 5, 99, 23, 43, 99, 47, 99];
arr2.push(100);
//16. console.log(arr2);

//17. add an element to an front array that
let arr5 = [8, 44, 32, 45, 44, 22, 99, 22, 34, 5, 5, 99, 23, 43, 99, 47, 99];
arr5.unshift(200);
// console.log(arr5);

//18. remove an element from an array that
let arr3 = [8, 44, 32, 45, 44, 22, 99, 22, 34, 5, 5, 99, 23, 43, 99, 47, 99]
arr3.pop();
// console.log(arr3);

//19. remove an front element from an array that
let arr4 = [8, 44, 32, 45, 44, 22, 99, 22, 34, 5, 5, 99, 23, 43, 99, 47, 99];
arr4.shift();
// console.log(arr4);

//20. print the numbers who are greater than 10

function findMaxThanTen(arr) {
    let numbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 50) numbers.push(arr[i]);
    }
    return numbers;
}

// console.log(findMaxThanTen(arr));


//21. first non repeat element in the array
function findFirstNonRepeat(arr6) {
    let charCount = {};
    let found = false;
    for (let i = 0; i < arr6.length; i++) {
        const char = arr6[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < arr6.length; i++) {
        const char = arr6[i];
        if (charCount[char] === 1) {
            return char;
        }
    }
    (!found)
    return null;
}
let arr6 = [8, 44, 32, 45, 44, 22, 99, 22, 34, 5, 8, 5, 99, 23, 43, 99, 47, 99];
// console.log(findFirstNonRepeat(arr6));

//22. Reverse an Array
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
// console.log(reverseArray(arr));

// 23. Find Even/Odd Numbers

function findEvenNumbers(arr) {
    let evenNumbers = [];
    // let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);

        }
    }
    return evenNumbers;
}
// console.log(findEvenNumbers(arr));

// 24.sum evenOdd
function sumEvenOdd(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }

    return { sumEven, sumOdd };
}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = sumEvenOdd(numbers);

// console.log(result.sumEven);
// console.log(result.sumOdd);

// 23. bubble sort
function bubbleSort(numbers) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[i + 1]) {
                let temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

}
let numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 32, 45, 2, -5];
bubbleSort(numbers)
// console.log(numbers);

// 24. quick sort 
function quickSort(numbers) {
    if (numbers.length < 2) {
        return numbers;
    }
    let pivot = numbers.length - 1;
    let left = [];
    let right = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < pivot) {
            left.push(numbers[i]);
        }
        else {
            right.push(numbers[i]);
        }

    }
    return [...left, pivot, ...right];
}
console.log(quickSort(numbers));







