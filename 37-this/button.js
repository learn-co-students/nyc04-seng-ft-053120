let mainDiv = document.querySelector("#main-div")
// Component: Function that returns HTML (structured + with event listeners)

class ButtonJS{

  constructor(color_argument){
    // `this` -> is the instance being created
    this.color = color_argument

    this.buttonTag = document.createElement("button")
      this.buttonTag.innerText = `Color: ${this.color}`
      mainDiv.append(this.buttonTag)

    this.buttonTag.addEventListener("click", this.handleClick)
    // this.handleClick is being used as the callback above
      // this.handleClick is an instance method

      // REACT:
      // <button onClick={this.handleClick}>Color: {this.props.color}</button>
  }



  handleClick = (evt) => {
    // `this` may not be the instance when using baseless functions
        // <button></button>

    // `this` is the instance of the COMPONENT when using arrow functions
        // ButtonJS{color: "red", buttonTag: <button></button>}

    console.log("THIS IS WHAT THIS IS:", this)
    document.body.style.backgroundColor = this.color
  }

}


let cyanButton = new ButtonJS("cyan")
let redButton = new ButtonJS("red")