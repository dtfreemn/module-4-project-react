import React from 'react';
import { logInUser } from '../services/user'

class LogInForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newBody = JSON.stringify({username: this.state.username, password: this.state.password})
    logInUser(newBody)
      .then(user => {
        localStorage.setItem("jwt", user.jwt)
        this.setState({
          username: '',
          password: ''
        })
      })
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='username' onChange={this.handleUsernameChange}/>
        <input type='password' placeholder='password' onChange={this.handlePasswordChange}/>
        <button type='submit'>Log In</button>
      </form>
    )
  }

}

export default LogInForm;