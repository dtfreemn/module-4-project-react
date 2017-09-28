import React from 'react';
import Profile from './Profile'

class ProfileContainer extends React.Component {

  state={
    user: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users',{
      method:'get',
      headers: {
        'Authorization': localStorage.getItem('jwt'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => this.setState({user: json}))
  }


  render(){
    return(
      <div className='ui grid'>
      <Profile user={this.state.user}/>
      </div>
    )
  }

}
export default ProfileContainer
