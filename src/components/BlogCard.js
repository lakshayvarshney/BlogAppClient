import React from 'react';
import './BlogCard.css';
import {AiTwotoneEdit,AiFillDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogCard = ({ username, title, time, image, description,id,isUser }) => {

  const navigate = useNavigate()

  const handleEdit = () =>{

    navigate(`/blog-details/${id}`)
  }

  const handleDelete = async ()=>{
    try {
      const {data} = await axios.delete(`https://blogapp-v0g5.onrender.com/api/v1/blog/delete-blog/${id}`)
      if(data.success){
        alert("Blog Deleted")
        navigate('/blogs')

      }

      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className="card-container">
      <div className="blog-card">
      
        <div className="blog-image">
          <img src={image} alt={title} />
        </div>

        {isUser && (
        <>
        <div className='icon'>
        <AiTwotoneEdit onClick={handleEdit}/>
        <AiFillDelete onClick={handleDelete}/>
        </div>
        </>
      )}
        <div className="blog-content">
          <h2 className="blog-title">Title:{title}</h2>
          <p className="blog-username">By {username}</p>
          <p className="blog-created-at">Created at: {time}</p>
          <p className="blog-description">Description:{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
