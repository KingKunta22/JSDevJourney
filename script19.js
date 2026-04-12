const prompt = require('prompt-sync')()

// DAY 19 / SCRIPT19

const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// Exercise 1:

// So I am js gonna follow what u did on your example
// I willl not look at it again, just based off of what I understood
// function removeItem(cart, name) {
//     const found = cart.find(item => item.name.toLowerCase() === name.toLowerCase())
    
//     console.log(found)

//     //Add qty, if not add a new item
//     if(found){
//         const addQty = cart.map((item) => {
//             if(item.name.toLowerCase() === name.toLowerCase()){
//                 return {...item, qty: item.qty - 1}
//             }
//             return item
//         })
        
//     } else {
//         return [...cart, {
//             name: name,
//             price: 0,
//             qty: 1
//         }]
//     }
// }

// // AFAIK, this should be it or at least similar

// WHATEVER, ITS WRONG

// let userInput = prompt('Enter an item to remove: ')

// console.log(cart)
// removeItem(cart, userInput)
// console.log(cart)

function removeItem(cart, name) {
    const found = cart.find(item => item.name.toLowerCase() === name.toLowerCase())
    
    console.log(found)

    if(found){
        const addQty = cart.map((item) => {
            if(item.name.toLowerCase() === name.toLowerCase()){
                return {...item, qty: item.qty - 1}
            }
            return cart
        })
        
    } else {
        return [...cart, {
            name: name,
            price: 0,
            qty: 1
        }]
    }
}

let userInput = prompt('Enter an item to remove: ')

removeItem(cart, userInput)
console.log(cart)

// Oh wow, I just realized this is just an exercise :dDDDDDDDDDDD


function updateQty(cart, target) {

}