import React from 'react';
import Trip from './Trip'

const TripList = (props) => {
  let allTrips
  if (props.trips && props.trips.length > 0){
    allTrips = props.trips.map((trip, index)=> <Trip data={trip} key={index} handleDelete={props.handleDelete} {...props}/>)
  } else {
    allTrips = <h1 className='no-trips'>Click the Add Trip button to create your first trip!!</h1>
  }
  return(
    <div className='trip-list'>
      <div className='nested-trip-list-grid'>
        {allTrips}
      </div>
    </div>
  )
}

export default TripList
