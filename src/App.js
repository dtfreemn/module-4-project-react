import React, { Component } from 'react';
import './App.css';
import NewUserForm from './components/NewUserForm'
import LogInForm from './components/LogInForm'
import NewTripForm from './components/NewTripForm'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import ProfileContainer from './components/ProfileContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <div className="ui container">
       <Route exact path='/users/new' component={NewUserForm} />
       <Route exact path='/login' render={(props) => <LogInForm {...props}/>} />
       <Route exact path='/trips/new' render={(props) => <NewTripForm {...props}/>} />
       <Route path='/me' component={ProfileContainer} />
       </div>
      </div>
    );
  }
}

export default App;
