import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './globalCart'

export const store = configureStore({
    reducer : {
        counter: counterReducer,
    }
})