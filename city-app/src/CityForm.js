import React, { Component } from 'react';

class CityForm extends Component{
	constructor(){
		super();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.retrieveCityData = this.retrieveCityData.bind(this);
		this.state = {
			city: "",
			apiLink: "http://ctp-zip-api.herokuapp.com/city/",
			fullCityLink: "http://ctp-zip-api.herokuapp.com/city/"
		};
	}

	handleInputChange(event){
		this.setState({city: event.target.value.toUpperCase()});
		this.setState({fullCityLink: this.state.apiLink + event.target.value.toUpperCase()});
	}

	handleSubmit(event){
		event.preventDefault();
		console.log(this.state.fullCityLink);
		this.retrieveCityData();
	}

	retrieveCityData(){

	}

	render(){
		return <div className="CitySearchForm">
			<form onSubmit={this.handleSubmit}>
				<label>
					City:
					<input type="text" name="cityInput" onChange={this.handleInputChange} />
				</label>
				<input type="submit" value="Search" />
			</form>
		</div>
	}
};

export default CityForm