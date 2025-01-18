import React from 'react'
import { useState } from 'react'
import Input from './Input'
import CustomizedTables from './Table.jsx'
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
    const getValue = () => {
        console.log(userObj);
        setUserObj('')
    }

    return (
        <div>
            <h1>Rgistration Form</h1>
            <Input
                value={userObj.userName}
                onChangeEvent={(e) => setUserObj({ ...userObj, userName: e.target.value })}
                label='Name : '
                type='text' /><br />
            <Input
                value={userObj.userEmail}
                onChangeEvent={(e) => setUserObj({ ...userObj, userEmail: e.target.value })}
                label='Email : '
                type='email' /><br />
            <Input
                value={userObj.userPassword}
                onChangeEvent={(e) => setUserObj({ ...userObj, userPassword: e.target.value })}
                label='Password: '
                type='password' /><br />
            <button onClick={handleSubmit} >get Value</button>
            <CustomizedTables data={userArray} />
        </div>
    )
}

export default RegistrationForm
