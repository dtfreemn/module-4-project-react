import React from 'react';
import { createUser } from '../services/user'

class NewUserForm extends React.Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const newBody = JSON.stringify({username: this.state.username, password: this.state.password, first_name: this.state.firstName, last_name: this.state.lastName, email: this.state.email})
    createUser(newBody)
      .then(user => {
        localStorage.setItem('jwt', user.jwt)
        this.setState({
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          email: ''
        })
      })
      .then(() => this.props.history.push('/me'))
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  
  handlePasswordChange = (e) => {
    this.setState({
     password: e.target.value 
    })
  }
  
  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <input type='text' placeholder='          username' value={this.state.username} onChange={this.handleUsernameChange}/><br/><br/>
          <input type='password' placeholder='          password' value={this.state.password} onChange={this.handlePasswordChange}/><br/><br/>
          <input type='text' placeholder='          first name' value={this.state.firstName} onChange={this.handleFirstNameChange}/><br/><br/>
          <input type='text' placeholder='          last name' value={this.state.lastName} onChange={this.handleLastNameChange}/><br/><br/>
          <input type='text' placeholder='             email' value={this.state.email} onChange={this.handleEmailChange}/><br/><br/>
          <input className='ui secondary button' type='submit' value='Join!'/>
        </form>
        <img src={require('../images/tt-logo.png')} alt='logo-guy' />
      </div>
    )
  }
}

export default NewUserForm;