import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const productContext = createContext()
function ProductsProvider({children}) {
    let [products , setProducts] =useState([])
    function GetData() {
        axios.get("http://localhost:3000/products6")
        .then((res) =>(
            setProducts(res.data)
        )) 
        
    } 
    let values={
        products,
        setProducts
    }
    useEffect(()=>{
        GetData()
    },[])
  return (
    <productContext.Provider value={values}>
      {children}
    </productContext.Provider>
  )
}

export default ProductsProvider
