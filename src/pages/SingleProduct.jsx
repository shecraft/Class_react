import swal from "sweetalert"
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const showAlert = () => {
    swal({
      title: "Good job!",
      text: "Item added to basket",
      icon: "success",
      className: "my-swal", 
      button: {
        text: "OK",
        className: "my-button-class", 
      }
    });
  };
  
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const {id} = useParams()
  const displaySingleProducts = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const singleProduct = await res.json()
      setProducts(singleProduct)
    //   console.log(data);
      
    } catch (error) {
      console.log(error);
      
    }finally{
      setIsLoading(false)
    }
    
  }

   useEffect(()=>{
    if (id) {
        displaySingleProducts()
    }
       }, [id])

       
  // fetchProducts()
if(isLoading) return <p className='loading'>Loading......</p>
  return (
       <section className="bull">
                      <div  className='productscollected'>
                            <div className = "eachdiv" key={products.id}>
                              <div  className = "divcollectio">
                                <img src={products.image}alt="No image" width={200} />
                                <h2>{products.title}</h2>
                              </div>
                             <div className='price-and-buy'>
                               <p className='price'>{products.price}</p>
                               <button className='buy-btn' onClick={showAlert}>Add to Basket</button>
                             </div>
                              <p className='descript'>{products.description}</p>                         
                           </div>
                      </div>
       </section>
  )
}

export default SingleProduct