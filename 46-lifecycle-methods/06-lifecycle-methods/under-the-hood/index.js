class Grandchild extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructor | Grandchild")
  }

  componentDidMount() {
    console.log("componentDidMount | Grandchild")
  }

  render() {
    console.log("render | Grandchild")
    // <div>
    //   <h1>Grandchild</h1>
    // </div>
    return (
      React.createElement("div", null,
        React.createElement("h1", null, "Grandchild"),
      )
    )
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructor | Child")
  }

  componentDidMount() {
    console.log("componentDidMount | Child")
  }

  render() {
    console.log("render | Child")
    // <div>
    //   <h1>Child</h1>
    //   <Grandchild />
    // </div>
    return (
      React.createElement("div", null,
        React.createElement("h1", null, "Child"),
        React.createElement(Grandchild, null),
      )
    )
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructor | Parent")
  }

  componentDidMount() {
    console.log("componentDidMount | Parent")
  }

  render() {
    console.log("render | Parent")
    // <div>
    //   <h1>Parent</h1>
    //   <Child />
    // </div>
    return (
      React.createElement("div", null,
        React.createElement("h1", null, "Parent"),
        React.createElement(Child, null),
      )
    )
  }
}

ReactDOM.render(
  React.createElement(Parent, null),
  document.getElementById("root")
)
