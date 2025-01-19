import { Button } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    const gote = () => {
        navigate('/')
    }
    const location = useLocation()
    console.log(location.state);

    return (
        <div>
            <h1>About Page</h1>
            <Button variant='contained' onClick={gote}>
                Go to Home
            </Button>
        </div>
    )
}

export default About
