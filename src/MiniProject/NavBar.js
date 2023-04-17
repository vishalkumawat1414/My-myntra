import React from 'react'
// import {AiOutlineShoppingCart }from 'react-icon/ai'
import { BsCart2 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import './Navbar.css'

function NavBar() {
  const cart = useSelector(state=>state.CartReducer.cart);
  let count =0;
  cart.forEach(item =>(count+=item.quantity));

  return (
    <nav>
        <div className='banner'><h1>My myntra</h1></div>
        <div className='right-layout'>
            <div className='cart-layout'>
                <BsCart2 />
                <h3>{count}</h3>
            </div>
        </div> 
    </nav>  
  ) 
}

export default NavBar