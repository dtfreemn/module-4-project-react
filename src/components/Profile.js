import React from 'react';
import TripContainer from './TripContainer'

const Profile = ({user}) => {
    console.log(user)
    if (!user){
      return(
        <div></div>
      )
    } else {
      return(
        <div className='sixteen wide column'>
          <div className='ui card'>
            <p>{user.username}</p>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
          </div>
          <div>
            <TripContainer trips={user.trips} />
          </div>
        </div>
      )
    }
  }


export default Profile
