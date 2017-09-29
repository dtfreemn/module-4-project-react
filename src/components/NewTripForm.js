import React from 'react';
import { createTrip } from '../services/trip'
import { countryList } from '../countrydata'
import $ from 'jquery'

class NewTripForm extends React.Component {
  state = {
    startDate: '',
    endDate: '',
    title: '',
    country: '',
    city: '',
    budget: '',
    countries: countryList,
    cities: []
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
    this.setState({
      country: e.target.value
    })
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
    this.setState({
      startDate:'',
      endDate:'',
      country:'',
      city:'',
      title:'',
      budget:'',
      cities: []
    },() => this.props.history.push('/me'))

    $('#countrySelect').prop('selectedIndex', 0)
  }


  makeCountryOptions = () => {
    let countries = this.state.countries.map((country, index) => <option value={country.name} key={index}>{country.name}</option>)
    countries.unshift(<option key='default'>Please Select a Country</option>)
    return countries
  }

  fetchCities = (country) => {
    fetch(`https://andruxnet-world-cities-v1.p.mashape.com/?query=${country.split(" ").join('+')}&searchby=country`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'X-Mashape-Key': 'XN2RXLsJUDmshULXYqHy1PUTfuifp1mikzajsnCNgqHLt8PdVM'
      }
    })
    .then(res => res.json())
    .then(json => {this.setState({cities: json})})
  }

  cityOptions = () => {
    return this.state.cities.map((city, index) => <option key={index} value={city.city}>{city.city}</option>)
  }


  render() {
    const countryOptions = this.makeCountryOptions()
    const cityOptions = this.cityOptions()
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='date' placeholder='start date' onChange={this.handleStartDateChange} value={this.state.startDate}/>
        <input type='date' placeholder='end date' onChange={this.handleEndDateChange} value={this.state.endDate}/>
        <input type='text' placeholder='name of trip' onChange={this.handleTitleChange} value={this.state.title}/>
        <select id='countrySelect' onChange={this.handleCountryChange}>
          {countryOptions}
        </select>
        <select id='citySelect' onChange={this.handleCityChange}>
          {cityOptions}
        </select>
        <input type='number' placeholder='budget' onChange={this.handleBudgetChange} value={this.state.budget}/>
        <button type='submit'>Create Trip</button>
      </form>
    )
  }
}

export default NewTripForm;
