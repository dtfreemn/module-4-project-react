import React from 'react';
import ThingsList from './ThingsList'
import ThingsFilter from './ThingsFilter'

class ThingsContainer extends React.Component {
  state = {
    things: [],
    filters: ['attractions', 'restaurants', 'hotels', 'activities', 'nightlife', 'activelife', 'arts', 'museums', 'sports'],
    currentFilter: 'attractions'
  }

  componentDidMount() {
    this.fetchThings()
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
        <ThingsList things={this.state.things} />
      </div>
    )
  }
}

export default ThingsContainer;