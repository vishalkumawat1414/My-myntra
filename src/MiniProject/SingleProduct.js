import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addTocart, removeItem } from './CartSlice';
import './SingleProduct.css'


function SingleProduct({product}) {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.CartReducer.cart)
  const currItem = cart.find(item =>item.id == product.id)
  const curQty = currItem?currItem.quantity:0;

  return (
    <>
    <div className='SingleProduct'>
        <img className='productImg' src={product.image} alt={product.id} />
       
  <div className='productInfo'> <h2  className='productTitle' >{product.title}</h2>
        <p className='productPrice' >{product.price}</p></div>
   
  <div className="cartInfo">
         <button className='button' onClick={()=>{dispatch(removeItem(product.id))}}>-</button>
         <h2>{curQty}</h2>
         <button className='button' onClick={()=>{dispatch(addTocart(product.id))}}>+</button>
  </div> 
  </div>
  </>
  )
}

export default SingleProduct