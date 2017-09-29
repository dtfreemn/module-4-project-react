import React from 'react';
import ThingsList from './ThingsList'

class ThingsContainer extends React.Component {
  state = {
    things: []
  }

  componentDidMount() {
    this.fetchThings()
  }
  
  fetchThings = () => {
    let newBody = JSON.stringify({city: this.props.city.split(' ').join('+'), country: this.props.country.split(' ').join('+')})
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
      <div>
        <ThingsList things={this.state.things} />
      </div>
    )
  }
}

export default ThingsContainer;