const prompt = require('prompt-sync')()

// DAYYYY 21

// const cart = [
//   { name: "Dog Food", price: 500, qty: 2 },
//   { name: "Cat Toy", price: 150, qty: 1 },
//   { name: "Dog Leash", price: 300, qty: 3 },
//   { name: "Bird Food", price: 100, qty: 10 }
// ];

// // Exercise 1
// function calculateItemTotal(item){
//     console.log(item.price * item.qty)
//     return item.price * item.qty
// }

// // Exercise 2
// function isCartEmpty(cart) {
//     if(cart.length === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// // Well, I think both works properly

// // Program 1 (Guided)

// function getTotal(cart){
//     let total = cart.reduce((sum, item) => {
//         return sum + item.price * item.qty
//     }, 0)
//     return total
// }

// let userCash = Number(prompt('Enter your cash: '))
// function processCheckout(cart, cash){
//     let total = getTotal(cart)

//     if(cash < total){
//         return {
//             error: 'Insufficient Balance',
//             cash: cash,
//             total: total,
//             // Question, how does this return {} line work? How does the function even know what error:, cash:, and total:, 
//             // stands for, and where do they even output???
//         }
//     }

//     let change = cash - total

//     return {
//         cash: cash,
//         total: total,
//         change: change
//     }
//     // Surely, that returns an object right? Is that what u meant? Or do you mean, create a new object for the checkout with these items and then
//     // jsut return the variable?
// }

// let result = processCheckout(cart, userCash);
// console.log(result);

// Okay, it's working, and it returned an object, wow
// What do you call it when I put everything inside a let result or a variable? then call the variable?


// Program 2 (Unguided)

const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// function applyDiscount(cart, percent) {
//     cart = cart.map((item) => {
//         return item.price = item.price - percent
//     })
// }
// Well, this is incorrect because we're doing percentages, not literal numbers, let me try again

// function applyDiscount(cart, percent) {
//     let discount
//     cart = cart.map((item) => {
//         // I just know that we need like 0. + percent here or maybe 1. + percent to get the complete discount of the price calculated, but how 
//         // would I do that xd
//         discount = percent
//         return item.price = item.price - percent
//     })
// }

// Oh okay, I looked up the formula (NOT THE EXACT CODE), then understood ittt
// AGAIN:

let percentDiscount = Number(prompt('Apply discount percentage (%): '))
function applyDiscount(cart, percent) {
    cart = cart.map((item) => {
        let discount = item.price * (percent / 100) // This should return a decimal righttt.. rightt???
        return {...item, price: item.price - discount } // UHMM...... I HOPE THIS WORKS XD
    })
    return cart
}

// Okay, this is working, but do I need to multiply the quantity to the price to get the exact discount or no need? Just for each item?
// Well, in this case, I believe you mean per item, so I'm just gonna leave it like that

// Oh, and actually, this is correct, I don't need to multiply the qty to the price because we're getting the per item, not the total, and 
// we should't apply discounts after the purchase total right? It should be per item...

// On this function, do I need to use the applyDiscount function or no? I think yes
// Actually, I think the original cart gets changed with the correct applied discount because we already called it, no?
// OH WOW, I JUST CHECKED IT AND IT DIDN'T CHANGE THE ORIGINAL STATE.......
// function generateReceipt(cart, cash) {
//     cart = applyDiscount(cart, percentDiscount) // Well, I hope this is right XD

    
// }

// generateReceipt(cart)

// OH, I THINK I NEED  TO DO GET TOTAL FUNCTION (EVEN IF IT WASN'T INDICATED) SO THAT I CAN JUST USE IT INSIDE THE GNEERATE RECEIPT AND HAVE
// DIFF FUNCTION FOR IT

function getTotal(cart) {
    cart = applyDiscount(cart, percentDiscount)

    let total = cart.reduce((sum, item) => {
        return sum + item.qty * item.price
    }, 0)
    return total
}

// function generateReceipt(cart){
//     let total = getTotal(cart)

//     console.log(total)
//     console.log(cart)
// }

// generateReceipt(cart)

// THIS GENERATERECEIPT ISN'T USING THE CART WITH APPLIED DISCOUNT EVEN IF I CCALLED THE GETTOTAL FUNCTION WITH THE APPLIED DISCOUNT
// WELL, I THINK I NEED TO ADD APPLY DISCOUNT FUNCTION AGAIN ON THE GENERATE RECEIPT FUNCTION TO GET THE UPDATED CART... SINCE THE
// GETTOTAL ONLY RETURNS A NUMBER...

let userCash = Number(prompt('Input your cash here: '))
function generateReceipt(cart, cash){
    let total = getTotal(cart)
    cart = applyDiscount(cart, percentDiscount)

    if(total > cash) {
        return {
            error: 'Insufficient Balance',
        }
    }

    let change = cash - total
    
    return {
        ...cart,
        cash: cash,
        total: total,
        change: change
    }
    // Hopefully, this works, but i think not becasue im cominbing the cart to those properites, shoudl I js use [...cart]?
}
console.log(generateReceipt(cart, userCash))

// Okay, it's working, but if I want to not return the entire cart, and just reutrn all the item names, it's qty, and total, how would I do that? 
// To format it properly and then remove the indexes becsifde them? Use a loop?

// Anyway, what does cart engine do and what does it even mean?
function cartEngine
// YEA, I LOOKED IT UP, AND BASED ON WHAT I UNDERSTOOD, PUT EVERYTRHING (EVVERY FUNCTION) AND PUT IT ON CARTENGINE FUNCTION TO RETURN DATA...
// but what does those arguments even mean?!!!!! I AM SOOOO LOST AND CONFUSED, AND EVEN IF I TAKE LIEK 2 HOURS FIGURING THIS OUT, I'LL END UP USING AI
// AND THEN STILL NOT UNDERSTAND SHIT....