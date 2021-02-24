/* 
    1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a callback function (see step 2).

    2. Declare a function named callback. This function needs to accept a parameter. Inside the function, console.log each number (0-10) from the previously written for loop. Your console should look like the screenshot below.
        - After you've successfully console.logged 0-10 (as pictured above), move on to step 3.
        
    3. Inside of the callback function, write a conditional that checks if the number is even or odd. If the number is even, console.log 'the number is even'. If the number is odd, console.log 'the number is odd'. Your console should now look like the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS



// ================= Step 1 ====================
for (let i = 0; i <= 10; i++) {
    callback(i);
}


// ================= Step 2 ====================
let callback = (num) => { 
    console.log(num);
} 

for (let i = 0; i <= 10; i++) {
    callback(i);
}

// ================= Step 3 ====================
let callback = (num) => { 
    if (num % 2 === 0) {
        console.log(`${num} is even`);
        } else {
        console.log(`${num} is odd`);
    }
} 

for (let i = 0; i <= 10; i++) {
    callback(i);
}



// Extra homework
let nums = [0,1,2,3,4,5,6,7,8,9,10];

nums.forEach(e => {
    if (e % 2 == 0) {
        console.log(`${e} is even`);
    } else {
        console.log(`${e} is odd`);
    }
})