import { useEffect, useState } from "react"
import Buttons from "./Buttons";
import Icon from "./Icon";

const Products =()=>{
    const [products, setProducts] = useState([])
    const shopNow =()=>{
        alert `Start shopping`
    }
    const [isLoading, setIsLoading] = useState(false)
    const fetchProducts = async () => {
        try {

            const data = await res.json();
            setProducts(data)
        } catch (error) {
            // console.log(error);
            
        } 
    }

     useEffect(()=>{
        fetchProducts()
     }, [])
    fetchProducts()
    return(
        <section>
             {
                products.length === 0 ?(
                    <div>
                        <p>No Product!</p>
                    </div>
                ) : (
                    <div className="product" >
                        {
                            products.map((ele, index)=>(
                                <div className="pro" key={index}>
                                  <div className="tone">
                                     <img src={ele.image} alt="productImage" />
                                     <h2>{ele.title}</h2>
                                     <span>{ele.price}</span>
                                     <p>{ele.description}</p>
                                     <Buttons icon={<Icon cName="fas fa-shopping-bag" />} handleClick={shopNow} text="Shop now"/>
                                  </div>
                                </div>
                            ))
                        }
                    </div>
                )
             }
        </section>
    )
}
export default Products