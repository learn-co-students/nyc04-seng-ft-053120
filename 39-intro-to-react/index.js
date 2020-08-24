// name must start with a capital letter
// take in 1 arg: props
function Card({ title, description }) {
  // console.log(props)
  // const { title, description } = props

  // must return JSX
  return (
    <div className="card">
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}

// function Card(props) {
//   return (
//     <div className="card">
//       <h1>{props.title}</h1>
//       <h4>{props.description}</h4>
//     </div>
//   )
// }

ReactDOM.render(
  // The JSX (what we want our app to look like)
  <div id="app" className="blue">
    <Card title="Let's Learn React!" description="Read the docs" />
    <Card title="Make a component" description="Refactoring" />
  </div>
  ,
  // Where we're rendering it
  document.getElementById("anything")
)