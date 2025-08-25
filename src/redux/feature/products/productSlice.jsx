import { createSlice } from '@reduxjs/toolkit'



const initialState= [
    {
    id:1, 
    name: 'Product 1', 
    price: 100, 
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'fashion'
},
    {
        id:2, 
        name: 'Product 2', 
        price: 100, 
        img: 'https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=578&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'shotes'
},
    {
        id:3, 
        name: 'Product 3', 
        price: 100, 
        img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'bags'
},
    {
        id:4, 
        name: 'Product 3', 
        price: 100, 
        img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'gadget'
},
    {
        id:5, 
        name: 'Product 3', 
        price: 100, 
        img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'fashion'
    },
    {
        id:6, 
        name: 'Product 3', 
        price: 100, 
        img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'fashion'
    },
]

export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    addProduct: (state, action)=>{
        console.log("action",action)
        state.push({
            id: state.length >0 ? state[state.length - 1].id + 1 : 1,
            ...action.payload
        })
    },
    // removeProduct:(state, action)=>{
    //     const removeProducts = state.filter(product=> product.id !== action.payload.id)
    // }
  },
})


export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer