import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        cart:[]
    },
    reducers:{
        addTocart:(state,action) =>{
            const curItem = state.cart.find(item =>item.id==action.payload)
            if(curItem){
                curItem.quantity+=1;
                return;
            }
            state.cart.push({
                quantity:1,
                id:action.payload
            })
        },
        removeItem:(state,action) =>{
        const curItem = state.cart.find(item =>item.id==action.payload)
            if(curItem){
                curItem.quantity-=1;
                 if(curItem.quantity==0){
                 state.cart = state.cart.filter(item =>item.id != action.payload)
            }
            }
           
        }


    }
})
export const {addTocart,removeItem} = cartSlice.actions;
export default cartSlice.reducer;