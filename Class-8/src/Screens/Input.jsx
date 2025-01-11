import React from 'react'

const Input = ({ label, type, placeholder, onChangeEvent, value }) => {

    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={onChangeEvent} type={type} placeholder={placeholder} />
        </>
    )
}

export default Input
