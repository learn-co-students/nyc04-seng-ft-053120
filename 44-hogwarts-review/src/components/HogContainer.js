import React from "react";
import HogTile from "./HogTile";

class HogContainer extends React.Component {
  render() {
    // [{},{}] => [<HogTile />, <HogTile />]
    return (
      <div>
        <h1>Hog Container</h1>
        {this.props.hogs.map(hog => <HogTile key={hog.name} hog={hog} />)}
      </div>
    );
  }
}

export default HogContainer;
