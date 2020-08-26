import React from 'react';
import Filter from './Filter'
import NavBar from './NavBar';
import ListingContainer from './ListingContainer';
import ListingForm from './ListingForm';

class App extends React.Component {
  state = {
    searchTerm: "",
    listings: [],
    page: "listings"
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

  handleAddListing = newListing => {
    // mutates state! nope
    // this.state.listings.push(newListing)

    // adding to an array in state => use spread!
    this.setState({
      listings: [newListing, ...this.state.listings]
    })
  }

  handleSearchChange = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  handlePageChange = page => {
    this.setState({
      page: page
    })
  }

  getCurrentPage() {
    if (this.state.page === "listings") {
      return (
        <>
          <Filter />
          <ListingContainer listings={this.state.listings} searchTerm={this.state.searchTerm} />
        </>
      )
    } else if (this.state.page === "new-listing") {
      return <ListingForm onFormSubmit={this.handleAddListing} />
    } else {
      return <h1>404 not found</h1>
    }
  }

  render() {
    console.log(this.state)
    return (
      <>
        <NavBar
          onPageChange={this.handlePageChange}
          onSearchChange={this.handleSearchChange}
          searchTerm={this.state.searchTerm}
        />
        <main>
          {this.getCurrentPage()}
        </main>
      </>
    );
  }
}

export default App;
