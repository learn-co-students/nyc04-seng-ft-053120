import React from 'react'
import ListingItem from './ListingItem'
import CategoryFilter from './CategoryFilter'

import LISTINGS from './data'

// class Name extends React.Component
// class ListingContainer extends React.Component {

//   // method called render
//   render() {
//     // return JSX
//     return <h1></h1>
//   }
// }


const ListingContainer = (props) => {

  // [{},{},{}] => [<ListingItem />, <ListingItem />, <ListingItem />]
  const renderListings = () => {
    return LISTINGS.map(listing => <ListingItem key={listing.id} listing={listing} />)
  }

  return (
    <>
      <h1>ListingContainer</h1>
      <CategoryFilter />
      {renderListings()}
    </>
  )
}

export default ListingContainer