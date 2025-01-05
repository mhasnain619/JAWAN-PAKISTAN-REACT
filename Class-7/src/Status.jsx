import React, { useState } from 'react'

const Status = () => {
    const [isLogedIn, setIsLogedin] = useState(true)
    return (
        <>
            {
                isLogedIn ? (<><h1>Wellcome User</h1>
                    <p>Dashboard</p>
                    <p>status : login</p></>) : (
                    <h1>Not loged in</h1>
                )
            }
            <button onClick={() => {
                setIsLogedin(!isLogedIn)
            }}>{isLogedIn ? 'LogOut' : 'Logout'}</button>

        </>
    )
}

export default Status
