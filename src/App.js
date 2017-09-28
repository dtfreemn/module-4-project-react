import React, { Component } from 'react';
import './App.css';
import NewUserForm from './components/NewUserForm'
import LogInForm from './components/LogInForm'
import NewTripForm from './components/NewTripForm'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <NewUserForm />
       <LogInForm />
       <NewTripForm />
      </div>
    );
  }
}

export default App;
