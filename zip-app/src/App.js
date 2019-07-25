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

	getZipInfo = zipcode => {
		let xhr = new XMLHttpRequest()
		let url = "http://ctp-zip-api.herokuapp.com/zip/" + zipcode
		data = []
	
		xhr.open("GET", url, true)
	
		xhr.onload = function() {
			if ((this.status == 200) && (this.readyState == 4)) {
				let xhrJSON = JSON.parse(xhr.response)
				console.log(xhrJSON)
				for (let i = 0; i < xhrJSON.length; i++) {
					data[i] = [xhrJSON[i].City, xhrJSON[i].State, xhrJSON[i].Lat, xhrJSON[i].Long, xhrJSON[i].EstimatedPopulation, xhrJSON[i].TotalWages]
				}
			}
			else {
				infoP.innerHTML = "No results found for \"" + zipcode + "\"" 
				console.log("ERROR")
			}
		}
		
		xhr.send()
		
		return data
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
