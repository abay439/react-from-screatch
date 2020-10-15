import React from 'react'

function Input(props) {
    function handleChange(e) {
        console.log(e.target.value)
    }
    return(
        <input
            type="text"
            onChange={handleChange}
      />
    )
}

export default Input
