import React from 'react'
import Grandchild from './Grandchild'
import { componentLog } from '../utils/logger';

class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false
    }
  }

  render() {
    return (
      <div className="box">
        <p>Child</p>
        <Grandchild name="grandchild" />
      </div>
    );
  }
}

export default Child 