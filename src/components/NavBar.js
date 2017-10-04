import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOutUser } from '../services/user';


const NavBar = (props) => {
  
  let logInOutButton = localStorage.getItem('jwt') ? <NavLink className='ui button log-out grow' onClick={logOutUser} to='/login'>Log Out</NavLink> : <NavLink className='ui button log-in grow' to='/login'>Log In</NavLink>

  if (props.location.pathname === '/login') {
    logInOutButton = null
  }

  const profileButton = localStorage.getItem('jwt') && props.location.pathname !== '/me' ? <NavLink className='ui button profile-button grow' to='/me'>Profile</NavLink> : null

  const addTripButton = localStorage.getItem('jwt') && props.location.pathname !== '/trips/new' ? <NavLink className='ui button add-trip-button grow' to='/trips/new'>Add Trip</NavLink> : null

  let signUpButton = localStorage.getItem('jwt') ? null : <NavLink className='ui button sign-up-button grow' to='/users/new'>Sign Up</NavLink>

  if (props.location.pathname === '/users/new') {
    signUpButton = null
  }
  
  return (
    <div className='nav-bar'>

      {logInOutButton}
      {signUpButton}
      <span className='trip-tracker'>Trip•Tracker </span>
      <img className='logo-guy' src={require('../images/tt-logo.png')} alt='logo-guy' />
      {profileButton}
      {addTripButton}
    </div>
  )
}

export default NavBar;
