import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOutUser } from '../services/user';


const NavBar = (props) => {
  
  let logInOutButton = localStorage.getItem('jwt') ? <NavLink className='ui button log-out' onClick={logOutUser} to='/login'>Log Out</NavLink> : <NavLink className='ui button log-in' to='/login'>Log In</NavLink>

  if (props.location.pathname === '/login') {
    logInOutButton = null
  }

  const profileButton = localStorage.getItem('jwt') ? <NavLink className='ui button profile-button' to='/me'>Profile</NavLink> : null

  const addTripButton = localStorage.getItem('jwt') ? <NavLink className='ui button add-trip-button' to='/trips/new'>Add Trip</NavLink> : null

  const signUpButton = localStorage.getItem('jwt') ? null : <NavLink className='ui button sign-up-button' to='/users/new'>Sign Up</NavLink>
  
  return (
    <div className='nav-bar'>

      {logInOutButton}
      {signUpButton}
      <span className='trip-tracker'>Trip•Tracker </span>
      <img className='logo-guy' src={require('../images/tt-logo.png')} />
      {profileButton}
      {addTripButton}
    </div>
  )
}

export default NavBar;
