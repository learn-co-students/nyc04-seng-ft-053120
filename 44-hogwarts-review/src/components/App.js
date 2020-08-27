import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import HogContainer from "./HogContainer";

console.hog = console.log

class App extends Component {
  state = {
    showGreasy: true,
    sortBy: "name"
  }

  handleToggleGreasy = event => {
    this.setState({
      showGreasy: event.target.checked
    })
  }

  handleChangeSort = event => {
    this.setState({
      sortBy: event.target.value
    })
  }

  sortHogs() {
    if (this.state.sortBy === "name") {
      return hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
    } else if (this.state.sortBy === "weight") {
      return hogs.sort((hog1, hog2) => hog1.weight - hog2.weight)
    }
  }

  filterHogs(sortedHogs) {
    return sortedHogs.filter(hog => {
      if (this.state.showGreasy) {
        return hog.greased
      } else {
        return true
      }
    })
  }

  render() {
    const sortedHogs = this.sortHogs()
    const filteredHogs = this.filterHogs(sortedHogs)
    console.log(filteredHogs)

    return (
      <div className="App">
        <Nav />
        <Filter
          showGreasy={this.state.showGreasy}
          onToggleGreasy={this.handleToggleGreasy}
          sortBy={this.state.sortBy}
          onChangeSort={this.handleChangeSort}
        />
        <HogContainer hogs={filteredHogs} />
      </div>
    );
  }
}

export default App;
