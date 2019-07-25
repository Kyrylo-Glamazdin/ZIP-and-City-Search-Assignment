import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./App.css"

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

		return <div>
			<div className="zipHeader">
				{this.state.zipCity}
			</div>
			<div className="zipFullInfo">
				State: {this.state.zipState} <br />
				Location: {this.state.zipLoc} <br />
				Population: {this.state.zipPopulation} <br />
				Wages: {this.state.zipWages} <br />
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