import React from 'react'
import { Form, Input } from 'semantic-ui-react'
import useFormData from '../hooks/useFormData'

const Search = (props) => {
  const { formData, handleChange } = useFormData({
    search: props.searchTerm
  })

  console.log(formData)

  const handleSubmit = e => {
    e.preventDefault()
    props.onFormSubmit(formData.search)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search..."
        action={{ icon: "search" }}
        name="search"
        value={formData.search}
        onChange={handleChange}
      />
    </Form>
  )
}

export default Search
