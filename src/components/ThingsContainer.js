import React from 'react';
import ThingsList from './ThingsList'
import ThingsFilter from './ThingsFilter'
import { Route } from 'react-router-dom'

class ThingsContainer extends React.Component {
  state = {
    things: [],
    filters: ['attractions', 'restaurants', 'hotels', 'activities', 'nightlife', 'activelife', 'arts', 'museums', 'sports'],
    currentFilter: 'attractions',
    savedThings: [...this.props.savedThings],
    errors: []
  }

  componentDidMount() {
    this.fetchThings()
    console.log(this.props)
  }

  addSavedThing = (thing) => {
    const newBody = JSON.stringify({description: thing.price, name: thing.name, url: thing.url, category: this.state.currentFilter, trip_id: this.props.tripId, image_url: thing.image_url})
    fetch('http://localhost:3000/api/v1/things', {
      method: 'post',
      body: newBody,
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .then((newThing) => {
        this.setState({
          savedThings: [...this.state.savedThings, newThing]
        })
      })
  }

  handleFilterChange = (filter) => {
    this.setState({
      currentFilter: filter
    })
    this.fetchThings(filter)
  }

  fetchThings = (filter) => {
    if (!filter) {
      filter = 'attractions'
    }
    let newBody = JSON.stringify({city: this.props.city.split(' ').join('+'), country: this.props.country.split(' ').join('+'), filter: filter})
    fetch('http://localhost:3000/api/v1/get-things', {
      method: 'post',
      body: newBody,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(newThings => {
        if (newThings.businesses) {
          this.setState({
            things: newThings.businesses
          })
        } else if (newThings.error) {
          this.setState({
            errors: ["Yelp was unable to find any options for this location. Sorry!"]
          }, () => console.log(this.state))
        }
      })

  }

  deleteSavedThing = (thing) => {
    let thingId= thing.id
    fetch(`http://localhost:3000/api/v1/things/${thingId}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(newSavedThings => {this.setState({
      savedThings: newSavedThings.things
    })
  })
  }

  render() {
    const thingsToRender = this.state.things.filter(thing => {
      const thingNames = this.state.savedThings.map(savedThing => {
        return savedThing.name
      })
    return !thingNames.includes(thing.name)
    })
    
    if (this.state.errors.length > 0) {
      return (
        <ThingsList errors={this.state.errors} />
        )
    }

    if (this.state.things.length > 0) {
    return (
      <div className='things-container'>
        <Route exact path='/me/trips/:id' render={(props) => {
          return (
            <span>
              <ThingsFilter filters={this.state.filters} handleFilterChange={this.handleFilterChange}/>
              <ThingsList things={thingsToRender} addSavedThing={this.addSavedThing} {...props}/>
            </span>
          )
        }} />
        <Route exact path='/me/trips/:id/saved' render={(props) => {
          return (
            <div>
            <div className='space-holder'>   </div>
            <ThingsList things={this.state.savedThings} deleteSavedThing={this.deleteSavedThing} errors={this.state.errors} {...props}/>
            </div>)}}/>
        <Route exact path='/me/trips/:id/map' render={(props) => <iframe className='framed' src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC_3kAbmqilTJZvJKk3YJVnkN5CC1l1ZIQ&q=${this.props.city}+${this.props.country}`}/>} />
      </div>
    )} else {
      return (
        <div></div>)
    }
  }
}

export default ThingsContainer;
