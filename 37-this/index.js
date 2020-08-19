// Regular baseless functions (function name(){}) take their `this` from the execution context
  // Who called on the method?

// Arrow functions get their value of `this` from their definition




// Bind - Bind is called on a function definition with an argument and returns a function definition with the argument being the `this`
// Call - Call is called on a function definition with an argument and executes the function definition with the argument being the `this`
// Apply - Apply is called on a function definition with an argument and executes the function definition with the argument being the `this`



function globalIntroduction(){
  console.log(this)
  return `Hello, I am ${this.djName}`
}


const ethan = {
  djName: "Smooth E",
  name: "Ethan",
  introduce: globalIntroduction
}

const otha = {
  djName: "Big O",
  name: "Otha",
  introduce: globalIntroduction
}

const eric = {
  djName: "Grandmaster Slamma Jamma",
  name: "Eric",
  introduce: globalIntroduction
}
  
  
// https://twitter.com/dan_abramov/status/790858537513656320   


// Snippet 1:
ethan.introduce()
// `this` inside the method is ethan


// Snippet 2
let methodPulledFromEthan = ethan.introduce
methodPulledFromEthan()
// `this` inside the method is the global object (window)


















// WHAT IS THE VALUE OF THIS?

document.querySelector("h1").addEventListener("click", function(evt){
  console.log(this)

  // this -> `h1` element
  // this -> evt.currentTarget (which HTML element is the recipient of the event listener)
  
})



let arr = [1, 4, 3, 4]
arr.forEach(function(element, index, originalArray) {
  console.log(this)
  // `this` -> window
  // `this` -> global Object
})






fetch("https://dog.ceo/api/breeds/image/random")
.then(function(res){
  console.log(this);
  // `this` -> window
  // `this` -> global Object
})





















