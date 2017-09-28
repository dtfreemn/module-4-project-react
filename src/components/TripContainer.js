import React from 'react';
import TripList from './TripList'

class TripContainer extends React.Component {
  state={
    trips: this.props.trips
  }
  //
  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/trips',{
  //     method:'get',
  //     headers: {
  //       'Authorization': localStorage.getItem('jwt'),
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(json => {this.setState({trips: json})})
  // }

  deleteTrip = (trip) => {
    fetch(`http://localhost:3000/api/v1/trips/${trip.id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {this.setState({trips: json.trips})})
  }

  render(){
    return(
      <TripList trips={this.state.trips} handleDelete = {this.deleteTrip}/>
    )
  }

}

export default TripContainer
