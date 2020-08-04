console.log("Hello")

// STABLE ELEMENTS (Elements written out in index.html) GO HERE
const emojisUl = document.querySelector("ul#blobs")
const tacoButton = document.querySelector("#taco")
const emojiForm = document.querySelector("#emoji-form")


// EVENTS
// 1) Find the element that needs to listen for our event
console.log(tacoButton)

// 2) Tell the element you found to listen for an event
    // element.addEventListener("EVENT_NAME", function(evt){ 
        // DO SOME DOM MANIPULATION 
    // })

tacoButton.addEventListener("click", function(evt){
    let blankEmojiLi = document.createElement("li")
    blankEmojiLi.innerText = "🌮"
    emojisUl.append(blankEmojiLi)
})




emojiForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    // evt.preventDefault stops the page from refreshing

    // evt.target -> Answers the question of which element is the recipient of the event
    
    // For a submit event, evt.target is always the form
    // From a form (evt.target), we can access an input via its ID or name

    let theFormElement = evt.target
    let inputElement = theFormElement["new-emoji"]
    let theThingThatTheUserTyped = inputElement.value

    // let theThingThatTheUserTyped = evt.target["new-emoji"].value

    let blankEmojiLi = document.createElement("li")
    blankEmojiLi.innerText = theThingThatTheUserTyped
    emojisUl.append(blankEmojiLi)
})

// debugger
// Tool like byebug
// Refresh the page WITH the console tools open