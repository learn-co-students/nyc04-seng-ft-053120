import React from 'react'
import { componentLog } from '../utils/logger';

class Grandchild extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false
    }
  }

  render() {
    return (
      <div className="box">
        <p>Grandchild</p>
      </div>
    );
  }
}

export default Grandchild 