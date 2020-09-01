import React from 'react'
import { Form } from 'semantic-ui-react'

// get the information from the form inputs (instead of evt.target.name.value, we can make controlled inputs!)
// state in this component should have a key for each input field
// whenever the inputs change, we need to set state
// controlled input: value to state, and connect onChange to setState

// controlled input: value to state, and connect onChange to setState
// onSubmit - call a function (preventDefault)
//  make a fetch to update the backend
//  update state in the parent to add the new pokemon to the card


class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  }

  handleChange = evt => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // onSubmit - call a function (preventDefault)
  submitHandler = evt => {
    evt.preventDefault()

    const pokeObj = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.frontUrl
      }
    }

    // create a new Pokemon
    // POST /pokemon
    //  make a fetch to update the backend
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokeObj)
    })
      .then(r => r.json())
      .then(newPokemon => {
        //  update state in the parent to add the new pokemon to the card
        // pass a function down from the Page component as a prop
        // we can call that callback function from here

        this.props.newPokemonState(newPokemon)
      })
  }

  render() {
    console.log("PokemonForm state:", this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
