import React from 'react';
import Filter from './Filter'
import NavBar from './NavBar';
import ListingContainer from './ListingContainer';

class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <main>
          <Filter />
          <ListingContainer />
        </main>
      </>
    );
  }
}

export default App;
