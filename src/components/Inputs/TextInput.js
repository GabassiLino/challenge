import React from 'react'
import './Input.css'

const TextInput = (props) => {
    return (
        <input className="TextInput" value={props.value} onChange={(event) => props.setValue(event.target.value)}></input>
    )
}/*Agarra el valor del input */

export default TextInput
