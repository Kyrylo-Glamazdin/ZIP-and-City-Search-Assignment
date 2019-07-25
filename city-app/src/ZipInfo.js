import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './ZipInfo.css'

class ZipInfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			zipCode: props.zipCode
		}
	}
	
	render(){
		return <div>
			{this.state.zipCode}
		</div>
	}
};

ZipInfo.propTypes = {
	zipCode: PropTypes.string
};

export default ZipInfo