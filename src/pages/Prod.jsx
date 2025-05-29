import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../contexts/ProductContext'

const Prod = () => {
   const {fetchProducts, products} = useContext(productContext)
   useEffect(()=>{
    fetchProducts()
   },[])
   
  return (
    <div  className="bull">
        {
            products?.length > 0 ? (
                <section className='productscollected'>
                    {products?.map((product, index )=>(
                        <div className='eachdiv' key={index}>
                         <Link className = "divcollection" to={`/prods/${product._id}`} 
                             key={product._id}>
                             {/* <img src={product.image}alt="No image" width={100} /> */}
                             <h2>{product.title}</h2>                       
                         </Link>
                            {/* <p className='price'>{product.price}%</p> */}
                            <p>{product.description}</p>
                        </div>
                    ))}
                </section>
            ) : (
                <p> products</p>
            )
        }
    </div>
  )
}

export default Prod