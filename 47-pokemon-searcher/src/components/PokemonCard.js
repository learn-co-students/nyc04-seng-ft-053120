import React from 'react'
import { Card } from 'semantic-ui-react'

// {
//   "id": 2,
//   "name": "ivysaur",
//   "hp": 60,
//   "sprites": {
//     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
//   }
// }

class PokemonCard extends React.Component {

  state = {
    photo: false
  }

  toggleLogic = () => {
    this.setState(prevState => {
      return {
        photo: !prevState.photo
      }
    })

    // this.setState({
    //   photo: !this.state.photo
    // })
  }

  render() {
    // console.log("PokemonCard props", this.props)
    // add an onClick to the card
    // update state
    // add a conditional statement to change which source we're showing
    const image = this.state.photo ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
    return (
      <Card>
        <div onClick={this.toggleLogic}>
          <div className="image">
            <img src={image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
