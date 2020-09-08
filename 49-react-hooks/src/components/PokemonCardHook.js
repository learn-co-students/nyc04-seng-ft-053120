import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = ({ name, hp, sprites }) => {

  const [showFront, setShowFront] = useState(false)
  // useState(initialValue)
  // returns an array [state, setState]

  const handleClick = () => {
    setShowFront(!showFront)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={showFront ? sprites.front : sprites.back} alt={`${name} sprite`} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
