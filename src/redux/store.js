import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/feature/products/productSlice.jsx'


const store = configureStore({
  reducer: {
    products: productReducer
  },
})


export default store

