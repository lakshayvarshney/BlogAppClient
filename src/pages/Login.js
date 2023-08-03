import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./Register.css"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { authActions } from '../redux/store'

const Login = () => {

  const serverurl = import.meta.env.VITE_SERVER_URL

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input,setInput] = useState({
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
      const {data} = await axios.post(`${serverurl}/api/v1/user/login`,{
        email:input.email,
        password:input.password})
      if(data.success){
        localStorage.setItem("userId",data?.user._id);
        dispatch(authActions.login())

       alert('user login successfully')
       navigate('/')
        
        
       
      }

      else {
        alert('Invalid email or password'); // Handle the error case
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='containerr'>
      <div className='heading'>Login</div>
      <div className='form'>
      
      
      <input type='email' className='email' placeholder='Email' value={input.email} onChange={handleChange} name='email'/>
      <input type='password' className='password' placeholder='Password' value={input.password} onChange={handleChange} name='password'/>
        
      </div>
      <button className='submit'>Submit</button>
      <div className='footer'>

      <button className='link'><Link to='/register'> NOT A USER ? PLEASE REGISTER</Link></button>
      </div>
      </div>
      </form>
    </>
  )
}

export default Login
