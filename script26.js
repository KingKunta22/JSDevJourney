// let cart = []

// function add(cart, targetItem){
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists){
//         // cart = cart.map(item => {
//         //     item.name.toLowerCase === targetItem.toLowerCase()
//         //         ? return {...item, qty: item.qty + 1}
//         //         : return item
//         // })
//         // Tried to follow what u did, the shorthand syntax for if else statement...
//         return cart.map(item => {
//             item.name.toLowerCase() === targetItem.toLowerCase()
//                 ? {...item, qty: item.qty + 1}
//                 : item
//                 // So I don't have to add return? it's already there but invisible?
//         })
//         // console.log(cart) Why the hell is name undefined...
//     }

//     return [...cart, { name: targetItem, qty: 1 }]
// }

// const input = document.querySelector('#itemInput')
// // const button = document.querySelectorAll('#addBtn') // Why is this not accepted?
// const button = document.getElementById('addBtn') // And this is?
// const list = document.querySelector('#cartList')

// // Oh okay, it seems like my assignemtn is incorrect, afaik i can use queryselectorall
// // but why isnt this working in my case?

// button.addEventListener('click', () => {
//     const item = input.value

//     // I actually just added this and I wanna practice it to make sure valid inputs
//     // and do u think its a good idea... XDD
//     if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/)) { 
//         alert('Invalid Input');
//         return
//     }

//     cart = add(cart, item)
//     renderCart()
// })

// // function renderCart(){
// //     // Okay, this one got me a bit confused now even though I understand it...
// //     list.innerHTML = ''

// //     cart.forEach(item => {
// //         const li = document.createElement('li')
// //         li.textContent = `${item.name} - Qty: ${item.qty}`
// //         list.appendChild(li)
// //     })
// // }

// // Okay, there's a problem when adding the same name, it doesnt qty++...
// // I tried fixing it on the add function but still the same, so it must be the rendercart
// // Let me try and fix it...
// // and also, what the fuck is this 
// //      WebSocket connection to 'ws://localhost:8080//ws' failed: 

// function renderCart(){
//     list.innerHTML = ''

//     cart.forEach(item => {
//         const li = document.createElement('li')
//         li.textContent = `${item.name} - Qty: ${item.qty}`
//         list.appendChild(li)
//     })
// }

// LET ME PUT EVERYTHING BELOW FOR ME TO READ IT BETTER...

// let cart = []

// function add(cart, targetItem){
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists){
//         cart = cart.map(item => {
//             // item.name.toLowerCase() === targetItem.toLowerCase()
//             //     ? {...item, qty: item.qty + 1}
//             //     : item // Okay, I have to go back to the traditional if else
//             // to really see what the issue is...
//             if(item.name.toLowerCase() === targetItem.toLowerCase()){
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//             // Wait, whys it working when I just converted it to the usual if else that I
//             // do on this part? I am so losttt... Anyway, its working but idk
//             // I mean it shouldve been working, I think its the syntax because I'm not fully
//             // familiar with the shorthand if else and itm ight've done something that I
//             // didn't know it does.....
//         })
//         return cart
//     }

//     return [...cart, { name: targetItem, qty: 1 }]
// }

// const input = document.querySelector('#itemInput')
// const button = document.getElementById('addBtn')
// const list = document.querySelector('#cartList')

// button.addEventListener('click', () => {
//     const item = input.value

//     if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/)) { 
//         alert('Invalid Input');
//         return
//     }

//     cart = add(cart, item)
//     renderCart()
// })

// // function renderCart(){
// //     list.innerHTML = ''

// //     cart.forEach(item => {
// //         const li = document.createElement('li')
// //         const newBtn = document.createElement('button')
// //         newBtn.textContent = 'x'
// //         // li.textContent = `${item.name} - Qty: ${item.qty}` + `<button id="$item.name> X </button>`
// //         // Well, that didn't work XDDD
// //         li.textContent = `${item.name} - Qty: ${item.qty} ` + newBtn
// //         list.appendChild(li)
// //     })
// // }

// // Still doesn't work, let me retry it XDD
// const newBtn = document.createElement('button')
// newBtn.textContent = 'x'

// function renderCart(){
//     list.innerHTML = ''

//     cart.forEach(item => {
//         const li = document.createElement('li')
//         li.textContent = `${item.name} - Qty: ${item.qty} `
//         li.appendChild(newBtn) // well, i mean this is kinda oworking xddd
//         list.appendChild(li)
//     })
// }

// // newBtn.addEventListener('click', () => {
// //     cart.forEach(item => {
// //         remove(cart, item)
// //     })
// // })
// // THIS IS SO WRONG, I KNOW

// newBtn.addEventListener('click', () => {
//     cart.forEach(item => {
//         cart = remove(cart, item)
//     })
//     renderCart()
// })

// // Okay, that took me a while and that wasn't even the real challenge, here's the challenge:
// function remove(cart, targetItem){
//     // I believe we dont have to add an exist variable because each existing item has assigned
//     // x button already
//     cart = cart.map(item => {
//         if(item.name.toLowerCase() === targetItem.toLowerCase()){
//             return {...item, qty: item.qty - 1}
//         }
//         return item
//     })
//     let updatedCart = cart.filter(item => item.qty > 0)
//     return updatedCart
// }

// YEP, IM SO LOST AND IDK WHAT TO DO HERE... LET ME REWRITE EVERYTHING BELOW...

// let cart = []

// function add(cart, targetItem){
//     let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

//     if(exists){
//         cart = cart.map(item => {
//             if(item.name.toLowerCase() === targetItem.toLowerCase()){
//                 return {...item, qty: item.qty + 1}
//             }
//             return item
//         })
//         return cart
//     }

//     return [...cart, { name: targetItem, qty: 1 }]
// }

// const input = document.querySelector('#itemInput')
// const button = document.getElementById('addBtn')
// const list = document.querySelector('#cartList')

// button.addEventListener('click', () => {
//     const item = input.value

//     if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/)) { 
//         alert('Invalid Input');
//         return
//     }

//     cart = add(cart, item)
//     renderCart()
// })

// const newBtn = document.createElement('button')
// newBtn.textContent = 'x'

// newBtn.addEventListener('click', () => {
//     cart.forEach(item => {
//         console.log(cart)
//         cart = remove(cart, item)
//         console.log(cart)
//     })
//     renderCart()
// }) // Wait, this whole stuff I made is working thoughhhhhh, the 
// // remove function should bethe prob

// function remove(cart, targetItem){
//     let updatedCart = cart.map(item => {
//         if(item.name.toLowerCase() === targetItem.toLowerCase()){
//             return {...item, qty: item.qty - 1}
//         }
//         return item
//     })
//     updatedCart = cart.filter(item => item.qty > 0)
//     return updatedCart
// }

// function renderCart(){
//     list.innerHTML = ''

//     cart.forEach(item => {
//         const li = document.createElement('li')
//         li.textContent = `${item.name} - Qty: ${item.qty} `
//         li.appendChild(newBtn)
//         list.appendChild(li)
//     })
//     // Why is it only applying the newBtn to the latest added item, when I added it inside the
//     // foreach loop? I might need to know what foreach really does XDD or when to do it or idk
// }

// Okay, so it seems like it's only adding the newBtn to the latest added item,
// and when I click the x button or newBtn, it shows an error that is completely, not related
// to what the problem is, so im having a hard time figuring out, and this is most likely a
// logical error since I can't tell which ones the problem
//      Uncaught TypeError: targetItem.toLowerCase is not a function


// Okay, let me try a diff approach: 

let cart = []

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
    }

    return [...cart, { name: targetItem, qty: 1 }]
}

