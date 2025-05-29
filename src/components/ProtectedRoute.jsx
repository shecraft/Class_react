import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        if (!isAuthenticated) {
            toast.warning("You have to sign in")
            navigate("/signin")
        }
    },[isAuthenticated, navigate])
    return isAuthenticated ?<Outlet /> : null
}

export default ProtectedRoute