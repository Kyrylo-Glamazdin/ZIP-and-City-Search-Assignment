import React, { Component } from 'react';
import Nav from "./Nav.js"
import ZipForm from './ZipForm.js'
import Info from "./Info.js"
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
		}
	}
  render() {
    return (
	  <div className="app-container">
	    <Nav>
		</Nav>
		<ZipForm />
	  </div>
    );
  }
}

export default App;
