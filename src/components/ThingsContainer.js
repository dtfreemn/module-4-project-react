import React from 'react';
import ThingsList from './ThingsList'
import ThingsFilter from './ThingsFilter'
import { Route } from 'react-router-dom'
import ReactLoading from 'react-loading'

class ThingsContainer extends React.Component {
  state = {
    things: [],
    filters: ['attractions', 'restaurants', 'hotels', 'activities', 'nightlife', 'activelife', 'arts', 'museums', 'sports'],
    currentFilter: 'attractions',
    savedThings: [...this.props.savedThings]
  }

  componentDidMount() {
    this.fetchThings()
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
      .then(newThings => this.setState({
        things: newThings.businesses
      }))

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


    return (
      <div className='things-container'>
        <ThingsFilter filters={this.state.filters} handleFilterChange={this.handleFilterChange}/>
        <Route exact path='/me/trips/:id' render={(props) => {
          return (
              <ThingsList things={thingsToRender} addSavedThing={this.addSavedThing} {...props}/>
          )
        }} />
        <Route exact path='/me/trips/:id/saved' render={(props) => <ThingsList things={this.state.savedThings} deleteSavedThing={this.deleteSavedThing} {...props}/>}/>
      </div>
    )
  }
}

export default ThingsContainer;
