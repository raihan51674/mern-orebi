import { configureStore } from '@reduxjs/toolkit'
import orebiReducer from './OrebiSlice'

export const store = configureStore({
  reducer: {
    orebi : orebiReducer,
  },
})