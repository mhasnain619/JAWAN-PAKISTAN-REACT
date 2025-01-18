import React from 'react'
import TextField from '@mui/material/TextField';

const Input = ({ label, type, placeholder, onChangeEvent, value }) => {
    return (
        <>
            {/* <label>{label}</label> */}
            <TextField sx={{ margin: '0px 5px' }} value={value} label={label} onChange={onChangeEvent} type={type} placeholder={placeholder} />
            {/* <input value={value} onChange={onChangeEvent} type={type} placeholder={placeholder} /> */}
        </>
    )
}

export default Input
