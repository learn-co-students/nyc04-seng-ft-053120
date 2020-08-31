import React from 'react'
import Child from './Child'
import { componentLog } from '../utils/logger';

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }))
  }

  render() {
    return (
      <div className="box">
        <button onClick={this.toggle}>Toggle: {this.state.toggled ? "ON" : "OFF"}</button>
        <p>Parent</p>
        <Child name="child" />
      </div>
    );

  }
}


export default Parent;