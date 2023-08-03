import React from 'react';
import './Header.css';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../redux/store';

const Header = () => {
  //global state
  let isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const handleLogout = () =>{
    try {
        dispatch(authActions.logout())
        alert('Logout Successfully')
        navigate('/login');
        
    } catch (error) {
        console.log(error)
        
    }
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
          <Link to='/'>MyBlogAPP</Link>
        </div>
        <ul>
          {isLogin && (
            <>
              <li>
                <Link to='/blogs'>Blogs</Link>
              </li>
              <li>
                <Link to='/my-blogs'>MyBlogs</Link>
              </li>
              <li>
                <Link to='/create-blogs'>CreateBlogs</Link>
              </li>
              <li>
                <Link to='/login' onClick={handleLogout}>Logout</Link>
              </li>
            </>
          )}

          {!isLogin && (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
