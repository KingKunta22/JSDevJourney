const prompt = require('prompt-sync')()

// DAYYYY 21

const cart = [
  { name: "Dog Food", price: 500, qty: 2 },
  { name: "Cat Toy", price: 150, qty: 1 },
  { name: "Dog Leash", price: 300, qty: 3 },
  { name: "Bird Food", price: 100, qty: 10 }
];

// Exercise 1
function calculateItemTotal(item){
    console.log(item.price * item.qty)
    return item.price * item.qty
}

calculateItemTotal(cart[0])

// Exercise 2