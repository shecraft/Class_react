import{Link} from"react-router-dom"
import Buttons from "./Buttons"
import { useContext } from "react"
import { authContext } from "../contexts/AuthContext"
const Header = ()=>{
    // const {user} = useContext(authContext)
    return(
        <div className="header" >
            <h1 >Products</h1>

            <div className="linkhref">
                <Link to="/Myproduct">MyProducts</Link>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/About/:id">Join</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/signup">Signup</Link>
                {/* <p>Hi,{user.name}</p> */}
            </div>


            
        </div>
        
    )
}

export default Header