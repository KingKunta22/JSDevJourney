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

let cart = []

function add(cart, targetItem){
    let exists = cart.find(item => item.name.toLowerCase() === targetItem.toLowerCase())

    if(exists){
        cart = cart.map(item => {
            // item.name.toLowerCase() === targetItem.toLowerCase()
            //     ? {...item, qty: item.qty + 1}
            //     : item // Okay, I have to go back to the traditional if else
            // to really see what the issue is...
            if(item.name.toLowerCase() === targetItem.toLowerCase()){
                return {...item, qty: item.qty + 1}
            }
            return item
            // Wait, whys it working when I just converted it to the usual if else that I
            // do on this part? I am so losttt... Anyway, its working but idk
            // I mean it shouldve been working, I think its the syntax because I'm not fully
            // familiar with the shorthand if else and itm ight've done something that I
            // didn't know it does.....
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

function renderCart(){
    list.innerHTML = ''

    cart.forEach(item => {
        const li = document.createElement('li')
        li.textContent = `${item.name} - Qty: ${item.qty}`
        list.appendChild(li)
    })
}