import React from 'react'
import ListingItem from './ListingItem'

// TODO: replace with a fetch!
// import LISTINGS from '../data'

class ListingContainer extends React.Component {
  state = {
    selectedCategory: "All",
    listings: [],
    startIndex: 0
  }

  getFilteredListings() {
    // first filter by category
    let filteredListings = this.state.listings.filter(listing => {
      if (this.state.selectedCategory === "All") {
        return true
      } else {
        return listing.category === this.state.selectedCategory
      }
    })
    // then filter by searchTerm
    filteredListings = filteredListings.filter(listing =>
      listing.title.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    )

    return filteredListings
  }

  renderListings = (filteredListings) => {
    return filteredListings
      .slice(this.state.startIndex, this.state.startIndex + 8)
      .map(listing => <ListingItem key={listing.id} listing={listing} />)
  }

  setSelectedCategory = newCategory => {
    this.setState({
      selectedCategory: newCategory
    })
  }

  decreasePageIndex = () => {
    if (this.state.startIndex > 0) {
      this.setState({
        startIndex: this.state.startIndex - 8
      })
    }
  }

  increasePageIndex = () => {
    if (this.state.startIndex < this.state.listings.length - 8) {
      this.setState({
        startIndex: this.state.startIndex + 8
      })
    }
  }


  // lifecycle method!
  // when the component mounts (comes onto the DOM)
  // it will run this code
  componentDidMount() {
    fetch("http://localhost:3001/listings")
      .then(r => r.json())
      .then(listingsArray => {

        this.setState({
          listings: listingsArray
        })
      })
  }

  render() {
    let filteredListings = this.getFilteredListings()

    return (
      <section>
        {/* TODO: refactor to separate component */}
        <div className="category-picker">
          <span
            className={this.state.selectedCategory === "All" ? "active" : ""}
            onClick={() => this.setSelectedCategory("All")}
          >All</span>
          <span className={this.state.selectedCategory === "Spaceship Accessory" ? "active" : ""} onClick={() => this.setSelectedCategory("Spaceship Accessory")} >Spaceship Accessory</span>
          <span className={this.state.selectedCategory === "Transportation" ? "active" : ""} onClick={() => this.setSelectedCategory("Transportation")} >Transportation</span>
          <span className={this.state.selectedCategory === "Communications" ? "active" : ""} onClick={() => this.setSelectedCategory("Communications")} >Communications</span>
          <span className={this.state.selectedCategory === "Fashion" ? "active" : ""} onClick={() => this.setSelectedCategory("Fashion")} >Fashion</span>
        </div>

        <p>Showing page {(this.state.startIndex / 8) + 1} of {Math.ceil(filteredListings.length / 8)} pages</p>
        <div className="card-list">
          {this.renderListings(filteredListings)}
        </div>
        <div>
          <button disabled={this.state.startIndex <= 0} onClick={this.decreasePageIndex}>Prev</button>
          <button disabled={this.state.startIndex >= this.state.listings.length - 8} onClick={this.increasePageIndex}>Next</button>
        </div>
      </section>
    )
  }
}

export default ListingContainer