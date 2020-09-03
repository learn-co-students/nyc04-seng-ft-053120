import React from 'react'

class CategoryPicker extends React.Component {

  render() {
    return (
      <div className="category-picker">
        <button
          className={this.props.selectedCategory === "All" ? "active" : ""}
          onClick={() => this.props.onCategoryChange("All")}
        >All</button>
        <button className={this.props.selectedCategory === "Spaceship Accessory" ? "active" : ""} onClick={() => this.props.onCategoryChange("Spaceship Accessory")} >Spaceship Accessory</button>
        <button className={this.props.selectedCategory === "Transportation" ? "active" : ""} onClick={() => this.props.onCategoryChange("Transportation")} >Transportation</button>
        <button className={this.props.selectedCategory === "Communications" ? "active" : ""} onClick={() => this.props.onCategoryChange("Communications")} >Communications</button>
        <button className={this.props.selectedCategory === "Fashion" ? "active" : ""} onClick={() => this.props.onCategoryChange("Fashion")} >Fashion</button>
      </div>
    )
  }
}

export default CategoryPicker