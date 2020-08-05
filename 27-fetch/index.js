// When X event occurs
// Make Y Fetch
// Manipulate the Dom Z way


// element.addEventListener("EVENT_TYPE", (evt) => {
  // GET SOME VARIABLES TO HELP WITH YOUR FETCH

  // fetch("URL", {})
    // .then(res => res.json())
    // .then((theResponseThatIsNice) => {
      // MANIPULATE DOM HERE
    // })

// })


let dogButton = document.querySelector("#hello-button")
let dogsUl = document.querySelector("ul#dogs")




dogButton.addEventListener("click", function(evt){

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((dogObject) => {
      turnDogIntoHTML(dogObject)
    })

})





// FANCY ARROW FUNCTIONS

let turnDogIntoHTML = (dogObject) => {
  // {} -> <li><img src=""/></li>

  // CREATE A BLANK SHEET OF PAPER
  let dogLi = document.createElement("li")

  // FILL THE CONTENTS OF THAT PAPER (Razzmatazz)
  let blankImg = document.createElement("img")
    blankImg.src = dogObject.message
  dogLi.append(blankImg)
  
  // SLAP IT ON THE DOM 
  dogsUl.append(dogLi)
  
  // ADD SOME EVENT LISTENERS
  dogLi.addEventListener("click", (evt) => {
    dogLi.remove()
  })
  
}





// REGULAR FUNCTION DECLARATION

// function turnDogIntoHTML(dogObject){
// }

function oneWayToDeclareAFunction(){

}

let anotherWayToDeclareFunction = function(){

}

let anEasyWayToDeclareFunction = () => {

}

// Arrow Functions
  // If you have exactly one parameter, you don't need the parenthesis
  // If it's single lined and you do not have {}, there is an implicit return




// Promise Chaining
  // The return value of the callback for the first .then
  // becomes the argument of the callback for the second .then

