import React, { Component } from 'react';
import './App.css';
import NewUserForm from './components/NewUserForm'
import LogInForm from './components/LogInForm'

class App extends Component {
  render() {
    return (
      <div className="App">
       <NewUserForm />
       <LogInForm />
      </div>
    );
  }
}

export default App;
