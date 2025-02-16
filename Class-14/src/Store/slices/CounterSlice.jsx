import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCounter: (state, action) => {
            state.counter = ++state.counter
        },
        decCounter: (state, action) => {
            state.counter = --state.counter
        }
    }
})

export const { addCounter, decCounter } = counterSlice.actions

export default counterSlice.reducer