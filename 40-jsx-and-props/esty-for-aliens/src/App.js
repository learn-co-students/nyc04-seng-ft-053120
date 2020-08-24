import React from 'react';
import './App.css';

import Filter from './Filter'
import NavBar from './NavBar';
import ListingContainer from './ListingContainer';

// named export
// export const uppercaser = str => str.toUpperCase()
// export const lowercaser = str => str.toLowerCase()

function App() {
  return (
    <div className="App">
      <Filter />
      <NavBar />
      <ListingContainer />
    </div>
  );
}

// default export
export default App;
