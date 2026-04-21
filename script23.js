// // DAY 22 CONTINUATION (FIXES AND QUIZZES)

// // Q1: Because cart isn't being called or reassigned like cart = handleRequest..., it hsould be like that :DDD
// // Q2: payload: {item: 'Dog Food', qty: 25} SOMETHING LIKE THAT....
// // Q3: I STILLL HAVEN'T GRASPED AND UNDERSTOOD THIS TO PERFECTION TO THE POINT WHERE I KNOW THE EXACT DIRECT ANSWER BUT IT'S B.
// //     (BECAUSE I USUALLY USE USERINPUTS INSIDE OR OUTSIDE FUNCTIONS HEHEHE)

// const prompt = require('prompt-sync')()

// // Okay, I will rewrite the handleCheckout thing on this part, and then I jkust realized, it's a completely separate
// // program to the cartEngine, I thought I'm working with both inside the handleCheckout, so let me try again and see if I understand it now
// // I also wanna know why you did a completely new total on the handleCheckout when the total is already handled inside the getTotal function?
// // Why did you have to rewrite everything inside it?
// // And baed fropm what I understood, handleCheckout is simply just a similar working version to cartEngine... right?

// // Program 2: Handle Checkout (Fix) (Unguided)

// let cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// function applyDiscount(cart, targetDiscount) {
//     cart = cart.map(item => {
//         let discount = item.price * (targetDiscount / 100)
//         return {...item, price: item.price - discount}
//     })
//     return cart
// }

// function getTotal(cart, cash) {
//     let total = cart.reduce((sum, item) => {
//         return sum + item.price * item.qty
//     }, 0)

//     return total
// }

// function handleCheckout(cart, request){
//     let discount = request.payload.discount
//     let cash = request.payload.cash

//     const discountedCart = applyDiscount(cart, discount)
//     let total = getTotal(discountedCart, cash)

//     if(cash < total) {
//         return {
//             error: 'Insufficient Balance'
//         }
//     }

//     let change = cash - total;

//     return {
//         item: discountedCart,
//         cash: cash,
//         total: total,
//         change: change
//     }
// }

// let results = handleCheckout(cart, { 
//     action: 'checkout',
//     // Why do I have to add this action? It isn't part of the argument and it isn't called as well unlike engine 
//     // where there's cart, action, and payload argument inside the cartEngine, so please enlighten me
//     payload: {
//         discount: 10,
//         cash: 5000
//     }
// })

// console.log(results)

// // I mean I got it right but I had to like watch your complete and fixed version and try to understand how it works for like 5 times xd, so basically
// // I kinda copied it but whatever






// Day 23 - MULTI-ACTION SYSTEM WOOOOOOOOOOOOOOOOOOOOOOOOOOH

let cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// Program 1 (Guided)

