import { createSlice } from '@reduxjs/toolkit'



const initialState= {
  value: 0,
}

export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
})


// export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer