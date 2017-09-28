import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOutUser } from '../services/user';


const NavBar = () => {
  return (
    <div style={{height:50, backgroundColor: 'black', color: 'white'}}>
      <NavLink to='/login'>Log In</NavLink>
      <br />
      <NavLink onClick={logOutUser} to='/login'>Log Out</NavLink>
    </div>
  )
}

export default NavBar;
