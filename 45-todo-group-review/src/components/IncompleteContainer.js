import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {


  renderIncomplete = () => {
    return this.props.todos.map(todo => <ToDoCard key={todo.id} todoObj={todo} handleComplete={this.props.handleComplete} />)
  }

  // When implementing the search bar, consider implementing state here to make it dynamic. 
  // i.e everytime you type in the input field, the ToDos are immediately filtered

  // state = {
  //     searchTerm: ""
  // }

  // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
  // SearchBarComponent

  // handleOnChange = () => {

  // }

  // When implementing the search term, consider implementing a function that FILTERs the todos.
  // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Incomplete Todos</h1>
        {this.renderIncomplete()}
        {/* <SearchBarComponent handleOnChange={this.handleOnChange}/> */}
        {/* Render ToDo Card for each ToDo */}
        {/* Which Array method can you use? */}
      </div>
    )
  }
}
