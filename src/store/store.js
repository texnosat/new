import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer  from './slices/favoritesSlice'

export const store = configureStore({
    reducer: {
      cart: counterReducer
    }
})