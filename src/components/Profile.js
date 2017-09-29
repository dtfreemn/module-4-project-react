import React from 'react';
import TripContainer from './TripContainer'

const Profile = (props) => {
    if (!props.user){
      return(
        <div></div>
      )
    } else {
      return(
        <div className='profile-wrapper'>
          <div className='nested-profile-grid'>  
            <div className='profile-box'>
              <h2>{props.user.username}</h2>
              <h3>{props.user.first_name} {props.user.last_name}</h3>
              <h3>{props.user.email}</h3>
            </div>
            <div className='trip-container'>
              <TripContainer trips={props.user.trips} {...props} />
            </div>
          </div>
        </div>
      )
    }
  }


export default Profile
