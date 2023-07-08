import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import orderSlice from './slices/orderSlice'

const store = configureStore({
  reducer: combineReducers({
    [productSlice.name]: productSlice.reducer,
    [orderSlice.name]: orderSlice.reducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
