import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom'
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React from "react";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/createBlog";
import BlogDetails from "./pages/BlogDetails";



function App() {
  return (
    
    <React.Fragment>
      <Header/>
      <Routes >
      <Route path="/" element={<Blogs/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/my-blogs" element={<UserBlogs/>}/>
      <Route path="/blog-details/:id" element={<BlogDetails/>}/>
      <Route path="/create-blogs" element={<CreateBlog/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      
    </Routes>
    </React.Fragment>
  );
}

export default App;
