import React from 'react'

function Form(props) {
    return (
        <button onClick={props.getLocation}>Get Your Current Location</button>
    )
}

export default Form;