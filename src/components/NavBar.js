import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOutUser } from '../services/user';


const NavBar = () => {
  return (
    <div style={{height:50, backgroundColor: 'black', color: 'white'}}>
      <span><NavLink className='ui button' to='/login'>Log In</NavLink></span>
      <span><NavLink className='ui button' onClick={logOutUser} to='/login'>Log Out</NavLink></span>
      <span><NavLink className='ui button' to='/me'>Profile</NavLink></span>
    </div>
  )
}

export default NavBar;
