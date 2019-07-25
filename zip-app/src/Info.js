import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./App.css"
import "./Info.css"

class Info extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			zipCity: props.zipCity,
			zipState: props.zipState,
			zipLat: props.zipLat,
			zipLon: props.zipLon,
			zipLoc: undefined,
			zipPopulation: props.zipPopulation,
			zipWages: props.zipWages
		}
	}

	componentDidMount(){
		this.setState({
			zipLoc: this.state.zipLat + " " + this.state.zipLon
		})
	}

	render() {
		return <div className="info-element">
			<div className="zipHeader">
				{this.state.zipCity}
			</div>
			<div className="zipFullInfo">
				<div className="info-text"> State: {this.state.zipState} </div>
				<div className="info-text"> Location: {this.state.zipLoc} </div>
				<div className="info-text"> Population: {this.state.zipPopulation} </div>
				<div className="info-text"> Wages: {this.state.zipWages} </div>
			</div>
		</div>
	}

};

Info.propTypes = {
	zipCity: PropTypes.string,
	zipState: PropTypes.string,
	zipLat: PropTypes.string,
	zipLon: PropTypes.string,
	zipPopulation: PropTypes.string,
	zipWages: PropTypes.string
};

export default Info;