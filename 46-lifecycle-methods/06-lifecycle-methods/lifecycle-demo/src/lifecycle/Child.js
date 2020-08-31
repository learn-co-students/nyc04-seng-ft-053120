import React from 'react'
import Grandchild from './Grandchild'
import { componentLog } from '../utils/logger';

class Child extends React.Component {
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
        <p>Child</p>
        <Grandchild name="grandchild" />
      </div>
    );
  }
}

export default Child 