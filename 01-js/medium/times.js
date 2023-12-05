/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

const time = Date.now()

function calculateTime(n) {
    
    let count = 0;
    for(let i = 1; i <= n; i++ ){
        count += i
    }
    return ` for ${n} the count is ${count} and it took around ${(Date.now() - time)/1000} second` 
}

console.log(calculateTime(100000000))