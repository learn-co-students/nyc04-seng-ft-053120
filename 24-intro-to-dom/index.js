let arr = ["Dog","Cats","ABC","Words","Chicken"]

function isItEven(first_argument){
    if(first_argument.length % 2 === 0){
        console.log("IT IS EVEN")
    } else {
        console.log("IT IS ODD")
    }
}

// Invoking a function with an argument
// isItEven(arr)

// Referencing a function definition
// isItEven


// callbacks are function DEFINITIONS passed into an invocation of another function
    // arguments of a callback are dependent on the function the callback is being passed to
// arr.forEach( isItEven )

// OR

// callback's arguments are determined by the function receiving the callback
// How the callback is called is determined by the function receiving the callback 

// arr.forEach( function(singleElementOfTheArray){
//     console.log(singleElementOfTheArray)
//  } )






// DOM - Document Object Model(Web API) that allows us to work with objects representing the HTML

// READ // 

// QUERYSELECTOR:

// Find an element based on tagName ("h1")
// Find an element based on className (".className1.className2")
// Find an element based on ID("#id")
let h1Object = document.querySelector("h1")
let anotherWayToGrabUL = document.querySelector("#blobs")
let grabULByClass = document.querySelector(".blobs.js-blobs")

// QUERYSELECTORALL: 
// Returns a NodeList (similar to an array) which we can iterate over

// document.getElementById:
// Can only be called on the document
// Can only find an element by ID





// CREATE //



// 1) Go to the supply closet and get a blank sheet of paper
let tacoLi = document.createElement("li")



// 2) Razzmatazz (Add personal touches)
tacoLi.id = "taco"
tacoLi.className = "created"
tacoLi.classList.add("another")

// innerText represents the text between the opening and closing tag <p>"THIS IS INNER TEXT"</p>
tacoLi.innerText = "🌮"

// innerHTML knows how to work with HTML
// innerText does not



// 3) Slap it on the DOM
let ulObject = document.querySelector("ul")
ulObject.append(tacoLi)
// parent.append(childElement)

// ulObject.appendChild -> Can only append one element
// append -> Can append multiple arguments





// UPDATE //

// 1) Find the element we want to update
// let h1Object = document.querySelector("h1")

// 2) Razzmatazz
h1Object.innerText = "Here is a nice list, grandma! Just for you!"
h1Object.id = "added"





// DELETE //

// 1) Find the element we want to delete
// 2) Remove the element

// element.remove()

let allBadEmojis = document.querySelectorAll("li.bad")
allBadEmojis.forEach( function(badLi){
    console.log(badLi)
    badLi.remove()
} )