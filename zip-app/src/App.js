import React, { Component } from 'react';
import Nav from "./Nav.js"
import ZipForm from './ZipForm.js'
import Info from "./Info.js"
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			cities: [
				["New York", "NY", [40, -73], 6293, "791578339"],
				["Manhattan", "NY", [40, -73], 6293, "791578339"],
				["Wall Street", "NY", [40, -73], 6293, "791578339"]
			]
		}
	}
  render() {
    return (
	  <div className="App Container">
	    <Nav>
		</Nav>
		<ZipForm searchZip="10016" />
		<Info cities={this.state.cities}/>
	  </div>
    );
  }
}

export default App;
