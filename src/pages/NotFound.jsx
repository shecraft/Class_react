import {Link} from"react-router-dom"
// import React, { useContext } from 'react'
// import { authContext } from "../contexts/AuthContext"

const NotFound = () => {
  // const {user} = useContext(authContext)
  return (
    <div className="allDivs">
        <img src="src/images/not_found-removebg-preview.png" alt="" />
        {/* <p>Sorry,{user.name}</p> */}
        <h1>Page not found</h1>
        <Link className="BackToHomepage" to="/"> <i className="fas fa-arrow-up"></i></Link>
    </div>
  )
}

export default NotFound