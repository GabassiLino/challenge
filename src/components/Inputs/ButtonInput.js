import React from 'react'

const ButtonInput = (props) => {
    return (
        <input type="button" className="ButtonInput" value={props.text} onClick={props.onClick}/>
    )
}

export default ButtonInput
