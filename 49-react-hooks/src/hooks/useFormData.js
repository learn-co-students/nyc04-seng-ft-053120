import { useState } from 'react'

const useFormData = (initialState) => {
  const [formData, setFormData] = useState(initialState)

  const handleChange = e => {
    const value = e.target.type === "number" ? parseInt(e.target.value) : e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  return {
    formData: formData,
    handleChange: handleChange
  }
}

export default useFormData