// Alright then, let me fix the wrongs I did in day 4 before proceeding with the next day

const prompt = require('prompt-sync')();



// Exercise 2 (Better Version)


// for(i = 2; i < 21; i+=2) {
//     console.log(i);
// }


// Exercise 4 (SUM 1-100)

// So just use a container


// let total = 0

// for(i = 1; i < 101; i++){
//     total = total + i;
// }

// console.log(total);

// So I get it, but make the hints next time less obvious
// Or yk, you can just explain to me how total = total + i works XD





// Program 1: Multiplication Table (Better Version)

// let userNum = Number(prompt('Enter a number: '))

// for(i = 1; i < 11; i++){

//     let prod = userNum * i
//     console.log(userNum + ' x ' + i + ' = ' + prod)
// }




// Program 2: Guessing Game (Better Version)

// let secretNum = 6
// let guessNum = Number(prompt('Guess the secret number: '))

// if(guessNum != secretNum){
//     for(i = 1; guessNum > secretNum; i++){
//         console.log('Too high')
//         guessNum = Number(prompt('Guess another number: '))
//     }

//     for(i = 1; guessNum < secretNum; i++){
//         console.log('Too low')
//         guessNum = Number(prompt('Guess another number: '))
//     }
// } else {
//     console.log('Correct!')
// }

// Yea, I think it's easier and more understandable to use while loop for this case XD

// let secretNum = 6
// let guessNum = Number(prompt('Guess the secret number: '))

// while(guessNum != secretNum) {
//     if(guessNum > secretNum){
//         console.log('Too high')
//         guessNum = Number(prompt('Guess another number: '))
//     } else if(guessNum < secretNum){
//         console.log('Too low')
//         guessNum = Number(prompt('Guess another number: '))
//     }
// }

// console.log('Correct!')

// Woah, I actually got it right this time
// I thought I can't make it so I looked for hints on my last one XDD
// How would u even do this with for loop lol


// Program 3: Pattern

let star = ""

for(i = 1; i < 6; i++){
    // I was about to write i < 15 at the conditional inside the loop 
    // because my thought process goes like "I need the total of stars" XD
    star = star + "*"
    console.log(star);
}

// Alright, I got it, but I js need something to make me understand how the star = star + * works
// would it be different if I use star + * = star, or in programmiung you always have to follow that format?
// Proceed to next day after review and answer