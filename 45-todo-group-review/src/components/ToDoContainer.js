import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {

  state = {
    todos: []
  }

  handleNewTodo = (todo) => {
    const todos = [...this.state.todos, todo]

    this.setState({ todos })
    // this.setState({ todos: todos })
  }

  // C => spread
  // U => map
  // D => filter

  handleComplete = updatedTodo => {
    // todo.complete = false
    // [todo, todo, todo]
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === updatedTodo.id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    })
    this.setState({
      todos: updatedTodos
    })
  }

  componentDidMount() {
    fetch("http://localhost:3001/todos")
      .then(res => res.json())
      .then(todos => {

        this.setState({
          todos: todos
        }, () => { console.log(this.state.todos) }
        )
      }
      )
  }

  render() {

    return (
      <div id="todo-container">
        <NewToDoForm addNewTodo={this.handleNewTodo} />
        <CompletedContainer todos={this.state.todos.filter(todo => todo.completed)} />
        <IncompleteContainer handleComplete={this.handleComplete} todos={this.state.todos.filter(todo => !todo.completed)} />
      </div>
    );
  }
}
