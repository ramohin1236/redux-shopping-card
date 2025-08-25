import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'antd';


const initialState= []

const onClose = e => {
  console.log(e, 'I was closed.');
};

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addtoCart: (state, action)=>{
        console.log(action.payload)
        const existingProduct = state.find((product)=>product.productId === action.payload.id)
        if(existingProduct){
          
         alert('This product is already in the cart.', 3, onClose);
        }else{
          state.push({...action.payload,id: Date.now(), quantity: 1, productId:action.payload.id})
        }
  },}
})


export const { addtoCart } = cartSlice.actions

export default cartSlice.reducer