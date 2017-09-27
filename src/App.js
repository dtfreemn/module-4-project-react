import React, { Component } from 'react';
import './App.css';
import NewUserForm from './components/NewUserForm'

class App extends Component {
  render() {
    return (
      <div className="App">
       <NewUserForm />
      </div>
    );
  }
}

export default App;
