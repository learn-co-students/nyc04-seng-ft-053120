import React from 'react'
import { Form } from 'semantic-ui-react'
import useFormData from '../hooks/useFormData'

const PokemonForm = (props) => {
  const { formData, handleChange } = useFormData({
    name: "",
    hp: 0,
    frontUrl: "",
    backUrl: "",
  })

  console.log(formData)

  const handleSubmit = e => {
    e.preventDefault()

    const pokeObj = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokeObj)
    })
      .then(r => r.json())
      .then(newPokemon => {
        props.onFormSubmit(newPokemon.name)
      })
  }

  // console.log(formData)

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
          <Form.Input fluid label="hp" placeholder="hp" type="number" name="hp" value={formData.hp} onChange={handleChange} />
          <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={formData.frontUrl} onChange={handleChange} />
          <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={formData.backUrl} onChange={handleChange} />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
