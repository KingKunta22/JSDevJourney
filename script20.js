// OKAY IM RESTARTING EVERYTHING BECAUSE IM ON THE 3RD CHATGPT PROFESSOR

// THIS IS STILL DAY 19 I GUESS, JSUT NEED TO POLISH SOMETHING

const prompt = require('prompt-sync')()

// let cart = [
//   { name: "A", price: 10, qty: 1 },
//   { name: "B", price: 20, qty: 2 }
// ];


// Exercise 1

// cart = cart.filter(item => item.name !== 'A')

// console.log(cart)


// Okay, that was easy, but is that correct? cart = cart.filter? or do I need to create a new variable like const removeA = cart.filter...???


// Exercise 2

// cart = cart.map((item) => {
//     if(item.name === 'B'){
//         return {...item, qty: item.qty + 1}
//     }
//     return item
// })

// console.log(cart)

// Good, working as well as expect :DDDD


const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];


// Program 1 (Guided)

// let userChoice = prompt('Enter an item to add: ')

// function addToCart(cart, productName){
//     let exists = cart.find(item => item.name.toLowerCase() === productName.toLowerCase())

//     if(exists){
//         cart = cart.map((item) => {
//             if(item.name.toLowerCase() === productName.toLowerCase()){
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//         })
//     } else {
//         cart = [...cart, 
//             {
//                 name: productName,
//                 price: 0,
//                 qty: 1
//             }
//         ]
//     }
//     console.log("Here's your updated cart: ")
//     console.log(cart)
//     return cart
// }

// addToCart(cart, userChoice)

// OH WOW, I GOT IT EASILY THIS TIME, I THINK THE GAME CHANGING LESSON WAS JUST DOING cart = cart.map... :DDDDDD so I dont need to do const newCart bruh


// Program 2 (Unguided)

// let userReq = prompt('Remove a product: ')

// function removeFromCart(cart, productName) {

//     // I don't have to do this, but just for safety checks and making sure that that product exists, I'll do it xd
//     let exists = cart.find(item => item.name.toLowerCase() === productName.toLowerCase())
//     if(!exists){
//         console.log("Unfortunately, that product doesn't exist")
//     } else {
//         cart = cart.filter(item => item.name.toLowerCase() !== productName.toLowerCase())
//     }

//     console.log("Here's your updated cart: ")
//     console.log(cart)
//     return cart
// }

// removeFromCart(cart, userReq)

// Perfect, it works properly without having to debug more than 2 times woowowowowow lDDDDDDD

function getTotal(cart){
    let total = cart.reduce((sum, item) => {
        return sum + item.qty * item.price
    }, 0)
    console.log("The cart's total is: ")
    console.log(total)
}

getTotal(cart)

// Yey, that was so easy but, I DONT LIKE THAT IM NOT HAVING A HARD TIME XDDD, DONT MAKE IT TOO HARD THOUGH ,JUST KEEP IT AVERAGE
// WHATEVER, I TRUST YOU, DO YOUR THING, IM LEARNING SO IDGAF and im not ocmplaining

// QUIZZZZZ

// 1. Map returns an array, if there's a condition, it returns a transformed arrayyyyyy
// 2. Well, I think it'll just return a boolean
// 3. Filter if you want to get SOME items on the array, find if you want ONE item in the array B)
// 4. reduce returns one number based o nteh condition, actually not just a number, anything the cojndition passes


// DEBUGGING

let cart = [
  { name: "A", price: 10, qty: 1 }
];

cart = cart.map(item => {
  if (item.name === "A") {
    return {...item, qty = item.qty + 2}
  }
  return item
});