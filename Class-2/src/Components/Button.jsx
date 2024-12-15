import React from 'react'


let buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#4CAF50',
    transition: 'background-color 0.3s ease',
    marginTop: '20px'

}
const Button = () => {
    return (
        <div>
            <button style={buttonStyle}> Click me!</button>
        </div>
    )
}

export default Button
