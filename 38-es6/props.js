// Is there a shorthand way to create properties in an object literal
// that have the the same names as variables I have in scope?

  // Variables -> Object
// Importance in Mod 4: 🔥🔥

let name = "Eric Kim"
let age = 11
let eating = ["junk", "garbage"]

let eric = {
  name,
  age,
  eating
}

// const eric = {name, age, eating}
// console.log(eric);


// APPLICATION:
// JSON.stringify({attribute1, attribute2, attribute3})









// Is there a way to dynamically define (or compute) property names
// in an object literal e.g. based on the value of a variable?

// The key of my object is to be dynamically determined by a variable
// Importance in Mod 4: 🔥🔥🔥

  const whatIwantToDoMore = "dance";

  const newYearsResolution = {
    goal: "Write code every day",
    [whatIwantToDoMore]: "more"
  }

console.log(newYearsResolution);
// APPLICATION:
// CONTROLLED COMPONENTS
// {[evt.target.name]: evt.target.value}