import React from 'react'

const ToDoCard = (props) => {
  console.log(props)

  let color
  if (props.todoObj.completed) {
    color = "orange"
  } else {
    color = "blue"
  }

  let buttonLabel
  if (props.todoObj.completed) {
    buttonLabel = "Incomplete"
  } else {
    buttonLabel = "Complete"
  }

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.todoObj.title}</div>
        {/* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete 
            */}
        <button onClick={() => props.handleComplete(props.todoObj)} className={`ui button ${color}`}>{buttonLabel}</button>
        <button onClick={null} className="ui button red">Delete</button>
      </div>

    </div>
  )
}

export default ToDoCard