// # Arrow functions: Key Questions
// - How do arrow functions treat `this` differently than traditional functions?
// - When do I need { } curly braces with an arrow function? When can I skip them?

// - Under what circumstances will an arrow function implicitly return?

// Arrow Functions: 
    // EXACTLY one parameter -> Do not need parenthesis
    // No {} && single line -> Implicit return
    // Yes {} -> Explicit return


// fetch()
// .then(res => res.json())
// .then(res => (res.json()))
// .then((res)=> {return res.json()})


// Importance in Mod 4: 🔥🔥🔥🔥🔥



let arrayOfNumbers = [100, 23, 41, 192, 231]
let arrayOfStrings = ["zebra", "aardvark", "penguin", "chicken", "beef"]
let arrayOfObjs = [{name: "zebra"}, {name: "aardvark"}, {name: "penguin"}]


// ******* MAP

// Map is non-destructive 
// The callback for map needs to return the transformation
let doubleNum = arrayOfNumbers.map((singleNum) => {
    return singleNum * 2
}) 

// [{}, {}] -> [<html>, <html>]


// *******



// ******* FILTER

// Filter is non-destructive 
// The callback for filter needs to return a boolean
let allBigNumbers = arrayOfNumbers.filter((singleNumber) => {
    return singleNumber > 50
})
// let allBigNumbers = arrayOfNumbers.filter(num => num > 50)

let allAnimalsWithA = arrayOfStrings.filter(animal => animal.includes("a"))
let allAnimalObjsWithA = arrayOfObjs.filter(animalObj => animalObj.name.includes("a"))



// *******






// ******* SORT

// SORT is destructive
// The callback needs to return a number

let arrayOfNumbers2 = [...arrayOfNumbers]
let arrayOfStrings2 = [...arrayOfStrings]
let arrayOfObjs2 = [...arrayOfObjs]

arrayOfNumbers2.sort((numA, numB) => {
    return numA - numB
})

arrayOfStrings2.sort((animalA, animalB) => {
    return animalA.localeCompare(animalB)
})

arrayOfObjs2.sort((animalObjA, animalObjB) => {
    return animalObjA.name.localeCompare(animalObjB.name)
})


// *******
