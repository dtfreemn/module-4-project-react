import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThingsContainer from './ThingsContainer'

const Trip = (props) => {
  const deleteTrip = (event) => {
    props.handleDelete(props.data)
  }
  return(  
    <div className='ui cards'>
      <div className='card'>
        <div className='header'><NavLink to={'/me/trips/' + props.data.id} >{props.data.title}</NavLink></div>
        <div className='meta'>{props.data.city}, {props.data.country}</div>
        <div className='description'>Budget: ${props.data.budget}</div>
        <button className='inverted ui secondary button' onClick={deleteTrip}>Delete Trip</button>
      </div>
      <div className='card'>
        <ThingsContainer city={props.data.city} country={props.data.country}/>
      </div>
    </div>
  )
}

export default Trip;
