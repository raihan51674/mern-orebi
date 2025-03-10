import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  userInfo :null,
}
export const orebiSlice = createSlice({
  name:"orebi",
  initialState,
  reducers:{
    addToCart:(state, action)=>{
       
        state.products.push({...action.payload,quantity: 1})
     
    },
    increaseQuantity :(state,action)=>{
      const exitingProduct=state.products.find((item)=>item?._id === action.payload)

      if(exitingProduct){
       exitingProduct.quantity++;
      }
    },
    decreaseQuantity :(state,action)=>{
      const exitingProduct=state.products.find((item)=>item?._id === action.payload)

      if(exitingProduct){
        exitingProduct.quantity--;
      }
    },
    deleteProduct:(state, action)=>{
      state.products=state.products.filter((item)=> item._id !== action.payload)
    },
    resetCart:(state)=>{
      state.products=[];
    },
    addUser:(state,action)=>{
      state.userInfo=action.payload
    },
    removeUser:(state)=>{
      state.userInfo=null;
    },

  },
})
export const {addToCart, increaseQuantity, decreaseQuantity,deleteProduct,removeUser,resetCart,addUser}=orebiSlice.actions;
export default orebiSlice.reducer;