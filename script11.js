const prompt = require('prompt-sync')();


// Day 10 Fixes

// // Exercise 2: Bank Account

// let bankAccount = {
//     name: 'John',
//     balance: 5000,

//     deposit: function(amount) {
//         this.balance += amount
//         console.log('Transacton Successful! Your updated balance is: ' + this.balance)
//     },

//     withdraw: function(amount) {
//         if(amount > this.balance){
//             console.log('Invalid Transaction (Your balance is: ' + this.balance + ')')
//             return
//         }

//         this.balance -= amount
//         console.log('Transaction Successful! Your updated balance is ' + this.balance)

//         // Question, why does doing let balance = this.balance not work?
//     }
// }

// bankAccount.withdraw(200)
// bankAccount.deposit(700)
// bankAccount.withdraw(4500)
// bankAccount.withdraw(1000)
// bankAccount.withdraw(500)

// Okay, now this is working, but I am still confused about how doing let balance = this.balance not work
// Didn't we do that previously? Like getting the value from the object then reassigning it to a variable to use it or no?



// // Exercise 3: Counter

// let counter = {
//     num: 1,

//     increment: function() {
//         this.num++
//         console.log(this.num);
//     },

//     decrement: function() {
//         if(this.num <= 0){
//             console.log('Returns negative')
//             return
//         }

//         this.num--
//         console.log(this.num);
//     },

//     reset: function() {
//         this.num = 0;
//         console.log(this.num);
//     }
// }

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// // 6
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// counter.decrement();
// // 0
// counter.increment();
// counter.increment();
// // 2
// counter.reset();


// // Well, this isn't what I expected, it's returning:
//     // 0
//     // -1
//     // 0
//     // 1
//     // 2
//     // 3
//     // 0
// // This could be because of the reset function right? It's color is green meaning, javascript is reading it not as a function but something else
// // It could be like one of javascript's methods or whatever

// // Or idk, when I did it again, it's working properly, I just changed: if(this.num < 0){ to if(this.num <= 0){







// // Clean Inventory System

// let products = [
//     {
//         name: 'Dog Food (Dry)',
//         price: 100,
//         stock: 12,
//     },
//     {
//         name: 'Dog Food (Wet)',
//         price: 120,
//         stock: 25,
//     },
//     {
//         name: 'Cat Food (Dry)',
//         price: 110,
//         stock: 20,
//     },
//     {
//         name: 'Cat Food (Wet)',
//         price: 115,
//         stock: 23,
//     }
// ]



// function viewProducts(obj) {
//     console.log("Here's the list of our products: ")

//     for(let i = 0; i < obj.length; i++){
//         console.log(obj[i].name + ': ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
//     }
// }


// function buyProducts(obj) {

//     for(let i = 0; i < obj.length; i++){
//         console.log('Enter ' + i + ' to buy ' + obj[i].name + ' for ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
//     }

//     let selected = Number(prompt('Enter your choice: '))
//     // This was the part that I fucked up, I didn't have to loop since selected can already be used as the index of the object the user wants to purchase
//     // That took me a while to understand, but let me do it right this time: 
//     if(obj[selected].stock <= 0){
//         console.log('Unfortunately, this product is out of stock, please try another product')
//         selected = Number(prompt('Enter another product: '))
//     } else {

//         obj[selected].stock--

//         console.log(obj[selected].name + ' has been successfully purchased! (' + obj[selected].stock + ' left)')
//         console.log('Would you like to buy the same product? Enter 1 to continue, 2 to purchase another product, 3 to exit')

//         let secondChoice = prompt('')

//         if(secondChoice === '1'){
//             obj[selected].stock--
//             console.log(obj[selected].name + ' has been successfully purchased! (' + obj[selected].stock + ' left)')
//         } else if(secondChoice === '2'){
//             selected = Number(prompt('Enter another product: '))
//         } else {
//             return;
//         }
//     }
//     // Well, this is pretty long and it's nested, so idk, a switch statement could've been better here or idk
// }

// // So I know this is too much and it's actually wrong, but let me just fix it because I am doing too much
// // to the point that it's not working properly lool

// console.log('Enter 1 to view products | Enter 2 to buy a product | Enter 3 to exit')

// let userInput = prompt('')

// while(true){
//     if(userInput === '1'){
//         viewProducts(products)
//         userInput = prompt('')
//     } else if(userInput === '2'){
//         buyProducts(products)
//         userInput = prompt('')
//     } else if(userInput === '3'){
//         break;
//     } else {
//         console.log('Invalid input, please try again')
//         break;
//     }
// }

// Loop


// Clean Inventory System

let products = [
    {
        name: 'Dog Food (Dry)',
        price: 100,
        stock: 12,
    },
    {
        name: 'Dog Food (Wet)',
        price: 120,
        stock: 25,
    },
    {
        name: 'Cat Food (Dry)',
        price: 110,
        stock: 20,
    },
    {
        name: 'Cat Food (Wet)',
        price: 115,
        stock: 23,
    }
]



function viewProducts(obj) {
    console.log("Here's the list of our products: ")

    for(let i = 0; i < obj.length; i++){
        console.log(obj[i].name + ': ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
    }
}


function buyProducts(obj) {

    for(let i = 0; i < obj.length; i++){
        console.log('Enter ' + i + ' to buy ' + obj[i].name + ' for ₱' + obj[i].price + ' (' + obj[i].stock + ' left)')
    }

    let selected = Number(prompt('Enter your choice: '))

    if(obj[selected].stock <= 0){
        console.log('Unfortunately, this product is out of stock, please try another product')
        return
    } else {

        obj[selected].stock--

        console.log(obj[selected].name + ' has been successfully purchased! (' + obj[selected].stock + ' left)')
        return
    }
}

console.log('Enter 1 to view products | Enter 2 to buy a product | Enter 3 to exit')

let userInput = prompt('')

while(true){
    if(userInput === '1'){
        viewProducts(products)
        userInput = prompt('')
    } else if(userInput === '2'){
        buyProducts(products)
        userInput = prompt('')
    } else if(userInput === '3'){
        break;
    } else {
        console.log('Invalid input, please try again')
        break;
    }
}

// Part 3

// As you said, storing the object's value inside a variable isn't the correct way, it basically duplicates the real value inside the obj
// instead of the REAL value, not duplicate it
// So it should be this.balance += 100