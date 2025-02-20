import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/CounterSlice'
import proDuctReducer from './slices/ProductSlice'
import addToCartreducer from './slices/addToCartSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: proDuctReducer,
        cart: addToCartreducer
    }
})

export default store