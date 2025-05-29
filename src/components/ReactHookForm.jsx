import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from'yup'


const SignUpFormSchema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    name: yup.string().required("Name is required").min(3, "Name should be at least 3 characters").max(12, "Name must not be more than 12 characters"),
    password: yup.string().required("Password is required").min(6,"Password must be at least 6 characters")
}) 

const ReactHookForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(SignUpFormSchema)
    })

    const submitForm = async (data) => {
        console.log(data);
        
    }
  return (
    <div>
         <form action="" onSubmit={handleSubmit(submitForm)} >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder='enter name' 
          {...register("name")}
            />
            <p style={{color:"red"}}>{errors.name && errors.name.message}</p>
        </div>

         <div>
           <label htmlFor="email">Email</label>
           <input type="email" id='email' placeholder='Enny@gmail.com' 
           {...register("email")}
            />
          <p style={{color:"red"}}>{errors.email && errors.email.message}</p>
         </div>
         <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' placeholder='Enny Password' 
          {...register("password")}
            />
            <p style={{color:"red"}}>{errors.password && errors.password.message}</p>
        </div>
         <button>Sign Up</button>

      </form>
    </div>
  )
}

export default ReactHookForm