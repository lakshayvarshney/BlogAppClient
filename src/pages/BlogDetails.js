import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const BlogDetails = () => {
   
    const [blog,setBlog] = useState({})
    const [inputs, setInputs] = useState({});
     const id = useParams().id
    const navigate = useNavigate()

    const getBlogDetails = async ()=>{
        try {
            const {data} = await axios.get(`https://blogapp-v0g5.onrender.com/api/v1/blog/get-blog/${id}`)
            if(data?.success){
                setBlog(data?.blog)
                setInputs({
                    title: data?.blog.title,
                    description: data?.blog.description,
                    image: data?.blog.image,
                })
            }
            
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        getBlogDetails();
        

    },[id])
    
      const handleChange = (e)=>{
        setInputs((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value,
        }))
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
    
            const {data} = await axios.put(`https://blogapp-v0g5.onrender.com/api/v1/blog/update-blog/${id}`,{
                title:inputs.title,
                description:inputs.description,
                image:inputs.image,
                user: id
            })
            if(data.success){
                
                navigate('/my-blogs')
            }
            
        } catch (error) {
            console.log(error)
            
        }

      };
      console.log(blog);
  return (
    <>
      <div className='conta'>
       
        <form onSubmit={handleSubmit}>
         <div className='title'>
          <h1>Update A Post</h1>
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
          <button type='submit'>Update</button>
        </form>
      </div>
    </>
  )
}

export default BlogDetails
