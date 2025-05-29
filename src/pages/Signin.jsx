import React, { useContext, useState } from 'react'
import { authContext } from '../contexts/AuthContext'

const Signin = () => {
  const {signin, signingIn} = useContext(authContext)
  const defaultData = {email:"", password:""}
  const [formData, setFormData] = useState(defaultData)

  const handleInput = (e)=>{
   const {name, value} = e.target
   setFormData(prev =>({...prev,[name]: value}))
  }

  const handleSubmit = ()=>{
    signin(formData)
  }


  return (
   <form action="" onSubmit={handleSubmit}>
         <div>
           <label htmlFor="email">Email</label>
           <input type="email" name='email' id='email' placeholder='Enny@gmail.com' onChange={handleInput} />
         </div>
         <div>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' placeholder='Enny Password' onChange={handleInput} />
        </div>
        <button>{signingIn? "loading" : "signin"}</button>


      </form>
  )
}

export default Signin