import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminProtectedRoutes = () => {
   const [isLoggedin , setIsLogged] = useState(false)
   const navigate = useNavigate()

   useEffect(()=>{
      if (!isLoggedin) {
        navigate("/login")
      }
   }, [isLoggedin, navigate])

   return isLoggedin ? <Outlet /> : null
}

export default AdminProtectedRoutes