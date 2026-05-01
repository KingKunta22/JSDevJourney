// DAY 24 (AFTER 10-DAY BREAK BRUH)

// Exercise 1

// function isValidQty(qty){
//     if(isNaN(qty)) {
//         return {error: "Not a number"}
//     } else {
//         return qty > 0
//     }
// }

// console.log(isValidQty('a'))

// // Okay, this is kinda working, and you're right, im confused rn because why is 25aaa return true? How would I check if it's completely a number
// // and not something like 24aaaa or '25', Oh and actually '25' should still be accepted right because javascript auto converts the type


// // Exercise 2

// // Okay, I am confused, do I need to copy everything from the previous file? I think so...
// // OR IDK, I DONT WANNA COPY EVERYTHING FROM THE PREVIOUS FILE AND PASTE, I WANNNA RESTART AND IDK WHAT UPDATE FUNCTION YOURE TALKING ABOUT, WHATEVER BRO

// function update(cart, targetItem, targetQty){
//   if(isNaN(targetQty)){
//     return {error: 'Invalid input'}
//   }
//   // I'll juist put this here after copying the entire function from my previous file because everythings just gonna take too much time to read
//   // I'd rather start over from scratch
//   if(targetQty < 0){
//     return {error: 'Invalid quantity'}
//   }

//   let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//   if(exists){
//     cart = cart.map((item) => {
//       if(item.name.toLowerCase() === targetItem.toLowerCase()){
//         return {...item, qty: targetQty}
//       }
//       return item
//     })
//     return cart
//   } else {
//     return {error: 'Item does not exist in the cart'}
//   }
// }


// Program 1: Response System

// BROTHER, I DONT EVEN REMEMBER THE FUNCTIONS NEEDED TO DO THE CART, I NEED TO START OVER THE CART STUFF AND ENGINE STUFF, WHY THE FUCK ARE YOU 
// GETTING ME CONTINUE THE STUFFS THAT I FORGOT, ID PROLLY FEEL LOST, OR IS THAT THE BEST OPTION HERE? TRY TO READ EVERYTHING AGAIN FROM MY PREVIOUS
// FILE AND THEN CONTINUE INSTEAD OF STARTING OVER AGAIN? ALL THE FUNCTIONS?????


// OKAY GREAT, EXACTLY WHAT I WANTED, GREAT JOB FOR UNDERSTANDING...


// DAY 24 (REBUILD SYSTEM, CONTINUE WHERE I LEFT OFF)

// Exercise 1:

// function isValidQty(qty){
//     if(isNaN(qty) || typeof qty !== 'number') {
//         return {error: "Not a number"}
//     } else {
//         return qty > 0
//     }
// }
// console.log(isValidQty(265))

// Okay, great, it's working nowww


// SYSTEM REBUILDING

let cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];


// Data Functions (DATA LAYER I BELIEVE)

function add(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        let updatedCart = cart.map((item) => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty + 1}
            }
            return item
        })
        return updatedCart
    } else {
        cart = [...cart, {
            name: targetItem,
            qty: 1,
            price: 0
        }]
        return cart
    }
}

// console.log(add(cart, 'Dog Food'))
// Wowwww, made everything without looking back at what I did, made everything from my brain, worked immediately without errors B)

// function remove(cart, targetItem){
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase()) 

//     if(exists){
//         cart = cart.map(item => {
//             if(item.name.toLowerCase() === item.name.toLowerCase()){
//                 return {...item, qty: item.qty - 1}
//             }
//             return item
//         })
//         let updatedCart = cart.filter(item => item.qty > 0)
//         return updatedCart
//     } else {
//         return {error: 'Item not found'}
//     }
// }

// console.log(remove(cart, 'Dog Food'))

// Okay, something's wromg, let me fix it...

function remove(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase()) 

    if(exists){
        let updatedCart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty - 1}
            }
            return item
        })
        updatedCart = updatedCart.filter(item => item.qty > 0)
        return updatedCart
    } else {
        return {error: 'Item not found'}
    }
}

// console.log(remove(cart, 'Cat Toy'))
// Okay, fixed it lmao

function update(cart, targetItem, targetQty){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())
    
    if(isNaN(targetQty) || typeof targetQty !== 'number' || targetQty < 0) {
        return {error: 'Invalid Quantity'}
    }

    if(exists){
        let updatedCart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()) {
                return {...item, qty: targetQty}
            }
            return item
        })
        return updatedCart
    } else {
        return {error: 'Item not found'}
    }
}

console.log(update(cart, 'Dog Food', 25))

// YEY, WORKING FIRST TRY, NO DEBUGGING NEEDEDDDD B)


// ENGINE LAYER

function cartEngine(cart, action, payload){
    if(action === 'add'){
        return add(cart, payload)
    } else if(action === 'remove'){
        return remove(cart, payload)
    } else if(action === 'update'){
        return update(cart, payload.name, payload.qty)
    } else {
        return {error: 'Action not specified'}
    }
}

// AFAI CAN REMEMBER, THATS HOW IT LOOKS LIKE XDDDD


// HANDLER (LOOP / CONTROLLER)

function handleRequest(cart, requests){

}

// WOAH, OKAY, I JUST REALIZED I HAD TO CHANGE THE CART ENGINE AND THE HANDLER... LET ME REDO IT BNASED FROM YOUR CODE...

