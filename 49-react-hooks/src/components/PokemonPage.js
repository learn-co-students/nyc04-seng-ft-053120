import React from 'react'
import { Container } from 'semantic-ui-react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonFormHook'
import Search from './Search'
import LoadingScreen from './LoadingScreen'

class PokemonPage extends React.Component {

  state = {
    isLoading: true,
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      this.fetchPokemon()
    }
  }

  fetchPokemon() {
    this.setState({ isLoading: true })

    fetch(`http://localhost:3000/pokemon?q=${this.state.searchTerm}`)
      .then(r => r.json())
      .then(pokemonObjects => {
        this.setState({
          pokemons: pokemonObjects,
          isLoading: false
        })
      })
  }

  setSearchTerm = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onFormSubmit={this.setSearchTerm} />
        <br />
        <Search searchTerm={this.state.searchTerm} onFormSubmit={this.setSearchTerm} />
        <br />
        {this.state.isLoading
          ? <LoadingScreen />
          : <PokemonCollection pokemons={this.state.pokemons} />}
      </Container>
    )
  }
}

export default PokemonPage