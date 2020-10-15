import React from 'react'

function Button(props){
   return (
   <button
    onClick={props.handleButtonClick}
    style={{color: props.color}}
    type="button"
    > klik</button>
   )
}

export default Button
