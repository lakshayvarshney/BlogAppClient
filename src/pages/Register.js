import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"
import axios from 'axios'

const Register = () => {

  

  const [input,setInput] = useState({
    name:'',
    email:'',
    password:''
  })


  const handleChange = (e) =>{
    setInput(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
   
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/user/register`,{
        username:input.name,
        email:input.email,
        password:input.password})
      if(data.success){
        alert('user register successfully')
        window.location.href = '/login';
       
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='containerr'>
      <div className='heading'>Register</div>
      <div className='form'>
      
      <input type='text' className='name' placeholder='Name' value={input.name} onChange={handleChange} name='name'/>
      <input type='email' className='email' placeholder='Email' value={input.email} onChange={handleChange} name='email'/>
      <input type='password' className='password' placeholder='Password' value={input.password} onChange={handleChange} name='password'/>
        
      </div>
      <button className='submit'>Submit</button>
      <div className='footer'>

      <button className='link'><Link to='/login'> ALREADY REGISTERED ? PLEASE LOGIN</Link></button>
      </div>
      </div>
      </form>
    </>
  )
}

export default Register
