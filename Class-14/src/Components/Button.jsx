import React from 'react'
import { addCounter, decCounter } from '../Store/slices/CounterSlice'
import { useDispatch } from 'react-redux'

const Button = () => {
    const dispatch = useDispatch()
    const incerement = () => {
        dispatch(addCounter())
    }
    const dec = () => {
        dispatch(decCounter())
    }
    return (
        <div>
            <button onClick={incerement}>Add</button>
            <button onClick={dec}>del</button>
        </div>
    )
}

export default Button
