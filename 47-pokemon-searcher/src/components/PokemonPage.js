import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     pokemons: []
  //   }
  // }

  state = {
    pokemons: []
  }

  // make a function to perform the fetch request
  // componentDidMount, componentDidUpdate, componentWillUnmount
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then(pokemonObjects => {
        // when we get the data back, add it to state
        // push == mutating state
        this.setState({
          pokemons: pokemonObjects
        })
      })
  }

  // C => [...spread, new]
  // D => filter
  // U => map

  // callback
  newPokemonState = newPokemon => {
    console.log(newPokemon)
    // can't push...
    // create new array with our old pokemon + the new one
    const updatedPokemon = [newPokemon, ...this.state.pokemons]
    this.setState({
      pokemons: updatedPokemon
    })
  }

  render() {
    // console.log("PokemonPage state:", this.state)

    if (this.state.pokemons.length === 0) {
      return <h1>Loading...</h1>
    }

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemonState={this.newPokemonState} />
        <br />
        <Search />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} />
      </Container>
    )
  }
}

export default PokemonPage
