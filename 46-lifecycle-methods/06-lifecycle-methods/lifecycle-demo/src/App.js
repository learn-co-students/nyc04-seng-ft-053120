import React from 'react';
import './App.css'
import LifeCycleApp from './lifecycle/LifeCycleApp'
// import TickerContainer from './ticker/TickerContainer'

class App extends React.Component {
  state = {
    showChild: true
  }

  render() {
    return (
      <div className="App">
        <label>
          Show app:
          <input type="checkbox" checked={this.state.showChild} onChange={e => this.setState({ showChild: e.target.checked })} />
        </label>
        {this.state.showChild ? <LifeCycleApp /> : null}
      </div>
    );
  }
}

export default App;
