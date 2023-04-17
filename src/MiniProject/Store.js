import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './CartSlice'
import ProductSlice from './ProductSlice'


export default configureStore({
     reducer:{
        ProductReducer:ProductSlice,
        CartReducer : CartSlice
     }
})  