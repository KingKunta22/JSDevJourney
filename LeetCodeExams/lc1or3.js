// Finished day 1 and day 2 of 30 days of javascript course:

// 2704. To Be Or Not To Be
// ------ Write a function expect that helps developers test their code. 
//        It should take in any value val and return an object with the following two functions.


// function expect(val1) {
//     function toBe(val2) {
//         if(val1 === val2) {
//             return true
//         } else {
//             return {error: 'Not Equal'}
//         }
//     }

//     function notToBe(val2) {
//         if(val1 !== val2) {
//             return true
//         } else {
//             return {error: 'Equal'}
//         }
//     }
//     // I'm now stuck here becaus idk what to put below, theres no variabel that i can call from both functions XDDD
//     return {value: }
// }

// expect(5).toBe(5)

// Bruh, deepseek literally gave me the answer so here's a custom one i asked it for:


// THE PROBLEM: "Discount Validator"
// You need to write a function checkPrice(price) that returns an object with two methods:
// .discount(code) - accepts a discount code string
// If code is "SAVE10" → return the price with 10% off
// If code is "SAVE20" → return price with 20% off
// If code is anything else → throw error "Invalid code"
// .tax(rate) - accepts tax rate as decimal (0.08 = 8%)
// Returns price + (price × rate)
// If rate is negative or over 1 → throw error "Invalid tax rate"

function checkPrice(price) {
    return {
        discount: function(code){
            if(code === 'SAVE10') {
                return price = price - (price * 0.10)
            } else if(code === 'SAVE20') {
                return price = price - (price * 0.20)
            } else {
                throw new Error('Invalid Code')
            }
        }
    }
}

checkPrice(100).discount('SAVE10')