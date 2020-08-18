class Person {
  constructor(school_name){
    this.school = school_name
  }

  // This method becomes available in the chain of __proto__ for the instance
  eat(){
    return "I am eating!"
  }
}


class Instructor extends Person{

  constructor(name_arg, djName_arg, school_name){
    // Constructor runs when we instantiate a new instance
      // `this` inside the constructor references the instance being created

    // Whenever you construct a subclass, just write `super()`
    super(school_name)
    this.name = name_arg
    this.djName = djName_arg
  }

  // Arrow functions are your friends *****
    // Arrow functions become key-value pairs
  dance = () => {
    // as an instance method, it would be great if `this` was the instance
    return `${this.name} is dancing!`
  }

  // Regular functions are nice *
    // Regular functions get added to the instance's __proto__
  sing(){
    return `${this.name} is singing!!!!`
  }

}







// Creating instances in JS
  // Each instance gets __proto__ object from the class definition
  // Class definition provides the prototype

let ericInstructor = new Instructor("Eric", "Grandmaster Slamma Jamma", "Flatiron")
let ethanInstructor = new Instructor("Ethan", "Smooth E", "Flatiron")
let othaInstructor = new Instructor("Otha", "Big O", "Flatiron")














// Downside of using POJOs (Plain old javascript objects)
  // 1. Lack of consistency
  // 2. Potential memory issues

// The way JS compares non-primitives (Objects) is by their place in memory
  // functions, arrays, POJOs are objects

function globalIntroduction(){
  return `Hello, I am ${this.name}`
}

const ethan = {
  fullName: "Ethan Fournier",
  name: "Ethan",
  introduce: globalIntroduction
}

const otha = {
  fullName: "Otha Hernandez",
  name: "Otha",
  introduce: globalIntroduction
}

const eric = {
  djName: "Grandmaster Slamma Jamma",
  name: "Eric",
  introduce: globalIntroduction
}




// console.log(eric.introduce)
// console.log(eric.introduce())
// console.log(eric.introduce() === ethan.introduce())
// console.log(eric.introduce === ethan.introduce)


