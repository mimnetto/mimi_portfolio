import React from 'react'
import { Form } from 'react-materialize';

const Input = props => {
  const {handleChange, name, placeholder, type, value} = props
    return (
      <>
      <label htmlFor={name} for={name}></label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="validate"
        />

      </>
    )
}

export default Input
