import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {
    // useSearchParams is use for dynamic routing and Query Routing

    const [query_param, setQuery_pram] = useSearchParams()
    console.log(query_param.get('name'));
    console.log(query_param.get('age'));
    console.log(query_param.get('city'));

    // const { id } = useParams()
    // useParam is use for dynamic routing
    // console.log(id);


    return (
        <div>
            <h1>
                {/* Hello {id} */}
            </h1>
            <h3>User Page</h3>
        </div>
    )
}

export default User
