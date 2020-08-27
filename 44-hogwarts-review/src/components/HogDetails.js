import React from 'react'

const HogDetails = props => {
  return (
    <div>
      <p>Specialty: {props.specialty}</p>
      <p>Greased?: {props.greased ? "yep" : "nep"}</p>
      <p>Weight: {props.weight}</p>
      <p>Medal: {props.medal}</p>
    </div>
  )
}

export default HogDetails