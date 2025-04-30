import Buttons from "./Buttons"
const ProductCards =()=>{
    const addtocart =()=>{
        alert `Added to cart`
    }
    return(
        <div className="name">
            <h1>Product Name: Garri</h1>
            <h3>Price:#500</h3>
            <Buttons handleClick={addtocart} text="Add to cart"/>
        </div>
    )
}

export default ProductCards