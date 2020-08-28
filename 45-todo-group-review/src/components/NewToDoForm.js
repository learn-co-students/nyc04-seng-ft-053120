import React, { Component } from 'react';

export default class NewToDoForm extends Component {
  state = {
    title: "",
  }

  handleOnSubmit = e => {
    e.preventDefault()

    const todo = {
      title: this.state.title,
      completed: false
    }

    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
      .then(r => r.json())
      .then(newTodo => {
        this.props.addNewTodo(newTodo)
      })

  }

  handleChange = (evt) => {
    this.setState({
      title: evt.target.value
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <form className="ui form" onSubmit={this.handleOnSubmit}>
          <h1>New ToDo</h1>
          <div className="field">
            <label>Title</label>
            <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div >
    );
  }
}
