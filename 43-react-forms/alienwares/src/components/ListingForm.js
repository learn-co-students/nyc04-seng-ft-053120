import React from 'react'

class ListingForm extends React.Component {

  render() {
    return (
      <div className="form-container">
        <h2>New Listing</h2>
        <form>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" />
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" />
          <label htmlFor="imageUrl">Image URL: </label>
          <input type="text" name="imageUrl" />
          <label htmlFor="category">Category: </label>
          <select name="category">
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