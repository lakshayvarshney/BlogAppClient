import React, { useState } from 'react';
import './createBlog.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  
    const id = localStorage.getItem('userId')
   
    const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    image: '',
    
  });
  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        const {data} = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/blog/create-blog`,{
            title:inputs.title,
            description:inputs.description,
            image:inputs.image,
            user: id
        })
        if(data.success){
            alert('Blog Created')
            navigate('/my-blogs')
        }
        
    } catch (error) {
        console.log(error)
        
    }
  };





  return (
    <>
      <div className='conta'>
       
        <form onSubmit={handleSubmit}>
         <div className='title'>
          <h1>Create A Post</h1>
        </div>
          <div>
            <label>Title:</label>
            <input
              type='text'
              name='title'
              value={inputs.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name='description'
              value={inputs.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type='text'
              name='image'
              value={inputs.image}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