const input = document.querySelector('#itemInput')
const button = document.getElementById('addBtn')
const list = document.querySelector('#cartList')

button.addEventListener('click', () => {
    const item = input.value

    if(!item.match(/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/)) { 
        alert('Invalid Input');
        return
    }

    cart = add(cart, item)
    renderCart()
})

function remove(cart, targetItem){
    // console.log('remove function called')
    let updatedCart = cart.map(item => {
        // if(item.name.toLowerCase() === targetItem.toLowerCase()){ // Bruh, there's nothing wrong with thisss
        if(item.name === targetItem){
            // console.log('found the item to remove')
            return {...item, qty: item.qty - 1}
        }
        // console.log('not the item to remove')
        return item
    })
    updatedCart = updatedCart.filter(item => item.qty > 0)
    return updatedCart
}

function renderCart(){
    list.innerHTML = ''

    cart.forEach(item => {
        const li = document.createElement('li')
        li.textContent = `${item.name} - Qty: ${item.qty} `
        const newBtn = document.createElement('button')
        newBtn.textContent = 'x'
        li.appendChild(newBtn)
        list.appendChild(li)

        newBtn.addEventListener('click', () => {
            cart = remove(cart, item.name)
            renderCart() // So, on this part, I didn't try this because its inside the render cart function
            // already, and i didnt know how it would work if the function is called inside its own function
        })

    })
}

// Okay, its now adding newBtn to each item but it still doesnt function properly
// Okay, its now silently failing buttt idk why adding .toLowerCase() fucks up everything

// And also, I believe I need to assign id per item doing osmething like newBtn.id = item[i].name or wtv

// But idk how to do that, foreach really is the key but idk how it workss completely unlike the map stuffs i did

// I'll try doing the total part because update seems to be a lot more complicted
// function totalItems(cart){
//     for(i = 0; i < cart.length; i++){
//         i++
//     }
//     let total = i + 1
//     return total
// }
// That's wrong because I forgot I nheed to consider the qty

function totalItems(cart){
    let total = cart.reduce((sum, item) => {
        return sum + item.qty
    }, 0)

    return total
}

const getTotalBtn = document.getElementById('getTotal')
const total = document.getElementById('total')

// getTotal.addEventListener('click', () => {
//     let total = document.createElement('h1')
//     total.textContent = totalItems(cart)
//     getTotal.appendChild(total)
// })

// That's too complicated, let me try a different approach (adding new button and new h1 with span instead of
// manually creating it through js)

getTotalBtn.addEventListener('click', () => {
    total.textContent = totalItems(cart)
})

// Perfectly WORKINGGGG, its just the remove and the update that im stuck with....