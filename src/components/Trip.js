import React from 'react';
import { NavLink } from 'react-router-dom';
import ThingsContainer from './ThingsContainer'

const Trip = (props) => {
  const deleteTrip = (event) => {
    props.handleDelete(props.data)
  }

  const thingsContainer = props.location.pathname.includes('/me/trips/') ?
        <ThingsContainer tripId={props.data.id} city={props.data.city} country={props.data.country} savedThings={props.data.things}/> : null

  let showSavedLink
  if (props.location.pathname === '/me/trips/' + props.data.id) {
    showSavedLink = <span><h2><NavLink className='show-saved-link' to={'/me/trips/' + props.data.id + '/saved'}>*See Your Saved Activities!*</NavLink></h2></span>
  } else if (props.location.pathname.includes('/saved')) {
    showSavedLink = <span><h2><NavLink className='show-saved-link' to={'/me/trips/' + props.data.id}>Add More Activities!</NavLink></h2></span>
  } else {
    showSavedLink = null
  }

  const colorClass = props.location.pathname === '/me' ? 'trip-box hover-color' : 'trip-box'
  
  const formatDate = (date) => {
    const newDate = new Date(date)
    return `${newDate.getMonth() +1}/${newDate.getDate()}/${newDate.getFullYear()}`
  }
  

  return(
    <div className='trip-list-extra-outer-div'>
      <div className={colorClass}>
        <h1 className='trip-header'><NavLink to={'/me/trips/' + props.data.id} >{props.data.title}</NavLink></h1>
        <h3 className='trip-date'>{formatDate(props.data.start_date)} <i className="long arrow right icon"></i>{formatDate(props.data.end_date)}</h3>
        {showSavedLink}
        <h2 className='meta'>{props.data.city}, {props.data.country}</h2>
        <h2 className='description'>Budget: ${props.data.budget.toLocaleString()}</h2>
        <button className='inverted ui secondary button grow' onClick={deleteTrip}>Delete Trip</button>
      </div>
      {thingsContainer}
    </div>
  )
}

export default Trip;
