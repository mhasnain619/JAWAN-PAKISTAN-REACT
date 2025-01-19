import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    let obj = {
        name: 'hasnain',
        city: 'Karachi'
    }
    const gote = () => {
        navigate(`/about/${obj.name}`)
        setSearchParams(obj);
    }
    return (
        <div>
            <h1>
                Home
            </h1>
            <Button variant='contained' onClick={gote}>
                Go to About
            </Button>
            <Link to='/about'>Go to About </Link>
        </div>
    )
}

export default Home
