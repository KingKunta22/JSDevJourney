const prompt = require('prompt-sync')();

// Exercise 1

// function getMax(arr){
//     let max = 0;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }

//     return max;
// }



// Exercise 2 

// function getEven(arr){
//     let evenNums = 0

//     for(let i = 0; i < arr.length; i++){
//         if(arr % 2 === 0){
//             evenNums++
//         }
//     }

//     return evenNums;
// }

// Let me actually try this

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// getMax(newArr)
// getEven(newArr)

// Well, it's not working, but why?

// Yea, idk but afaik, the functions are correct, it just doesnt return anything XD




// Exercise 3

// function findNumber(arr, target){

//     // I assume target = the user prompt or needed number to search
//     let num = target

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === num){
//             return true;
//         }
//     }

//     return false
// }







// Exercise 4

// function reverseArray(arr){
    
//     let reverse = ''

//     for(let i = 0; i < arr.length; i++){
//         reverse = arr[i]
//     }

//     return reverse
// }

// This one just returns arr[0], arr[1], arr[2],...

// Okay, this one's kinda tricky, I just need to loop from arr[lastIndex] to arr[firstIndex] 

// Or basically, get the last index to deduct it 1 every loop

// function reverseArray(arr){
    
//     let reverse = []

//     for(let i = arr.length; i >= arr.length - 1; i++){
//         reverse = arr[i] - 1
//     }

//     return reverse
// }

// So let's say arr = [a, b, c, d, e]
// The second function should return something like:

// i = 5
// it's gonna return arr[5] which is e
// acc, not e, but undefined, so we need to -1
// can u acc do this : reverse = arr[i] - 1
// Idk, this one should work because it gets the last index from array to the first one (0)

// Yep, that should work, turn the reverse to an empty array and used >= instead of >




// // Program 1: Student Analyzer

// let grades = [85, 90, 78, 92, 88]

// function getAverage(arr){

//     let total = 0

//     for(let i = 0; i < arr.length; i++){
//         total += arr[i]
//     }

//     let avg = total / arr.length

//     return avg;
// }

// console.log(getAverage(grades));

// I still don't get why it doesn't work
// Oh so I actually asked google gemini to figure out why its not showing
// and its because im not using console hehe

// Okay now its working but let me try again with my other functions, actually, im gonna rewrite everything so that you dont get confused
// by the progress


// Exercise 1

function getMax(arr){
    let max = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max) {
            max = arr[i]
        }
    }

    return max;
}

// Exercise 2 

function getEven(arr){
    let evenNums = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenNums++
        }
    }

    return evenNums;
}

// Exercise 3

function findNumber(arr, target){

    let num = target

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return true;
        }
    }

    return false
}

// Exercise 4

function reverseArray(arr){
    
    let reverse = []

    // for(let i = arr.length; i >= arr.length - 1; i++){
    //     // console.log(i > arr.length - 1) -> This returns true so the condition is correct
    //     // Now, the problem is that it returns infinitely
    // }

    // Yea, I don't see any diffference, same bugs and everything because im using same logic xd

    // Let me try it with while loop and see if it makes a difference

    // let i = arr.length;
    // while(i > arr.length - 1){
    //     console.log(true)
    // }

    // Let me try again

    // for(let i = 0; i < arr.length; i++){
    //     // I am just using the common for statement since its gonna loop the same amount of times even if reverse
    //     let testArr = arr[i] + (arr.length - 1);
    //     console.log(testArr)
    // }

    // Now, I am getting some progress lol

    // for(let i = 0; i < arr.length; i++){
    //     let totalIndex = arr.length - 1
    //     reverse[totalIndex];
    //     console.log(reverse)
    // }

    // Im trying to get the last index through let totalIndex = arr.length - 1
    // and then assign it to a variable
    // but idk why its returning []

    for(let i = 0; i < arr.length; i++){
        let totalIndex = arr.length - 1
        console.log(totalIndex)
        totalIndex--
    }

    return reverse;
}




let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let userTarget = Number(prompt('Enter a number: '));
let stringArr = ['a', 'b', 'c', 'd', 'e']
// stringArr is for the exercise 4 for better understanding and lesser confusion

// console.log(getMax(newArr));

// // console.log(getEven(newArr));
// // console.log(findNumber(newArr));
// // console.log(reverseArray(newArr));


// // Alright, let me fix exercises 2, 3, 4

// console.log(getEven(newArr));

// // Alright, its working, just missed the [i]

// console.log(findNumber(newArr, userTarget))

// This one's workin as well, just needed a second argument

console.log(reverseArray(stringArr))



// Program 1: Student Analyzer

// let grades = [85, 90, 78, 92, 88]

// function getAverage(arr){

//     let total = 0

//     for(let i = 0; i < arr.length; i++){
//         total += arr[i]
//     }

//     let avg = total / arr.length

//     return avg;
// }

// console.log(getAverage(grades));