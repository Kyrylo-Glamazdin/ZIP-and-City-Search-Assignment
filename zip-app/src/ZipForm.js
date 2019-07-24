import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ZipForm.css'

class ZipForm extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			searchZip: props.searchZip,
			apiLink: "http://ctp-zip-api.herokuapp.com/zip/",
			fullZipLink: "http://ctp-zip-api.herokuapp.com/zip/" + props.searchZip
		};
	}

	handleInputChange(event){
		this.setState({searchZip: event.target.value});
		this.setState({fullZipLink: this.state.apiLink + event.target.value});
	}

	handleSubmit(event){
		event.preventDefault();
		console.log(this.state.fullZipLink);
	}


	render(){
		return(
				<div className="ZipSearchForm">
					<form onSubmit={this.handleSubmit}>
						<label>
							Zip Code:
							<input type="text" name="zipCodeInput"
							value={this.state.searchZip} onChange={this.handleInputChange} />
						</label>
						<input type="submit" value="Search" />
					</form>
				</div>
			)
	}
};

ZipForm.propTypes = {
	searchZip: PropTypes.string
};

export default ZipForm