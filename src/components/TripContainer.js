import React from 'react';
import TripList from './TripList'
import { Route } from 'react-router-dom'

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
      <div>
        <Route exact path='/me' render={(props) => <TripList trips={this.state.trips} handleDelete = {this.deleteTrip} {...props}/>}/>
        <Route path='/me/trips/:id' render={(props) => {
          console.log(props)
          let id = parseInt(props.match.params.id)
          let trip = this.state.trips.filter(trip => trip.id === id)
          console.log(trip)
          return <TripList trips={trip} handleDelete={this.deleteTrip} {...props} />
        }} />
      </div>
    )
  }

}

export default TripContainer
