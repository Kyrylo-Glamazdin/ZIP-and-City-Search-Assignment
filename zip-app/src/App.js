import React, { Component } from 'react';
import Nav from "./Nav.js"
import ZipForm from './ZipForm.js'
import './App.css';

class App extends Component {
  render() {
    return (
	  <div className="App Container">
	    <Nav>
		</Nav>
		<ZipForm searchZip="10016" />
	  </div>
    );
  }
}

export default App;
