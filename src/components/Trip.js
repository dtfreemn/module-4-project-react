import React from 'react';
import { NavLink } from 'react-router-dom';
import ThingsContainer from './ThingsContainer'

const Trip = (props) => {
  const deleteTrip = (event) => {
    props.handleDelete(props.data)
  }
  
  console.log(props.data)

  const thingsContainer = props.location.pathname.includes('/me/trips/') ?
        <ThingsContainer tripId={props.data.id} city={props.data.city} country={props.data.country} savedThings={props.data.things}/> : null
      
  return(
    <div className='trip-list-extra-outer-div'>
      <div className='trip-box'>
        <h1 className='trip-header'><NavLink to={'/me/trips/' + props.data.id} >{props.data.title}</NavLink></h1>
        <h2 className='meta'>{props.data.city}, {props.data.country}</h2>
        <h2 className='description'>Budget: ${props.data.budget}</h2>
        <button className='inverted ui secondary button' onClick={deleteTrip}>Delete Trip</button>
      </div>
      {thingsContainer}
    </div>
  )
}

export default Trip;
