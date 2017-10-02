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
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='username' value={this.state.username} onChange={this.handleUsernameChange}/>
        <input type='password' placeholder='password' value={this.state.password} onChange={this.handlePasswordChange}/>
        <input type='text' placeholder='first name' value={this.state.firstName} onChange={this.handleFirstNameChange}/>
        <input type='text' placeholder='last name' value={this.state.lastName} onChange={this.handleLastNameChange}/>
        <input type='text' placeholder='email' value={this.state.email} onChange={this.handleEmailChange}/>
        <input type='submit' value='Submit'/>
      </form>
    )
  }
}

export default NewUserForm;