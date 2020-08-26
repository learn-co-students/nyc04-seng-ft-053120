import React from 'react'

const defaultState = {
  title: "",
  price: 0,
  imageUrl: "",
  category: "Spaceship Accessory"
}

class ListingForm extends React.Component {
  state = defaultState

  handleChange = event => {
    console.log(event.target.name) // "title"
    if (event.target.type === "number") {
      this.setState({
        [event.target.name]: parseInt(event.target.value)
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch("http://localhost:3001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      .then(newListing => {
        this.props.onFormSubmit(newListing)
        this.setState(defaultState)
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="form-container">
        <h2>New Listing</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />

          <label htmlFor="price">Price: </label>
          <input type="number" name="price" value={this.state.price} onChange={this.handleChange} />

          <label htmlFor="imageUrl">Image URL: </label>
          <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />

          <label htmlFor="category">Category: </label>
          <select name="category" value={this.state.category} onChange={this.handleChange}>
            <option value="Spaceship Accessory">Spaceship Accessory</option>
            <option value="Transportation">Transportation</option>
            <option value="Communications">Communications</option>
            <option value="Fashion">Fashion</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ListingForm