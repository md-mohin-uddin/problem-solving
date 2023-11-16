// Write a function that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzBuzz(number) {

    for (var i = 1; i <= number; i++) {
        if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else {
            console.log(i);
        }
    }
}
console.log(fizzBuzz(20));