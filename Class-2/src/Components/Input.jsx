import React from 'react'

const inputStyles = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '30%',
    fontSize: '16px',
    outline: 'none',
};

const Input = () => {

    return (
        <div>
            <input style={inputStyles} type="text" />
        </div>
    )
}

export default Input
