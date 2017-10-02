import React from 'react';
import { logInUser } from '../services/user'

class LogInForm extends React.Component {
  state = {
    username: '',
    password: '',
    currentError: null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newBody = JSON.stringify({username: this.state.username, password: this.state.password})
    logInUser(newBody)
      .then(userJSON => {
        if (userJSON.user) {
          localStorage.setItem("jwt", userJSON.jwt)
          this.setState({
            username: '',
            password: ''
          })
        } else {
          this.setState({
            currentError: userJSON.error
          })
        }
      })
      .then(() => {
        if (localStorage.getItem('jwt')) {
          this.props.history.push('/me')
        }
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
    const errorMessage = this.state.currentError ? <h2 className='error-message'>{this.state.currentError}</h2> : null
    return(
      <form className='form' onSubmit={this.handleSubmit}>
        {errorMessage}
        <input type='text' placeholder='username' onChange={this.handleUsernameChange} value={this.state.username}/>
        <br/><br/>
        <input type='password' placeholder='password' onChange={this.handlePasswordChange} value={this.state.password}/>
        <br/><br/>
        <button className='ui secondary button' type='submit'>Log In</button>
      </form>
    )
  }

}

export default LogInForm;
