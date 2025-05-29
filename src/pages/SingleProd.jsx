import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {productContext} from "../contexts/ProductContext"

const SingleProd = () => {
    const {fetchSingleProd,singleProducts} = useContext(productContext)
    const {id} = useParams()

    useEffect(()=>{
        fetchSingleProd(id)
    }, [])
  return (
    <div className='bull'>
        <section className='productscollected'>
            <div className='eachdiv'>
              <div className='divcollection'>
                 <img src={singleProducts.image}alt="No image" width={100} />
                 <h2>{singleProducts.title}</h2>
              </div>
               <p>{singleProducts.description}</p>
               <p className='price'>{singleProducts.price}</p>
            </div>
        </section>
    </div>
  )
}

export default SingleProd