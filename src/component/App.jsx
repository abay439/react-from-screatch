import React, {useState} from 'react'
import Button from './Button'
import Input from './Input'

function App() {
    const color = 'red'

    function handleOnButtonClick(){
            alert(inputValue)
    }

    function onInputChange(e) {
        setInputValue(e.target.value)
    }

    return (
        <div>
        APP
        <Input
            onInputChange={onInputChange}
        />
        <Button
            onButtonClick={handleOnButtonClick}
        />
        </div>
    )
}

export default App
