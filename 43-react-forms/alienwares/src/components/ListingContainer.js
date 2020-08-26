import React from 'react'
import ListingItem from './ListingItem'
import Pager from './Pager'
import CategoryPicker from './CategoryPicker'

class ListingContainer extends React.Component {
  state = {
    selectedCategory: "All",
    currentIndex: 0
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
    return this.props.listings
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
        <CategoryPicker
          selectedCategory={this.state.selectedCategory}
          onCategoryChange={this.setSelectedCategory}
        />

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