import React, { Component } from 'react';
import './App.css';
import NewUserForm from './components/NewUserForm'
import LogInForm from './components/LogInForm'
import NewTripForm from './components/NewTripForm'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import ProfileContainer from './components/ProfileContainer'
import Authorize from './components/Authorize'
import Footer from './components/Footer'

class App extends Component {
  render() {

    const AuthProfileContainer = Authorize(ProfileContainer)
    const AuthNewTripForm = Authorize(NewTripForm)
    return (
      <div className="App">
       <Route path='/' render={(props) => <NavBar {...props} />} />
       <div className="ui container">
         <Route exact path='/users/new' render={(props) => <NewUserForm {...props} />} />
         <Route exact path='/login' render={(props) => <LogInForm {...props}/>} />
         <Route exact path='/trips/new' render={(props) => <AuthNewTripForm {...props}/>} />
         <Route path='/me' render={(props) => <AuthProfileContainer {...props} />} />
       </div>
      </div>
    );
  }
}

export default App;
