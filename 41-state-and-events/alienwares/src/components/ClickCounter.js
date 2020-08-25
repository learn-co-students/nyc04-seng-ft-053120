import React from 'react'

class ClickCounter extends React.Component {
  // older syntax
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     count: 123,
  //     anything: "in here"
  //   }
  // }

  // initial state
  // this.state = {}
  state = {
    count: 0,
    anything: "in here"
  }

  // any function being used as a callback in a class component should be an arrow fn
  // (basically, just make everything arrow fn and you're cool)
  handleClick = (event) => {
    // mutating state! dont do this
    // this.state.count = this.state.count + 1

    // not mutating state! do this
    // object version of setState
    // this.setState({
    //   count: this.state.count + 1  // 0 + 1
    // })

    // callback version
    // React best practice!
    // use callback if next state depends on a previous state
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))

    // this.setState({
    //   count: this.state.count + 1  // 0 + 1
    // })

    // this.setState({
    //   count: this.state.count + 1  // 0 + 1
    // })

    // setState is async
    console.log("in handleClick:", this.state)

    // use event.persist if you need access to the event in async code
    // const target = event.target
    // event.persist()

    // setTimeout(() => {
    //   console.log(target)
    // }, 1000)
  }

  render() {
    console.log("in render:", this.state)
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4>Click Counter</h4>
        <button onClick={this.handleClick}>
          {this.state.count} Clicks
        </button>
      </div>
    )
  }
}

export default ClickCounter