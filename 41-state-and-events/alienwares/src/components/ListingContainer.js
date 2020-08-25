import React from 'react'
import ListingItem from './ListingItem'

import LISTINGS from '../data'
import ClickCounter from './ClickCounter'

const ListingContainer = () => {

  const renderListings = () => {
    return LISTINGS.map(listing => <ListingItem key={listing.id} listing={listing} />)
  }

  return (
    <section>
      <ClickCounter />
      <div className="category-picker">
        <span className="active">All</span>
        <span>Spaceship Accessory</span>
        <span>Transportation</span>
        <span>Communications</span>
        <span>Fashion</span>
      </div>
      <p>Showing {LISTINGS.length} results</p>
      <div className="card-list">
        {renderListings()}
      </div>
    </section>
  )
}

export default ListingContainer