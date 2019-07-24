import React from "react"
import "./App.css"

class Info extends React.Component {
	render() {
		let arr = [];

		this.props.cities.forEach(function(city) {
			arr.push(
				<div className="info-card">
				  <div className="info-element">Name: {city[0]}</div>
				  <div className="info-element">State: {city[1]}</div>
				  <div className="info-element">Location: {city[2]}</div>
				  <div className="info-element">Population: {city[3]}</div>
				  <div className="info-element">Wages: {city[4]}</div>
				</div>
			);
		});

		return (
			<div>{arr}</div>
		);
	}

}

export default Info;