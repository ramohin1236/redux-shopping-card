import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/feature/products/productSlice.jsx'
import cardReducer from '../redux/feature/cards/cartSlice.jsx'

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cardReducer
  },
})


export default store

