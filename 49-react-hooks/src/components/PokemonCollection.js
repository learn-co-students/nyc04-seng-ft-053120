import React from 'react'
import PokemonCard from './PokemonCardHook'
import { Card } from 'semantic-ui-react'

function PokemonCollection(props) {
  const cards = props.pokemons.map(pokemon =>
    <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites} />
  )

  return (
    <Card.Group itemsPerRow={6}>
      {cards}
    </Card.Group>
  )
}

export default PokemonCollection
