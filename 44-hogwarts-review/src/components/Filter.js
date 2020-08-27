import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <label>
          Show Greasy
          <input type="checkbox" onChange={this.props.onToggleGreasy} checked={this.props.showGreasy} />
        </label>
        <p>
          Sort by:
          <select value={this.props.sortBy} onChange={this.props.onChangeSort}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </p>
      </div>
    );
  }
}

export default Filter;
