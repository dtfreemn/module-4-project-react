import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOutUser } from '../services/user';


const NavBar = () => {
  return (
    <div id='nav-bar'>
      <span><NavLink className='ui button' to='/login'>Log In</NavLink></span>
      <span><NavLink className='ui button' onClick={logOutUser} to='/login'>Log Out</NavLink></span>
      <span><NavLink className='ui button' to='/me'>Profile</NavLink></span>
      <span><NavLink className='ui button' to='/trips/new'>Add Trip</NavLink></span>
    </div>
  )
}

export default NavBar;
