import React from 'react';
import Trip from './Trip'

const TripList = (props) => {
  let allTrips
  if (props.trips.length > 0){
    console.log(props.trips)
    allTrips = props.trips.map((trip, index)=> <Trip data={trip} key={index} handleDelete={props.handleDelete} />)
  } else {
    allTrips = null
  }
  return(
    <div>
    {allTrips}
    </div>
  )
}

export default TripList
