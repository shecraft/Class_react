import { createContext, useState } from "react";

export const authContext = createContext()

const AuthProvider =({children}) =>{
    const baseUrl = import.meta.env.VITE_baseUrl
    const [signingIn, setSigningIn] = useState(false)
    const signin = async (formData) => {
        setSigningIn(true)
        try {
            const res = await fetch(`${baseUrl}/auth/signin`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = res.json()
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }finally{
            setSigningIn(false)
        }
        
    }
    //  const [user, setUser] = useState({
    //     name:"Enny",
    //     email:"enny@gmail.com"
    //  })

      const isAuthenticated =()=>{
        const accessToken = localStorage.getItem("accessToken")
        if (accessToken) {
            return true
        }else{
            return false
        }
      }


    const value ={
        // user,
        signingIn,
        isAuthenticated,
        //  Signup,
        signin,
       
    }
     return(
         <authContext.Provider value={value}>
            {children}
         </authContext.Provider>
     )
}

export default  AuthProvider