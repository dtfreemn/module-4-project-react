import React from 'react'

const Trip = (props) => {
  const deleteTrip = (event) => {
    props.handleDelete(props.data)
  }
  return(
    <div>
    <p>{props.data.title}</p>
    <button onClick={deleteTrip}>Delete Trip</button>
    </div>
  )
}

export default Trip
