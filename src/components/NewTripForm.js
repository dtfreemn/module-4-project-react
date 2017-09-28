import React from 'react';

class NewTripForm extends React.Component {
  state = {
    startDate: '',
    endDate: '',
    title: '',
    country: '',
    city: '',
    zipCode: '',
    budget: null
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
  }

  handleCityChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleZipCodeChange = (e) => {
    this.setState({
      zipCode: e.target.value
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
    fetch('http://localhost:3000/api/v1/trips', {
      method: 'post',
      body: newBody,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(localStorage.getItem('jwt'))
      }
    })
      .then(resp => resp.json())
      .then(trip => console.log(trip))
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='date' placeholder='start date' onChange={this.handleStartDateChange}/>
        <input type='date' placeholder='end date' onChange={this.handleEndDateChange}/>
        <input type='text' placeholder='name of trip' onChange={this.handleTitleChange}/>
        <input type='text' placeholder='country' onChange={this.handleCountryChange}/>
        <input type='text' placeholder='city' onChange={this.handleCityChange}/>
        <input type='text' placeholder='zipcode' onChange={this.handleZipCodeChange}/>
        <input type='number' placeholder='budget' onChange={this.handleBudgetChange}/>
        <button type='submit'>Create Trip</button>
      </form>
    )
  }
}

export default NewTripForm;