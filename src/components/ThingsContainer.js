import React from 'react';
import ThingsList from './ThingsList'
import ThingsFilter from './ThingsFilter'

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
    const newBody = JSON.stringify({description: thing.price, name: thing.name, url: thing.url, category: this.state.currentFilter, trip_id: this.props.tripId})
    fetch('http://localhost:3000/api/v1/things', {
      method: 'post',
      body: newBody,
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
    })
      .then(() => {
        this.setState({
          savedThings: [...this.state.savedThings, thing]
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

  render() {
    return (
      <div className='things-container'>
        <ThingsFilter filters={this.state.filters} handleFilterChange={this.handleFilterChange}/>
        <ThingsList things={this.state.things} addSavedThing={this.addSavedThing}/>
        <div className='saved-things'>
          {this.state.savedThings.map((thing, index) => <div><a href={thing.url}>{thing.name}</a><hr /></div>)}
        </div>
      </div>
    )
  }
}

export default ThingsContainer;