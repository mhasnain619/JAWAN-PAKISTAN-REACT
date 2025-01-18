import React from 'react'
import { useState } from 'react'
import Input from './Input'
import CustomizedTables from './Table.jsx'
import Button from '@mui/material/Button';
const RegistrationForm = () => {


    let [userObj, setUserObj] = useState({
        userName: '',
        userEmail: '',
        userPassword: ''
    })
    let [userArray, setUserArray] = useState([])
    const handleSubmit = () => {
        setUserArray([...userArray, userObj])
        setUserObj({ userName: '', userEmail: '', userPassword: '' })

    }
    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <h1>Rgistration Form</h1>
                <Input
                    onChangeEvent={(e) => setUserObj({ ...userObj, userName: e.target.value })}
                    value={userObj.userName}
                    label="Name"
                    variant="outlined" />
                <Input
                    value={userObj.userEmail}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userEmail: e.target.value })}
                    label='Email'
                    type='email' />
                <Input
                    value={userObj.userPassword}
                    onChangeEvent={(e) => setUserObj({ ...userObj, userPassword: e.target.value })}
                    label='Password'
                    type='password' />
                <Button sx={{ height: '55px' }} onClick={handleSubmit} variant="contained" size="large">
                    Add to Table
                </Button>
            </div>
            <CustomizedTables data={userArray} />
        </>
    )
}

export default RegistrationForm
