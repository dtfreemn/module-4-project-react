import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOutUser } from '../services/user';


const NavBar = (props) => {
  
  let logInOutButton = localStorage.getItem('jwt') ? <span><NavLink className='ui button' onClick={logOutUser} to='/login'>Log Out</NavLink></span> : <span><NavLink className='ui button' to='/login'>Log In</NavLink></span>

  if (props.location.pathname === '/login') {
    logInOutButton = null
  }

  const profileButton = localStorage.getItem('jwt') ? <span><NavLink className='ui button' to='/me'>Profile</NavLink></span> : null

  const addTripButton = localStorage.getItem('jwt') ? <span><NavLink className='ui button' to='/trips/new'>Add Trip</NavLink></span> : null
  
  return (
    <div id='nav-bar'>
      {logInOutButton}
      {profileButton}
      {addTripButton}
    </div>
  )
}

export default NavBar;
