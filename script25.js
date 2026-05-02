// DAY 25  -  CLI PROGRAM (FINAL BOSS IG)

const prompt = require('prompt-sync')()

// I am gonna follow your rules and will look for help if I get stuck on this stuff after a day XD

let cart = []

// CLI CART SYSTEM - DATA LAYER

// View Cart
function view(cart){
    console.log(cart)
}

// Add Item
function add(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        cart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty + 1}
            }
            return item
        })
        return cart
    } else {
        let updatedCart = [...cart, {
            name: targetItem,
            qty: 1,
            price: 0
        }]
        return updatedCart
    }
}

// Remove Item
function remove(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        cart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty - 1}
            }
            return item
        })
        let updatedCart = cart.filter(item => item.qty > 0)
        return updatedCart
    } else {
        return {error: 'Item does not exist'}
    }
}

// Update Item
function update(cart, targetItem, targetQty){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        cart = cart.map(item => {
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: targetQty}
            }
            return item
        })
        return cart
    } else {
        return {error: 'Item does not exist'}
    }
}

// Show Total
function total(cart){
    let total = cart.reduce((sum, item) => {
        return sum + item.price * item.qty
    }, 0)
    
    return total
}

// Clear Cart
function clear(cart){
    cart = []
}

// Exit
function exit(){ // What do u even do with this XDDDD, nvm ill figure it out later
    
}


// CLI CART SYSTEM - ENGINE
function cartEngine(cart, action, payload){

    if(action === 'add'){
        return {status: 'success', data: add(cart, payload)}
    }

    if(action === 'remove'){
        let result = remove(cart, payload)
        if(result.error) return {status: 'error', message: error.message}
        return {status: 'success'}
    }

    if(action === 'update'){
        let result = update(cart, payload.name, payload.qty)
        if(result.error) return {status: 'error', message: error.message}
        return {status: 'success'}
    }

    if(action === 'clear'){
        return {status: 'success', data: clear(cart)}
    }

    if(action === 'exit'){
        
    }
}


// CLI CART SYSTEM - HANDLER

let running = true // Well, new stuff learned, this looks smart instead of js doing while(true)