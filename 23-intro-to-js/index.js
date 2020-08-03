// let/const are block-scoped
    // {}
// let - Can be assigned
// const - Cannot be assigned, but mutated

// var is function-scoped
    // function(){}
// var - Can be assigned

let arr = [5,4,3,2,1]

// function definition
    // Javascript does not have an implicit return
    // By default, if nothing is explitly returned, a function returns undefined

function isItEven(first_argument){
    if(first_argument.length % 2 === 0){
        console.log("IT IS EVEN")
    } else {
        console.log("IT IS ODD")
    }
}

// function invocation

isItEven(arr)
// console.logs("IT IS ODD")

// isItEven()
// Javascript implitly does not have an argument error
    // If an argument is not passed in, it'll assume to be undefined

isItEven
// Javascript treats functions as first-class citizens