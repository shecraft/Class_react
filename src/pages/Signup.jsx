import React, { useState } from 'react'

const Signup =  () => {
    const [formData, setFormData] = useState({
        name :"",
        email:"",
        password:""
    })
    const baseUrl = import.meta.env.VITE_baseUrl

    // const handleInput =(e)=>{
    //   const {name,value} = e.target
    //   setFormData(prev =>({...prev, [name]:value}))
    //   console.log(formData);
      
    // }
    const handleInput = (e)=>{
      const {name, value} = e.target
      setFormData(prev => ({...prev, [name] : value}))
        console.log(formData);

    }

    const handleSubmit =async (e) => {
        e.preventDefault()
        console.log(formData);
        
        try {
            const res = await fetch (`${baseUrl}/signup`,{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(formData)
            })
            const data = await res.json()
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }



  return (
    
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder='enter name' onChange={handleInput} />
        </div>

         <div>
           <label htmlFor="email">Email</label>
           <input type="email" name='email' id='email' placeholder='Enny@gmail.com' onChange={handleInput} />
         </div>
         <div>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' placeholder='Enny Password'  onChange={handleInput} />
        </div>
         <button>Sign Up</button>

      </form>
  )

}



  
    // <form onSubmit={} >
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <input type="email" name='email' id='email' placeholder='Enny@gmail.com' onChange={handleInput}/>
    //     </div>
    //     <div>
    //       <label htmlFor="name">Name</label>
    //       <input type="text" name='name' id='name' placeholder='Enny' />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input type="password" name='password' id='password' placeholder='Enny Password'  />
    //     </div>
    //     <button>Submit</button>
    // </form>
  


export default Signup