import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const buy=()=>{
    alert(`Are you ready to purchase your goods`)
  }
  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setProducts(data)
      console.log(data);
      
    } catch (error) {
      console.log(error);
      
    }finally{
      setIsLoading(false)
    }
    
  }

   useEffect(()=>{
          fetchProducts()
          console.log(fetchProducts());
       }, [])

       
  // fetchProducts()
    if (isLoading) {
      return <p>Loading.......</p>
    }
  return (
       <section className="bull">
               <div className='productscollected'>
                  {products.map((product)=>(
                      <div className='eachdiv'>
                         <Link className = "divcollection"to={`/product/${product.id}`} 
                            key={product.id}>
                           <img src={product.image}alt="No image" width={100} />
                           <h2>{product.title}</h2>                       
                       </Link>
                       <div className='price-and-button'>
                              <p className='price'>${product.price}</p>
                              <Link to ={`/product/${product.id}`}>
                                 <button className='buy-btn' onClick={buy}>Purchase</button>
                              </Link>
                           </div>
                           {/* <p className='description'>{product.description}</p>   */}
                      </div>
                  ))
                  }
                </div>
       </section>
  )
}

export default Product