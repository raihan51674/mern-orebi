import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import orebiReducer from './OrebiSlice'


const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, orebiReducer)

export const store = configureStore({
  reducer: {
    orebi : persistedReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:{
      ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
    },
  }),
})

export let persistor = persistStore(store)
