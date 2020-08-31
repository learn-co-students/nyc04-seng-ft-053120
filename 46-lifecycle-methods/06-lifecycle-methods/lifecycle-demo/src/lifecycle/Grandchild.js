import React from 'react'
import { componentLog } from '../utils/logger';

class Grandchild extends React.Component {
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

  componentDidUpdate(prevProps, prevState) {
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
        <p>Grandchild</p>
      </div>
    );
  }
}

export default Grandchild 