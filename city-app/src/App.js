import React, { Component } from 'react';
import Nav from './Nav.js';
import CityForm from './CityForm.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
		<Nav />
        <CityForm />
      </div>
    );
  }
}

export default App;
