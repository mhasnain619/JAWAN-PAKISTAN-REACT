import React from 'react'
import { useState } from 'react'

const RegistrationForm = () => {
    let [userNAme, setUserName] = useState('')
    const getValue = () => {
        console.log(userNAme);

    }
    return (
        <div>
            <h1>Rgistration Form</h1>
            <input onChange={(e) => setUserName(e.target.value)} type="text" name="" id="" />
            <button onClick={getValue}>get Value</button>
        </div>
    )
}

export default RegistrationForm
