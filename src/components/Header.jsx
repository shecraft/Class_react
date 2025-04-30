import{Link} from"react-router-dom"
import Buttons from "./Buttons"
const Header = ()=>{
    return(
        <div className="header" >
            <h1 >Products</h1>

            <div className="linkhref">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/About/:id">Join</Link>
                <Link to="/Contact">Contact</Link>
            </div>


            
        </div>
        
    )
}
 const styles ={
    container:{
        display:"flex",
        justifyContent:"space-around",
        gap:"1rem",
        backgroundColor:"blue",
        padding:".5rem"
    },
    logo:{
        fontSize:"28px",
        color:"white"
    },
    tag:{
        color:"red",
        padding:".5rem",
    }
 }

export default Header