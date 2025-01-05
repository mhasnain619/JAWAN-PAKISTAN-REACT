import React, { useState } from 'react'
import bulbon from './assets/on.png'
import bulboff from './assets/off.png'
const BlubOnOff = () => {
    const [blub, setBlub] = useState()
    return (
        <>
            {blub ? <img width='200px' src={bulbon} alt="" /> : <img width='200px' src={bulboff} alt="" />}
            <button onClick={() => {
                setBlub(!blub)
            }}>{blub ? 'Off' : 'On'}</button>
        </>
    )
}

export default BlubOnOff
