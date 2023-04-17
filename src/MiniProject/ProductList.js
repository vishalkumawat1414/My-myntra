import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'

import { loadProducts } from './ProductSlice';
import {useSelector} from 'react-redux'
import SingleProduct from './SingleProduct';
import './ProductList.css'

function ProductList() {

  const dispatch = useDispatch()

  
  // fetching data from store
  const products = useSelector(state=>state.ProductReducer.products)

  useEffect(()=>{
        fetchData();
   },[])


  async function fetchData(){
   
   try { const response = await fetch("https://fakestoreapi.com/products");
    let jsonData = await response.json();
    console.log(jsonData)
    dispatch(loadProducts(jsonData))
  }
  catch(e){console.log(e,'error occured');}
  }

 

  return (
    <div className='productList'>
     { Array.isArray(products)?products.map((item) => <SingleProduct key = {item.id} product = {item} />):null}
      </div>
  ) 
}

export default ProductList