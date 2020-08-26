import React from 'react'
import ListingItem from './ListingItem'
import Pager from './Pager'
import ListingForm from './ListingForm'

class ListingContainer extends React.Component {
  state = {
    selectedCategory: "All",
    listings: [],
    currentIndex: 0
  }

  // lifecycle methods
  componentDidMount() {
    fetch("http://localhost:3001/listings")
      .then(r => r.json())
      .then(listingsArray => {
        this.setState({
          listings: listingsArray
        })
      })
  }

  // event handlers
  setSelectedCategory = newCategory => {
    this.setState({
      selectedCategory: newCategory,
      currentIndex: 0
    })
  }

  handlePageClick = page => {
    this.setState({
      currentIndex: (page - 1) * 8
    })
  }

  // render helpers
  getFilteredListings() {
    return this.state.listings
      .filter(listing =>
        // first filter by category
        this.state.selectedCategory === "All" || listing.category === this.state.selectedCategory
      )
      .filter(listing =>
        // then filter by searchTerm
        listing.title.toLowerCase().includes(this.props.searchTerm.toLowerCase())
      )
  }

  renderListings(filteredListings) {
    return filteredListings
      .slice(this.state.currentIndex, this.state.currentIndex + 8) // slice to get the paginated results
      .map(listing => <ListingItem key={listing.id} listing={listing} />)  // map to individual components
  }

  render() {
    const filteredListings = this.getFilteredListings()
    const currentPage = (this.state.currentIndex / 8) + 1
    const totalPages = Math.ceil(filteredListings.length / 8)

    return (
      <section>
        <ListingForm />

        {/* TODO: refactor to separate component */}
        <div className="category-picker">
          <button
            className={this.state.selectedCategory === "All" ? "active" : ""}
            onClick={() => this.setSelectedCategory("All")}
          >All</button>
          <button className={this.state.selectedCategory === "Spaceship Accessory" ? "active" : ""} onClick={() => this.setSelectedCategory("Spaceship Accessory")} >Spaceship Accessory</button>
          <button className={this.state.selectedCategory === "Transportation" ? "active" : ""} onClick={() => this.setSelectedCategory("Transportation")} >Transportation</button>
          <button className={this.state.selectedCategory === "Communications" ? "active" : ""} onClick={() => this.setSelectedCategory("Communications")} >Communications</button>
          <button className={this.state.selectedCategory === "Fashion" ? "active" : ""} onClick={() => this.setSelectedCategory("Fashion")} >Fashion</button>
        </div>

        <div className="card-list">
          {this.renderListings(filteredListings)}
        </div>
        <Pager
          currentPage={currentPage}
          totalPages={totalPages}
          onPageClick={this.handlePageClick}
        />
      </section>
    )
  }
}

export default ListingContainer