// const prompt = require('prompt-sync')()

// // DAY 19 / SCRIPT19

// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// // Exercise 1:

// // So I am js gonna follow what u did on your example
// // I willl not look at it again, just based off of what I understood
// // function removeItem(cart, name) {
// //     const found = cart.find(item => item.name.toLowerCase() === name.toLowerCase())
    
// //     console.log(found)

// //     //Add qty, if not add a new item
// //     if(found){
// //         const addQty = cart.map((item) => {
// //             if(item.name.toLowerCase() === name.toLowerCase()){
// //                 return {...item, qty: item.qty - 1}
// //             }
// //             return item
// //         })
        
// //     } else {
// //         return [...cart, {
// //             name: name,
// //             price: 0,
// //             qty: 1
// //         }]
// //     }
// // }

// // // AFAIK, this should be it or at least similar

// // WHATEVER, ITS WRONG

// // let userInput = prompt('Enter an item to remove: ')

// // console.log(cart)
// // removeItem(cart, userInput)
// // console.log(cart)

// function removeItem(cart, name) {
//     const found = cart.find(item => item.name.toLowerCase() === name.toLowerCase())
    
//     console.log(found)

//     if(found){
//         cart.map((item) => {
//             if(item.name.toLowerCase() === name.toLowerCase()){
//                 console.log('Removing found item')
//                 return {...item, qty: item.qty - 1}
//             }
//             return item
//         })
//         console.log(cart)
        
//     } else {
//         return [...cart, {
//             name: name,
//             price: 0,
//             qty: 1
//         }]
//     }
// }

// let userInput = prompt('Enter an item to remove: ')

// removeItem(cart, userInput)
// console.log(cart)

// Oh wow, I just realized this is just an exercise :dDDDDDDDDDDD


/// BRUH I JUST CAME AFTER LIKE 2 DAYS OF REST AND THEN I DIDNT DO ANY CODE (IM COOKED)

// IM GONNA START OVER DAY 19 OVER HERE

const prompt = require('prompt-sync')()

const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// Exercise 1

// const userInput = prompt('Remove an item: ')

// function removeItem(cart, name) {
//     const found = cart.find((item) => {
//         return name.toLowerCase() === item.name.toLowerCase()
//     })

//     // So afairemember, we need to remove the item if its found, if
//     if(found){
//         let removeItem = cart.map((item) => {
//             if(item === found){
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//         })
//         console.log(cart)
//         console.log('Found item, removed it as well')
//     } else {
//         console.log('Item not found, please try again')
//     }
    
// }

// removeItem(cart, userInput)

// Oky this is kinda working but why isn't it removing the quantity tho

// I see, it should be qty - 1 and I should also call removeItem, IDK if I can just reassign it wihtout declaring a new variable for new array but
// I wonder if I can just reassign cart to the new array that was mapped, or idk im just gonna assign it onto a new cart

// const userInput = prompt('Remove an item: ')

// function removeItem(cart, name) {
//     let newCart;
//     const found = cart.find((item) => {
//         return name.toLowerCase() === item.name.toLowerCase()
//     })

//     if(found){
//         newCart = cart.map((item) => {
//             if(item === found){
//                 return {...item, qty: item.qty - 1}
//             }
//             return {...item}
//         })
//         console.log('Successfully removed the item, your new cart is: ')
//         console.log(newCart)
//     } else {
//         console.log('Item not found, please try again')
//     }
    
// }

// removeItem(cart, userInput)

// OKAY, WELL THAT WORKED, BUT IT DECREASED THE QUANTITY, NOT ENTIRELY REMOVE IT SO LET ME TRY AGAIN:

// const userInput = prompt('Remove an item: ')

// function removeItem(cart, name) {
//     let newCart;
//     const found = cart.find((item) => {
//         return name.toLowerCase() === item.name.toLowerCase()
//     })

//     if(found){
//         newCart = cart.filter((item) => {
//             if(item !== found){
//                 return {...item}
//             }
//         })
//         console.log('Successfully removed the item, your new cart is: ')
//         console.log(newCart)
//     } else {
//         console.log('Item not found, please try again')
//     }
    
// }

// removeItem(cart, userInput)

// Oh wow, I didn't ex[ect it] to work that fast but I mean, I rested for 2 days XDDD (NOT REST, I WAS PROCRASTINATING)





// Exercise 2

// let updateItem = prompt('Enter an item you want to update quantity: ')
// let quantity = Number(prompt('Enter new quantity: '))

// function updateQty(cart, name, qty){
//     let foundItem = cart.find((item) => {
//         return item.name.toLowerCase() === name.toLowerCase()
//     })

