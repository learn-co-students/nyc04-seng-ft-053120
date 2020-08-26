import React from 'react';
import Filter from './Filter'
import NavBar from './NavBar';
import ListingContainer from './ListingContainer';

class App extends React.Component {
  state = {
    searchTerm: "",
  }

  handleSearchChange = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  render() {
    return (
      <>
        <NavBar
          onSearchChange={this.handleSearchChange}
          searchTerm={this.state.searchTerm}
        />
        <main>
          <Filter />
          <ListingContainer searchTerm={this.state.searchTerm} />
        </main>
      </>
    );
  }
}

export default App;
