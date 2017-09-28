import React from 'react';

class LogInForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <button type='submit'>Log In</button>
      </form>
    )
  }

}

export default LogInForm;