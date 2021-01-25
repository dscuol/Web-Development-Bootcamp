// Arrow Functions

// function greetings(name) {
//     console.log(`Hello ${name}`)
// }

// greetings("Saad")

// const greetings = (name) => console.log(`Hello ${name}`)

// greetings("saad")


// Synchronous Code

// console.log("Start")

// const greetings = (name) => console.log(`Hello ${name}`)

// greetings("saad")

// console.log("End")

// Asynchronous Code

// console.log("Start")

// // setTimeout(() => {
// //     console.log("Data is here")
// // }, 5000)

// function loginUser(email, pass) {
//     setTimeout(() => {
//         console.log("Data is now available")
//         return { useremail: email, password: pass }
//     }, 1500)
// }

// const user1 = loginUser("saad@goomail.com", 123445)

// console.log(user1)

// console.log("End")

// Callbacks

console.log("Start")

function loginUser(email, pass, callback) {
    setTimeout(() => {
        console.log("Data is now available")
        callback({ useremail: email, password: pass })
    }, 1500)
}

const user1 = loginUser("saad@goomail.com", 123445, user => {
    console.log(user)
})

// console.log(user1)

console.log("End")

// Async Code