import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Info from './Info.js'
import './ZipForm.css'

class ZipForm extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
        this.retrieveData = this.retrieveData.bind(this);
		this.state = {
			searchZip: props.searchZip,
			apiLink: "http://ctp-zip-api.herokuapp.com/zip/",
			fullZipLink: "http://ctp-zip-api.herokuapp.com/zip/" + props.searchZip,
            items: [],
            isLoaded: false
		};
	}

	handleInputChange(event){
		this.setState({searchZip: event.target.value});
		this.setState({fullZipLink: this.state.apiLink + event.target.value});
	}
    
    

	handleSubmit(event){
		event.preventDefault();
		console.log(this.state.fullZipLink);
        this.retrieveData();
	}
    
    retrieveData(){
    	const that = this;
        fetch(this.state.fullZipLink)
        .then(res => res.json())
        .then(json => {
              this.setState({
                    isLoaded: true,
                    items: json
              })
        })
        .catch(function() {
        	that.setState({
        		items: []
        	})
        })
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
            		{this.state.items.length == 0 ? <p>Not Found</p> : <span></span>}
               <div className="elements-container">
               {this.state.items.map(item => (
                                   <Info key={item.RecordNumber} zipCity={item.City} zipState={item.State} zipLat={item.Lat} zipLon={item.Long}
                                   zipPopulation={item.EstimatedPopulation} zipWages={item.TotalWages} />
                          ))}
               </div>
				</div>
               );
	}
};

ZipForm.propTypes = {
	searchZip: PropTypes.string
};

export default ZipForm