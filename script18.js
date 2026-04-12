const prompt = require('prompt-sync')()

// LOTS OF THINGS TO FIX FROM SCRIPT16 (1) TO SCRIPT 17(1)
// ALSO, THOSE ARRAY OF OBEJCTS, ARE THEY THE ONES CALLED JSON?

const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// // SCRIPT 16 (FIX): Add item (if exists → increase qty, else → add new)

// // So, first we can create a template for the newcart so that the original one will not be changed:
// let userInput = prompt('Add a product: ')
// let newCart;

// // then we first find the userInput
// const findItem = cart.find(item => item.name.toLowerCase() === userInput.toLowerCase())

// // Great, working as expected
// // Now, the part where I got stuck the most, the answer was to just assign the newCart a new object of cart that's changed
// // I js needed to understand that we assign the newCart variable to copy the cart without changing the cart object, I think

// // So if there is a found item, add qty, if none, just add a new product on the newCart but after the ...cart to copy the original ones
// // if(findItem){
// //   newCart = cart.map((item) => {
// //     return {...cart, qty: item.qty + 1}
// //   })
// // }

// // Well, that is incorrect because I'm not doing the map function right, let me fix it

// // if(findItem){
// //   newCart = cart.map((item) => {
// //     if(item.name.toLowerCase === userInput.toLowerCase()){
// //       return {...item, qty: item.qty + 1}
// //     }
// //     return item
// //   })
// // }

// // console.log(newCart)

// // Now, this time I dont know why its not working xd

// // if(findItem){
// //   newCart = cart.map((item) => {
// //     if(item.name.toLowerCase() === userInput.toLowerCase()){
// //       console.log('Found Item')
// //       return {...item, qty: item.qty + 1}
// //     }
// //     console.log('Not the item')
// //     return item
// //   })
// // }

// // console.log(newCart)

// // Okay, it wasnt working because I forgot the () :DDDD

// // if(findItem){
// //   newCart = cart.map((item) => {
// //     if(item.name.toLowerCase() === userInput.toLowerCase()){
// //       return {...item, qty: item.qty + 1}
// //     }
// //     return item
// //   })
// // } else {
// //   newCart = cart.map((item) => {
// //     return [
// //       ...cart,
// //       {
// //         name: userInput,
// //         price: 0,
// //         qty: 1
// //       }
// //     ]
// //   })
// // }

// // I mean it's working but why is it returning 3 times when I do console.log(newCart)?
// // console.log(newCart)

// // Oh, okay it was because I didn't have to use map, and I can just add a new item using return, wow I didnt know that, heres the clean one:
// if(findItem){
//   newCart = cart.map((item) => {
//     if(item.name.toLowerCase() === userInput.toLowerCase()){
//       return {...item, qty: item.qty + 1}
//     }
//     return item
//   })
// } else {
//   newCart = [
//     ...cart,
//     {
//       name: userInput,
//       price: 0,
//       qty: 1
//     }
//   ]
// }

// // Oh, and I didnt even have to use return because im just assigning a new value to the new cart, k
// console.log(newCart)



// SCRIPT 17 (FIX): DO ALL: Remove items with qty < 2; Apply ₱50 discount to remaining items; Get total price

// So, on this one, I always thought I can just do it in one entire map function, so the best way is to do it separately, here we go

// To remove items, i can just map a new array without that specific item

// let newCart = cart.map(item => item.qty >= 2)
// // So since new cart is a new array, we'll be proceeding from here and consider it as a new cart since basically
// // it's creating an illusion that the items with qty < 2 has been removed already (which it did, its just a new array without it)

// console.log(newCart)

// // So since we want EVERY property inside the array or EVERY object, we'll use another map
// const applyDiscount = newCart.map((item) => {
//   return item.price -= 50;
// })

// // Now, i am kinda confused if we can use { ...newCart or no}, but I believe no because we already have a new cart

// const getTotalPrice = newCart.reduce((total, item) => {
//   return total = item.price * item.qty
// }, 0)

// console.log('The new cart is ' + newCart)
// console.log('Total: ' + getTotalPrice)

