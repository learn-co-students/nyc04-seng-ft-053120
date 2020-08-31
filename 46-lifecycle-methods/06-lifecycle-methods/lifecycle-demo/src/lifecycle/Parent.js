import React from 'react'
import Child from './Child'
import { componentLog } from '../utils/logger';

class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false
    }
    componentLog(this)
  }

  componentDidMount() {
    componentLog(this)
  }

  componentDidUpdate() {
    componentLog(this)
  }

  componentWillUnmount() {
    componentLog(this)
  }

  toggle = () => {
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }))
  }

  render() {
    componentLog(this)
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


// constructor Parent
// render Parent
// constructor Child 
// render Child
// constructor Grandchild
// render Grandchild

// componentDidMount Grandchild
// componentDidMount Child
// componentDidMount Parent