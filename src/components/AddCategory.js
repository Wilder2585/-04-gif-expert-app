import React, { useState } from 'react'

const AddCategory = () => {
 
 const [inputValue, setInputValue] = useState('')
 
 const onInputChange = (event) => {
     setInputValue(event.target.value);
   
 }

 const onSubmit = (event) => {
    event.preventDefault()
    console.log(inputValue);
 }
    return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder='Buscar Gift'
            value={ inputValue}
            onChange={ onInputChange}
        />
       
    </form>
  )
}

export default AddCategory