// Oh wow, I didn't expect it to not work properly for both

// So, as I was checking for problems, the first function let newCart = ...map() is the most wrong one, I believe if I get that right, everything works

// Let me try again:

// let newCart = cart.map(item => item.qty >= 2)

// console.log(cart)
// console.log(newCart)

// Okay, what?!!! I thought newCart will have a transformed array of cart????? since I used map?

// const newCart = cart.map((item) => {
//   if(item.qty >= 2){
//     return item
//   }
// })

// console.log(newCart)

// THE FUCK? HOW IS THIS WORKING, I THOUGHT ITS THE SAME AS THE FIRST ONE(item => item.qty >= 2)
// IM SO FUCKING CONFUSED, YOU TOLD ME THAT THEY'RE THE SAME, 
// WHY IS THE SECOND ONE RETURNING VALUES OR OBJECT, WHILE THE FIRST ONE IS RETURNING RESULTS (true OR false)
// ALSO, WHY IS IT RETURNING UNDEFINED NOW? IT DIDNT DO THAT WHEN I USED TO DO THE MAP LIKE THIS WTF?
// I AM SO FUCKING CONFUSED WITH THIS MAP SHIT, I ALWAYS BELIEVED IT TRANSFORMS EVERY OBJ IN AN ARRAY BUT WHAT THE FUCK

// OKAY, IM JUST GONNA COPY THE WAY WE DID THINGS ON THE FIRST PROGRAM:

// const removeItems = cart.map((item) => {
//   if(item.qty >= 2){
//     return item
//   }
// })

// console.log(removeItems)

// MAN I AM FUCKING OCNFUSED, WHY THE FUCK IS IT RETURNING AN UNDEFINED WHEN I DIDNT EVEN CALL IT?????????

// OKAY, I JUST LOOKED UP YOUR PROMPT, AND IM FUCKING CONFUSED, I SHOULDVE USED FILTER INSTEAD OF MAP AND IM FUCKING TOO STUPID TO NOT NOTICE THAT

// let newCart = cart.filter((item) => {
//   if(item.qty >= 2){
//     return item
//   }
// })

// console.log('Initial: ' + newCart)

// const applyDiscount = newCart.map((item) => {
//   return item.price -= 50;
// })

// console.log('After discount: ' + newCart)

// Okay, what the hell???

// const newCart = cart.filter((item) => {
//   if(item.qty >= 2){
//     return item
//   }
// })

// console.log('Initial: ' + newCart)
// // WHY THE FUCK IS IT NOT RETURNING THE NEWCARt?????????????????????
// console.log(newCart)
// // IT ONLY FUCKING WORKS WHEN I RETURN THE newCart ONLYYYY


// const applyDiscount = newCart.map((item) => {
//   return item.price -= 50;
// })

// console.log('After discount: ' + newCart)

// // const getTotalPrice = newCart.reduce((total, item) => {
// //   return total = item.price * item.qty
// // }, 0)

// // console.log('The new cart is ' + newCart)
// // console.log('Total: ' + getTotalPrice)

// I AMS OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO FUCKING CONFUSED LIKE WHAT THE FUCK??????????????????????????????????????

const newCart = cart.filter((item) => {
  if(item.qty >= 2){
    return item
  }
})

const applyDiscount = newCart.map((item) => {
  return {...newCart, price: item.price -= 50}
  // WHAT EVEN IS THE DIFFERENCE BETWEEN THE ABOVE AND BELOW?? BOTH RETURNS THE SAME
  // return {...item, price: item.price -= 50}
})


// AND WHY THE FUCKING HELL IS IT NOT CALCULATING PROPERLY WHEN I AM 100 PERCENT SURE THIS IS THE FORMAT AND HOW IT LOOKS LIKE?????????????????????
const getTotalPrice = newCart.reduce((total, item) => {
  return total += item.price * item.qty
}, 0)
// WJATEVER. I FORGOT ITS +=, FML

console.log(newCart)
console.log(getTotalPrice)








// DAY 18


