import React, { useState } from 'react'

const CounterApp = () => {
    let [counter, setCounter] = useState(0)
    const inceri = () => {
        setCounter(counter++)
    }
    const decri = () => {
        setCounter(counter <= 0 ? 0 : counter--)
    }
    const reset = () => {
        setCounter(0)
    }
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={inceri}>Inceriment+</button>
            <button onClick={decri}>Decriment-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default CounterApp
