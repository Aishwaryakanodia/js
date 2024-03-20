// Primitive data types

// 7 types:

// String. Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const ScoreVaue = 100.3
const LoggedIn = false
const outsideTemp = null

let useEmail;

const id = Symbol('123')
const another_id = Symbol('123')


console.log(id === another_id)

const bigNumber = 1233467658n

console.log(typeof bigNumber)


//Reference types (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj =
{
    name: "Aish",
    age: 22
}


const myFunction = function()
{
 console.log("Hello Aish")
}

console.log(typeof myFunction)