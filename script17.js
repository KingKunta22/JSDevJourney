const prompt = require('prompt-sync')()

// Redo Program 1 from Day 16

const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 }
];

// Add item (if exists → increase qty, else → add new)

// So first, we need to check if that item exists, since we're returning 1 value only, we can just use find

// let userInput = prompt('Add an item to cart: ')

// const findItem = cart.find(item => item.name.toLowerCase() === userInput.toLowerCase())

// then use map to increase qty or add a new product if it doesnt exist yet

// let newCart;

// const addItem = cart.map((item) => {
//     if(findItem) {
//         item.qty += 1
//     } else {
//         return newCart = [
//             {
//                 name: userInput,
//                 price: 0,
//                 qty: 1
//             }
//         ]
//     }
// })

// Well, I kinda just copied your code but I swear I didnt look it up, just remembered it and how it worked, but next time u can just
// give me similar-difficulty with the program that I wasn't able to finish so that I can still understand and check if I really understood it

// console.log(addItem)

// Well, it still didn't work properly because it's considering everything as != userInput
// Let me try to fix it :D

// const addItem = cart.map((item) => {
//     if(findItem === undefined) {
//         console.log('Item not found')
//         return newCart = [
//             {
//                 name: userInput,
//                 price: 0,
//                 qty: 1
//             }
//         ]
//     }

//     item.qty += 1
//     return item   
// })

// console.log(addItem)

// Damn, I still don't got it, let me try again, I think I got it this time:

// const addItem = cart.map((item) => {
//     if(item == findItem) {
//         console.log('Item found')
//     } else {
//         console.log('Item not found')
//     }
// })

// Okay, now I can do it without transforming all the other objects in the array, just the right one

// const addItem = cart.map((item) => {
//     if(item == findItem) {
//         item.qty += 1
//         return item
//     } else {
//         return newCart = [
//             {
//                 name: userInput,
//                 price: 0,
//                 qty: 1
//             }
//         ]}
// })

// console.log(addItem)

// Yea, Im fucking confused, I still dont get how to not affect the other objects if it doesnt pass the condition
// Let me take a look how u did it :DDDDD

// Damn, I read it, I understood some of it but I don't know howww, like I don't think I can think that way when given without any hints
// So the correct one (clean solution you prompted) is an immutability one? Since it jst copies the original obeject right?

// I think I need a lot of clarification about the { ...obj } thingy
// So what I need to do is just copy or newCart = [{ ... cart, (insert new object)}] if it exists, and it not just
// ...newCart = [...cart, qty: item.qty += item]

// Idk bruh, to make sure I still recall it, I'm gonna finish everything else before this, so I'll be back here after finishing day 17, to make sure I
// fully understand the code and not just copy it from u







// Exercise 1 

// const updatePrice = cart.filter(item => {
//     if(item.name === 'Dog Food'){
//         item.price = 600
//     } 
//     return item
// })

// console.log(updatePrice)


// Exercise 2

// const removeExpensiveItems = cart.filter((item) => {
//     if(item.price < 400) {
//         return item
//     }
// })

// console.log(removeExpensiveItems)


// Exercise 3 

// const getTotalQty = cart.reduce((totalQty, item) => {
//     return totalQty += item.qty
// }, 0)

// console.log(getTotalQty)


// Program 1: Easy







