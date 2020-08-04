const emojisUl = document.querySelector("ul#blobs")
const tacoButton = document.querySelector("#taco")
const emojiForm = document.querySelector("#emoji-form")


// EVENTS
// 1) Find the element that needs to listen for our event
// 2) Tell the element you found to listen for an event
    // element.addEventListener("EVENT_NAME", function(evt){ 
        // DO SOME DOM MANIPULATION 
    // })


// Closure in JS -> Inside of a inner function's definition, you have access to the variables from the outer function

function turnStringIntoEmojiLi(str_argument){
    // "" -> <li></li>
    let blankEmojiLi = document.createElement("li")
    blankEmojiLi.innerText = str_argument
    
    let blankButton = document.createElement("button")
    blankButton.innerText = "x"

    blankEmojiLi.append(blankButton)
    emojisUl.append(blankEmojiLi)

    // On the HTML element, add some event listeners

    blankButton.addEventListener("click", function(evt){
      // console.log(str_argument) 
      blankEmojiLi.remove()
    })

}







tacoButton.addEventListener("click", function(evt){
    turnStringIntoEmojiLi("🌮")
})





emojiForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    let theFormElement = evt.target
    let inputElement = theFormElement["new-emoji"]
    let theThingThatTheUserTyped = inputElement.value
    // let theThingThatTheUserTyped = evt.target["new-emoji"].value

    turnStringIntoEmojiLi(theThingThatTheUserTyped)
})





// DELEGATION (NICE TO KNOW)

// 1) Look for a stable element
// emojisUl is the stable element

// 2) Add an event listener for that stable element

// 3) Use an if statement

// 4) Stable element decides what to do for its children



// emojisUl.addEventListener("click", function(evt){
//     if(evt.target.tagName === "BUTTON" && evt.target.innerText === "x"){
//         // evt.target -> Button inside of the LI
//         // evt.target.parentElement -> LI that is the parent of the X button
//         evt.target.parentElement.remove()
//     }
// })