import React from 'react';
import { createTrip } from '../services/trip'
import $ from 'jquery'

class NewTripForm extends React.Component {
  state = {
    startDate: '',
    endDate: '',
    title: '',
    country: '',
    city: '',
    budget: '',
    countries: [],
    cities: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/countries')
    .then(res => res.json())
    .then(json => this.setState({countries: json}))
  }

  handleStartDateChange = (e) => {
    this.setState({
      startDate: e.target.value
    })
  }

  handleEndDateChange = (e) => {
    this.setState({
      endDate: e.target.value
    })
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleCountryChange = (e) => {
    // this.setState({
    //   country: e.target.value
    // })
    this.fetchCities(e.target.value)
  }

  handleCityChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleBudgetChange = (e) => {
    this.setState({
      budget: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newBody = JSON.stringify({start_date: this.state.startDate, end_date: this.state.endDate, title: this.state.title, country: this.state.country, city: this.state.city, zip_code: this.state.zipCode, budget: this.state.budget})
    createTrip(newBody)
      .then(trip => console.log(trip))
      .then( () => {
        this.setState({
        startDate:'',
        endDate:'',
        country:'',
        city:'',
        title:'',
        budget:'',
        cities: []
      },() => this.props.history.push('/me'))
      })

    $('#countrySelect').prop('selectedIndex', 0)
  }


  makeCountryOptions = () => {
    let countries = this.state.countries.map((country, index) => <option value={country.id} key={index} name={country.name}>{country.name}</option>)
    countries.unshift(<option key='default'>Please Select a Country From Yelp</option>)
    return countries
  }

  fetchCities = (country_id) => {
    fetch(`http://localhost:3000/api/v1/countries/${country_id}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {this.setState({cities: json.cities, country: json.country.name})})
  }

  makeCityOptions = () => {
    let cities = this.state.cities.map((city, index) => <option key={index} value={city.name}>{city.name}</option>)
    if (cities.length > 0) {
      cities.unshift(<option key='default'>Please Select a City</option>)
    }
    return cities
  }

  render() {
    const countryOptions = this.makeCountryOptions()
    const cityOptions = this.makeCityOptions()
    return (
      <form className='form new-trip-form' onSubmit={this.handleSubmit}>
        <input type='date' placeholder='start date' onChange={this.handleStartDateChange} value={this.state.startDate} required/><br/><br/>
        <input type='date' placeholder='end date' onChange={this.handleEndDateChange} value={this.state.endDate} required/><br/><br/>
        <input type='text' placeholder='         name of trip' onChange={this.handleTitleChange} value={this.state.title} required/><br/><br/>
        <select className='ui selection dropdown' id='countrySelect' onChange={this.handleCountryChange} required>
          {countryOptions}
        </select><br/><br/>
        <select className='ui selection dropdown' id='citySelect' onChange={this.handleCityChange} required>
          {cityOptions}
        </select><br/><br/>
        <input type='number' placeholder='            budget' onChange={this.handleBudgetChange} value={this.state.budget} required/><br/><br/>
        <button className='ui secondary button' type='submit'>Create Trip</button>
      </form>
    )
  }
}

export default NewTripForm;
