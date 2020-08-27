import React from "react";
import HogDetails from './HogDetails'

// const HogTile = (props) => {
//   // format the string
//   let imageName = props.hog.name.toLowerCase().replace(/ /g, "_")
//   // require in the image file dynamically
//   let pigImage = require(`../hog-imgs/${imageName}.jpg`) //how can we dynamically generate the filename?

//   return (
//     <div>
//       <h1>{props.hog.name}</h1>
//       <img src={pigImage} alt={props.hog.name} />
//     </div>
//   );
// }

class HogTile extends React.Component {
  state = {
    details: false
  }

  handleToggleDetail = () => {
    this.setState({
      details: !this.state.details
    })
  }

  render() {
    console.log(this.state)
    const { name, specialty, greased, weight, "highest medal achieved": medal } = this.props.hog

    // format the string
    let imageName = name.toLowerCase().replace(/ /g, "_")
    // require in the image file dynamically
    let pigImage = require(`../hog-imgs/${imageName}.jpg`) //how can we dynamically generate the filename?

    return (
      <div onClick={this.handleToggleDetail}>
        <h1>{name}</h1>
        <img src={pigImage} alt={name} />
        {this.state.details && <HogDetails
          specialty={specialty}
          greased={greased}
          weight={weight}
          medal={medal}
        />}
      </div>
    );
  }
}

export default HogTile;
