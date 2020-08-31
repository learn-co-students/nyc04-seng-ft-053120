import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {
  state = {
    number: 0,
    color: "white"
  }

  // lifecycle methods
  componentDidMount() {
    this.startTimer()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.number < this.state.number) {
      this.setState({ color: "green" })
    } else if (prevState.number > this.state.number) {
      this.setState({ color: "red" })
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  // event handlers
  handleClick = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    } else {
      this.startTimer()
    }
  }

  // helpers
  startTimer() {
    this.intervalId = setInterval(() => {
      console.log("interval running...")
      const rando = Math.floor(Math.random() * 100) + 1
      this.setState({
        number: rando
      })
    }, 1000)
  }

  /*
    What do we need?

    componentDidMount() 

    componentDidUpdate()

    componentWillUnmount()

    none of the above!
  */

  // Don't forget to clean up the intervals if this component goes away!

  render() {
    return (
      <div className="box">
        <button onClick={this.handleClick}>{true ? "Stop" : "Start"} Ticker</button>
        <Ticker number={this.state.number} color={this.state.color} />
      </div>
    )
  }
}

export default TickerContainer