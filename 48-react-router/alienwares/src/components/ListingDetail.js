import React from 'react'
import { formatPrice } from '../utils'

class ListingDetail extends React.Component {
  state = {
    listing: null
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`http://localhost:3001/listings/${id}`)
      .then(r => r.json())
      .then(listing => {
        this.setState({
          listing: listing
        })
      })
  }

  toggleFavorite = () => {
    const { id, favorite } = this.state.listing
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
        this.setState({ listing: updatedListing })
      })
  }

  render() {
    console.log(this.props)

    const { listing } = this.state
    if (!listing) return <h3>Loading...</h3>

    const { imageUrl, title, category, price, favorite } = this.state.listing

    return (
      <div className="listing-detail">
        <div className="image">
          <img src={imageUrl} alt={title} />
          <button onClick={this.toggleFavorite} className="favorite">{favorite ? "♥" : "♡"}</button>
        </div>
        <div className="details">
          <h2 className="title" title={title}>{title}</h2>
          <p>{category}</p>
          <strong>${formatPrice(price)}</strong>
          <div className="actions">
            <button>Buy Now</button>
            <button className="inverted">Add to Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingDetail