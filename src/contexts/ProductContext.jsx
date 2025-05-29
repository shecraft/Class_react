import { createContext, useState } from "react";

export const productContext = createContext()

const ProductProvider =({children})=>{
    const [products, setProducts] = useState([])
    const baseUrl = import.meta.env.VITE_baseUrl
    const fetchProducts = async () => {
        try {
            const res = await fetch(`${baseUrl}/products`)
            const data = await res.json() 
            setProducts(data.product)
        } catch (error) {
            console.log(error);
            
        }
    }


    const [singleProducts, setSingleProducts] = useState([])
        const fetchSingleProd = async (id) => {
            try {
                const res = await fetch(`${baseUrl}/products/${id}`)
                const data = await res.json()
                setSingleProducts(data)
            } catch (error) {
                console.log(error);
                
            }
        }

        const value ={
            products,
            fetchProducts,
            baseUrl,
            fetchSingleProd,
            singleProducts
       }
      return(
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
      )
}

export default ProductProvider