import React from 'react';
import TripContainer from './TripContainer'

const Profile = (props) => {
    if (!props.user){
      return(
        <div></div>
      )
    } else {
      return(
        <div>
          <div className='ui card'  id='profile-card'>
            <p>{props.user.username}</p>
            <p>{props.user.first_name}</p>
            <p>{props.user.last_name}</p>
            <p>{props.user.email}</p>
          </div>
          <div>
            <TripContainer trips={props.user.trips} {...props} />
          </div>
        </div>
      )
    }
  }


export default Profile
