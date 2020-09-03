import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar';
import ListingContainer from './ListingContainer';
import ListingForm from './ListingForm';
import ListingDetail from './ListingDetail';

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
    this.setState(prevState => ({
      listings: [newListing, ...prevState.listings]
    }))
  }

  handleUpdateListing = updatedListing => {
    this.setState(prevState => {

      const updatedListings = prevState.listings.map(listing => {
        if (listing.id === updatedListing.id) return updatedListing
        return listing
      })

      return {
        listings: updatedListings
      }
    })
  }

  handleSearchChange = searchTerm => {
    this.setState({ searchTerm })
  }

  handlePageChange = page => {
    this.setState({ page })
  }

  getCurrentPage() {
    switch (this.state.page) {

      case "listings":
        return <ListingContainer
          listings={this.state.listings}
          onUpdateListing={this.handleUpdateListing}
          searchTerm={this.state.searchTerm}
          onlyFavorites={false}
          onPageChange={this.handlePageChange}
        />

      case "favorites":
        return <ListingContainer
          listings={this.state.listings}
          onUpdateListing={this.handleUpdateListing}
          searchTerm={this.state.searchTerm}
          onlyFavorites={true}
          onPageChange={this.handlePageChange}
        />

      case "new-listing":
        return <ListingForm onFormSubmit={this.handleAddListing} />

      case "show-listing":
        return <ListingDetail />

      default:
        return <h1>404 not found</h1>
    }
  }

  render() {
    return (
      <>
        <NavBar
          onPageChange={this.handlePageChange}
          onSearchChange={this.handleSearchChange}
          searchTerm={this.state.searchTerm}
        />
        <main>
          <Switch>
            <Route path="/listings" exact>
              <ListingContainer
                listings={this.state.listings}
                onUpdateListing={this.handleUpdateListing}
                searchTerm={this.state.searchTerm}
                onlyFavorites={false}
                onPageChange={this.handlePageChange}
              />
            </Route>

            <Route path="/listings/new" render={routeProps => {
              return <ListingForm history={routeProps.history} onFormSubmit={this.handleAddListing} />
            }} />

            <Route path="/listings/:id" render={routeProps => {
              return <ListingDetail match={routeProps.match} />
            }} />

            <Route path="/favorites">
              <ListingContainer
                listings={this.state.listings}
                onUpdateListing={this.handleUpdateListing}
                searchTerm={this.state.searchTerm}
                onlyFavorites={true}
                onPageChange={this.handlePageChange}
              />
            </Route>

            <Route path="*">
              <h1>Area 51: Access Denied!</h1>
            </Route>
            {/* {this.getCurrentPage()} */}
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
