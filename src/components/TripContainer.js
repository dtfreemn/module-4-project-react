import React from 'react';
import TripList from './TripList'
import { Route } from 'react-router-dom'

class TripContainer extends React.Component {
  state={
    trips: []
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

  componentDidMount() {
    this.setState({
      trips: this.props.trips
    })
  }

  deleteTrip = (trip) => {
    fetch(`http://localhost:3000/api/v1/trips/${trip.id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {this.setState({trips: json.trips}), this.props.history.push('/me')})
  }

  render(){
    return (
      <div className='nested-trip-container-grid'>
        <Route exact path='/me' render={(props) => <TripList trips={this.state.trips} handleDelete = {this.deleteTrip} {...props}/>}/>
        <Route path='/me/trips/:id' render={(props) => {
          let id = parseInt(props.match.params.id)
          let trip = this.state.trips.filter(trip => trip.id === id)
          return <TripList trips={trip} handleDelete={this.deleteTrip} {...props} />
        }} />
      </div>
    )
  }

}

export default TripContainer
