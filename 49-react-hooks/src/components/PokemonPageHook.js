import React, { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonFormHook'
import Search from './Search'
import LoadingScreen from './LoadingScreen'

// Pure function:
// - given the same input, will always have the same output with no side effects
// const double = num => num * 2

// Impure functions:
// - given the same input, won't haven't always have the same output
// - may have side effects
// const random = () => Math.random()

// const arr = []
// const addToArr = value => {
//   arr.push(value)
// }

const PokemonPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    console.log("effecting")
    setIsLoading(true)

    fetch(`http://localhost:3000/pokemon?q=${searchTerm}`)
      .then(r => r.json())
      .then(pokemonObjects => {
        setPokemons(pokemonObjects)
        setIsLoading(false)
      })
  }, [searchTerm])

  // useEffect:
  // no second arg: every time the component renders, call useEffect
  // second arg of empty arr: only call useEffect the first time our component renders (kind of like componentDidMount)
  // second arg of array with variables: run the effect again any time the variables change (kind of like componentDidUpdate)

  console.log({ isLoading, pokemons, searchTerm })

  // componentDidMount() {
  //   this.fetchPokemon()
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.searchTerm !== prevState.searchTerm) {
  //     this.fetchPokemon()
  //   }
  // }

  // fetchPokemon() {
  //   this.setState({ isLoading: true })

  //   fetch(`http://localhost:3000/pokemon?q=${this.state.searchTerm}`)
  //     .then(r => r.json())
  //     .then(pokemonObjects => {
  //       this.setState({
  //         pokemons: pokemonObjects,
  //         isLoading: false
  //       })
  //     })
  // }

  // setSearchTerm = searchTerm => {
  //   this.setState({
  //     searchTerm: searchTerm
  //   })
  // }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={setSearchTerm} />
      <br />
      <Search searchTerm={searchTerm} onFormSubmit={setSearchTerm} />
      <br />
      {isLoading
        ? <LoadingScreen />
        : <PokemonCollection pokemons={pokemons} />}
    </Container>
  )
}

export default PokemonPage