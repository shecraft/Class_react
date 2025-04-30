import { useState } from "react"
import Buttons from "./Buttons"
const Counter=()=>{
    const [book, setBook] = useState(2)
    const changeNumber =()=>{
        setBook((prev)=>(prev + 1))
    }
    const changeNumbe =()=>{
        setBook((prev)=>(prev - 1))
    }
    const [isLoggedIn, setLoggedIn] = useState(false)
    const handleClick =()=>{
        setLoggedIn(true) 
    }
    return(
        <div>
            <h2>Hooks</h2>
            <p>Book:{book}</p>
            <button onClick={changeNumber}>Add</button>
            <button onClick={changeNumbe}>Sub</button>

            {
                isLoggedIn ?(
                    <p>Welcome</p>
                ) : (
                    <div>
                        <p>Please Login</p>
                        <button onClick={handleClick}>Login</button>
                    </div>
                )
            }
        </div>
    )
}
export default Counter