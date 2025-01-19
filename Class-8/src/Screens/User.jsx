import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const { id } = useParams()
    console.log(id);


    return (
        <div>
            <h1>
                Hello {id}
            </h1>
            <h3>User Page</h3>
        </div>
    )
}

export default User
