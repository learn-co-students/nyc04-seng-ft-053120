import React from 'react'
import { formatPrice } from '../utils'

class ListingItem extends React.Component {

  render() {
    const { imageUrl, title, category, price } = this.props.listing

    return (
      <div className="card">
        <div className="image">
          <img src={imageUrl} alt={title} />
          <button className="favorite">{false ? "♥" : "♡"}</button>
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