//     if(foundItem) {
//         console.log('Found item:')
//         console.log(foundItem)
//         console.log('We will be updating the quantity to:')
//         console.log(qty)

//     } else {
//         console.log("Unfortunately, we couldn't find the item you were looking for")
//     }
// }

// Took me 5-10 minutes to complete above because I was kinda confused but here we go XD

// let updateItem = prompt('Enter an item you want to update quantity: ')
// let quantity = Number(prompt('Enter new quantity: '))
// let newCart

// function updateQty(cart, name, qty){
//     let foundItem = cart.find((item) => {
//         return item.name.toLowerCase() === name.toLowerCase()
//     })

//     if(foundItem) {
//         newCart = cart.map((item) => {
//             if(foundItem === item) {
//                 return {...item, qty: qty} 
//             }
//             return {...item}
//         })
//         console.log('Updated quantity successfully')
//         console.log(newCart)
//     } else {
//         console.log("Unfortunately, we couldn't find the item you were looking for")
//     }
// }


// updateQty(cart, updateItem, quantity)


// WELL, IT WORKS BUT IT SEEMS LIKE IM NOT FOPLLOWING YTOUR INSTRUCTIONS BECAUSE THE CART IS STILL ORIGINAL AND NOTHINGS CHANGED
// AND THEN I JUST CREATED A NEWCART WHICH IS AN ARRAY OF WHAT YOU WERE LOOKING FOR....

// OR AM I WRONG? DID U WANT ME TO DO THE IMMUTABLE WAY WHICH IS WHAT I DID SO THAT I DONT CHANTGE THE ORIGINAL ONE?

// I ASSUME THAT IM DOING IT RIGHT...




// Program 1: Add Item (Guided)

// let newItem = prompt('Add a new item: ')
// let newCart;

// function addItem(cart, name) {
//     // Hmm, what array method should I use here... I'm thinking map
//     let addNewItem = cart.map((item) => {
//         if(item.name.toLowerCase() === newItem.toLowerCase()) {
//             console.log('Item already exists, please try again')
//             return
//         }
//         newCart = [...cart,
//             {...item, 
//                 name: name,  
//                 price: 0, 
//                 qty: 1}]
//         // I don't know if I'm doing this right....
//         console.log('Item will be added')
//         return newCart;
//     })
// }

// addItem(cart, newItem)

// Well, it kinda works but its running the same length as cart... so let me figure this out:

// let newItem = prompt('Add a new item: ')
// let newCart;

// function addItem(cart, name) {
//     let addNewItem = cart.map((item) => {
//         if(item.name.toLowerCase() === newItem.toLowerCase()) {
//             console.log('Item already exists, please try again')
//             return
//         }
//         newCart = [...cart,
//             {...item, 
//                 name: name,  
//                 price: 0, 
//                 qty: 1}]
//     })
//     console.log("Item added successfully...")
//     console.log("Here's your new cart:")
//     console.log(newCart)
// }

// addItem(cart, newItem)

// OH WOW, I HOPE THIS IS RIGHT, HEHEHEHEH


// Program 2: Full Cart System (Unguided)

console.log("FULL CART SYSTEM")
console.log("Press 1 to add a new item | Press 2 to remove item | Press 3 to update an item's quantity | Press 4 to get cart total | Press 5 to view cart | Press 6 to exit")

console.log("Here's your cart: ")
console.log(cart)

let newCart

// Damn, this is a lot

// ######## FUNCTIONS ########
// Well, I can just copy the functions above but nah, I'll do it all over again

// addItem
function addItem(obj, newItem) {
    let addNewItem = obj.map((item) => {
        newCart = [...cart,
            {...item,
                name: newItem,
                price: 0,
                qty: 1
            }
        ]
        console.log('Item added successfully!')
        return newCart
    })
}

// removeItem

// updateQty

// getTotal

// viewCart

function viewCart(obj) {
    if(obj === undefined) {
        console.log("You haven't updated your cart yet but here's your dummy cart")
        console.log(cart)
    } else {
        console.log("Here's your new cart: ")
        console.log(obj)
    }
}

while(true) {
    let userInput = prompt('Enter a choice: ')
    if(userInput === '1'){
        let userItem = prompt('Enter an item to add: ')
        addItem(cart, userItem)
    } else if (userInput === '2') {
    
    } else if (userInput === '3') {
        
    } else if (userInput === '4') {

    } else if (userInput === '5') {
        viewCart(newCart)
    } else if (userInput === '6') {
        console.log('Program shutting down...')
        break;
    } else {
        console.log('Invalid input, please try again')
    }
}