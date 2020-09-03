import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils'

class ListingItem extends React.Component {

  toggleFavorite = () => {
    const { id, favorite } = this.props.listing
    // update listing on the server
    fetch(`http://localhost:3001/listings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ favorite: !favorite })
    })
      .then(r => r.json())
      .then(updatedListing => {
        // use callback to update listing in state
        this.props.onUpdateListing(updatedListing)
      })
  }

  render() {
    const { id, imageUrl, title, category, price, favorite } = this.props.listing

    return (
      <div className="card">
        <div className="image">
          <Link to={`/listings/${id}`}>
            <img src={imageUrl} alt={title} onClick={() => this.props.onPageChange("show-listing")} />
          </Link>
          <button onClick={this.toggleFavorite} className="favorite">{favorite ? "♥" : "♡"}</button>
        </div>
        <div className="details">
          <h4 className="title" title={title}>{title}</h4>
          <p>{category}</p>
          <strong>${formatPrice(price)}</strong>
        </div>
      </div>
    )
  }
}

export default ListingItem